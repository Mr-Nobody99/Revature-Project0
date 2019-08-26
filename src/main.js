const THREE = require('three');
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Asteroid} from './Components/Asteroid.js';
import {Enemy} from './Components/Enemy.js';
import {Ship} from './Components/Ship.js';
import './style.css';
import lifeImg from './images/AsteroidShip_small.jpg';
import spaceImg from './images/space-image.png';

const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0x008077, 0x4b1f5e, 1.25));
scene.add(new THREE.AmbientLight(0xdedede, 1));
let light = new THREE.DirectionalLight(0xdefcf6, 0.5);
light.position.set(20,-5,10);
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

let spaceTexture = new THREE.TextureLoader().load(spaceImg);
spaceTexture.center.set(0.5, 0.5);
let bgMaterial = new THREE.MeshPhongMaterial({map: spaceTexture, alphaMap: spaceTexture});
bgMaterial.transparent = true;
// bgMaterial.opacity = 0.25;
bgMaterial.blending = THREE.AdditiveBlending;
let bgPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25,25), bgMaterial);
bgPlane.position.set(0, -5, -15);
scene.add(bgPlane);

// const controls = new OrbitControls( camera, renderer.domElement );

const input = ['',''];
const hits = [];
const bullets = [];
const enemies = [];
const asteroids = [];
const asteroidInterval = window.setInterval(spawnAsteroid, 5000);
let enemyInterval = window.setInterval(spawnEnemy, 15000);

const player = new Ship(scene, lives);
hits.push(player.mesh);

function update(){
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    let deltaTime = clock.getDelta();
    // spaceTexture.rotation += 0.01 * deltaTime;

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

    for(let enemy of enemies){
        switch(enemy.alive){
            case true:
                enemy.update(deltaTime, camera, frustrum);
                break;
            case false:
                enemies.splice(enemies.indexOf(enemy), 1);
                hits.splice(hits.indexOf(enemy), 1);
                break;
        }
    }
    // enemy.update(deltaTime, camera, frustrum);
    if(player.alive){player.update(input, deltaTime, camera, frustrum);}
    // controls.update();
    render();
}

function render(){
    renderer.render(scene, camera);
}

function spawnEnemy(){
    let enemy = new Enemy(scene, player, bullets, hits);
    enemies.push(enemy);
    hits.push(enemy.mesh);

    clearInterval(enemyInterval);
    enemyInterval = window.setInterval(spawnEnemy, (15000 + Math.random()) * 2);
}

function spawnAsteroid(size, position, rotation){
    let asteroid;
    if(size != null){ asteroid = new Asteroid(scene, player, size, position, rotation);}
    else{ asteroid = new Asteroid(scene, player, (1 + Math.floor( Math.random() * 3) ) );}
    asteroids.push(asteroid);
    hits.push(asteroid.mesh);
}

//Mouse click event for shooting;
window.addEventListener('mousedown', shoot, false);
function shoot(){
    if(player.alive){
        let bullet = player.shoot();
        bullets.push(bullet);
        hits.push(bullet.mesh);
    }
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