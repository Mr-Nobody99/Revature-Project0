const THREE = require('three');
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Asteroid} from './Components/Asteroid.js';
import {Ship} from './Components/Ship.js';
import './style.css';

const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 0.75));
let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1,1,1);
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(0,0,50);
let frustrum = new THREE.Frustum();

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( ()=>{ update(); } );
renderer.setClearColor(0x000000);

document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls( camera, renderer.domElement );

const input = ['',''];
const hits = [];
const bullets = [];
const asteroids = [];
const asteroidInterval = window.setInterval(spawnAsteroid, 5000);

const player = new Ship(scene);
hits.push(player.mesh);

function update(){
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    let deltaTime = clock.getDelta();

    for(let asteroid of asteroids){
        switch(asteroid.alive){
            case true:
                asteroid.update(deltaTime, camera, frustrum);
                break;
            case false:
                asteroids.splice(asteroids.indexOf(asteroid), 1);
                hits.splice(hits.indexOf(asteroid), 1);
                if(asteroid.size > 1){
                    for(let i = 0; i < asteroid.size; i++){
                        
                        let rot = asteroid.rotation.clone();
                        let pos = asteroid.position.clone();

                        let angleOffset = Math.random() >= 0.5 ? (0.5 + (Math.random() * 1.15)) : -( 0.5 + (Math.random() * 1.15) );
                        asteroid.rotateZ(angleOffset);

                        switch(i){
                            case 0:
                                asteroid.translateX(asteroid.size);
                                break;
                            case 1:
                                asteroid.translateX(-asteroid.size);
                                break;
                            case 2:
                                asteroid.translateY(asteroid.size);
                        }
                        spawnAsteroid(asteroid.size - 1, asteroid.position, asteroid.rotation.z);
                        asteroid.rotation.set(rot.x, rot.y, rot.z);
                        asteroid.position.set(pos.x, pos.y, pos.z);

                    }
                }
                break;
        }
    }
    
    player.update(input, deltaTime, camera, frustrum);

    for(let bullet of bullets){
        switch(bullet.alive){
            case true:
                bullet.update(deltaTime, camera, frustrum);
                break;
            case false:
                bullets.splice(bullets.indexOf(bullet), 1);
                hits.splice(hits.indexOf(bullet.mesh, 1));
                break;
        }
    }
    // controls.update();
    render();
}

function render(){
    renderer.render(scene, camera);
}

function spawnAsteroid(size, position, rotation){
    let asteroid;
    if(size != null){ asteroid = new Asteroid(scene, size, position, rotation);}
    else{ asteroid = new Asteroid(scene, (1 + Math.floor( Math.random() * 3) ) );}
    asteroids.push(asteroid);
    hits.push(asteroid.mesh);
}

//Mouse click event for shooting;
window.addEventListener('mousedown', shoot, false);
function shoot(){
    let bullet = player.shoot();
    bullets.push(bullet);
    hits.push(bullet.mesh);
}

//Getting keyboard input for directional controls.
window.addEventListener('keydown', updateInput, false);
window.addEventListener('keyup', updateInput, false);
function updateInput(e){
    let type = e.type;
    switch(e.keyCode){
        // W
        case 87:
        case 38:
            if(type == 'keydown' && input[0] != 'forward')
                input[0] = 'forward';
            else if(type == 'keyup' && input[0] == 'forward')
                input[0] = '';
            break;
        // S
        case 83:
        case 40:
            if(type == 'keydown' && input[0] != 'backward')
                input[0] = 'backward';
            else if(type == 'keyup' && input[0] == 'backward')
                input[0] = '';
            break;
        // A
        case 65:
        case 37:
            if(type == 'keydown' && input[1] != 'left')
                input[1] = 'left';
            else if(type == 'keyup' && input[1] == 'left')
                input[1] = '';
            break;
        // D
        case 68:
        case 39:
            if(type == 'keydown' && input[1] != 'right')
                input[1] = 'right';
            else if(type == 'keyup' && input[1] == 'right')
                input[1] = '';
            break;
    }
}

//Window resizing
window.addEventListener('resize', onWindowResize);
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}