const THREE = require('three');
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Object3D} from 'three';
import {Asteroid} from './Components/Asteroid.js';
import {Ship} from './Components/Ship.js';
import {Bullet} from './Components/Bullet.js';
import './style.css';

const input = ['',''];
let bullets = [];
let asteroids = [];
let asteroidInterval;

const clock = new THREE.Clock();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(0,0,50);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( ()=>{ update(); } );
renderer.setClearColor(0x000000);

document.body.appendChild(renderer.domElement);

const player = new Ship(scene);

const controls = new OrbitControls( camera, renderer.domElement );

init();
function init(){
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1,1,1);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0x222222));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 0.75));

    asteroidInterval = window.setInterval(spawnAsteroid, 5000);

}

function spawnAsteroid(size){
    if(size != null){
        let asteroid = new Asteroid(scene, (1 + Math.floor( Math.random() * 3) ) );
        asteroid.collisions.push(player.mesh);
        asteroids.push(asteroid);
    }
    else{
        let asteroid = new Asteroid(scene, (1 + Math.floor( Math.random() * 3) ) );
        asteroid.collisions.push(player.mesh);
        asteroids.push(asteroid);
    }
}

function update(){

    let frustrum = new THREE.Frustum();
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    
    if(!frustrum.containsPoint(player.position)){
        player.screenLoop(camera);
    }
    if(player.shotsFired.length > 0){
        for(let bullet of player.shotsFired){
            if(!frustrum.containsPoint(bullet.position)){
                bullet.screenLoop(camera);
            }
        }
    }
    if(asteroids.length > 0){
        for(let asteroid of asteroids){
            if(!frustrum.containsPoint(asteroid.position)){
                asteroid.screenLoop(camera);
            }
        }
    }

    let deltaTime = clock.getDelta();
    player.update(input, deltaTime);

    for(let asteroid of asteroids){
        let alive = asteroid.update(deltaTime);
        if(alive != true){
            
        }
        else{
            asteroid.collisions = player.collisions.slice();
            asteroid.collisions.push(player.mesh);
        }
    }

    render();
}

function render(){
    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize);
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('mousedown', shoot, false);
function shoot(){
   player.shoot();
}

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