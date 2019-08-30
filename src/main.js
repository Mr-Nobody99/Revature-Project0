const THREE = require('three');

import {Asteroid} from './Components/Asteroid.js';
import {Enemy} from './Components/Enemy.js';
import {Ship} from './Components/Ship.js';

import spaceImg from './images/space-image.png';
import starsImg from './images/stars-img.png';

import './style.css';

const clock = new THREE.Clock();

// Make scene and add lights
const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0x008077, 0x4b1f5e, 1.25));
scene.add(new THREE.AmbientLight(0xdedede, 1));
let light = new THREE.DirectionalLight(0xdefcf6, 0.5);
light.position.set(20,-5,10);
scene.add(light);

// Make camera and frustrum
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
let frustrum = new THREE.Frustum();
camera.position.set(0,0,50);

// Make renderer and set animation loop
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( ()=>{ update(); } );
renderer.setClearColor(0x000000);

//Add render canvas element to document body
document.body.appendChild(renderer.domElement);

//Background setup
let starsTexture = new THREE.TextureLoader().load(starsImg);
starsTexture.wrapS = THREE.RepeatWrapping;
starsTexture.wrapT = THREE.RepeatWrapping;
starsTexture.repeat.set( 4, 4 );

let spaceTexture = new THREE.TextureLoader().load(spaceImg);
spaceTexture.wrapS = THREE.RepeatWrapping;
spaceTexture.wrapT = THREE.RepeatWrapping;
spaceTexture.center.set(0.5, 0.5);

let starMaterial = new THREE.MeshPhongMaterial({map: starsTexture, alphaMap: starsTexture});
starMaterial.transparent = true;
starMaterial.depthTest = true;
starMaterial.blending = THREE.AdditiveBlending;

let spaceMaterial = new THREE.MeshPhongMaterial({map: spaceTexture, alphaMap: spaceTexture});
spaceMaterial.transparent = true;
spaceMaterial.opacity = 0.15;
spaceMaterial.depthTest = true;
spaceMaterial.blending = THREE.AdditiveBlending;

let starPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25, 25), starMaterial);
starPlane.position.set(0, -10, 0);
scene.add(starPlane);

let spacePlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25,25), spaceMaterial);
spacePlane.position.set(0, -15, 0);
scene.add(spacePlane);

// arrays
const input = ['',''];
const bullets = [];
const enemies = [];
const asteroids = [];

// Interval ID's for spawning asteroids/enemies
let asteroidInterval = window.setInterval(spawnAsteroid, 5000);
let enemyInterval = window.setInterval(spawnEnemy, 15000);
let enemyLimit = 2;

// Instantiate player
let player = new Ship(scene, bullets);

// Reset flag
let blockReset = false;

function update(){
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    
    let deltaTime = clock.getDelta();
    spaceTexture.rotation += 0.01 * deltaTime;

    //Update asteroids
    for(let asteroid of asteroids){
        switch(asteroid.alive){
            case true:
                asteroid.update(deltaTime, camera, frustrum);
                break;
            case false:
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
                asteroids.splice(asteroids.indexOf(asteroid), 1);
                break;
        }
    }

    //Upadte Enemies
    for(let enemy of enemies){
        switch(enemy.alive){
            case true:
                enemy.update(deltaTime, camera, frustrum);
                break;
            case false:
                enemies.splice(enemies.indexOf(enemy), 1);
                break;
        }
    }

    //Update bullets
    for(let bullet of bullets){
        switch(bullet.alive){
            case true:
                bullet.update(deltaTime, camera, frustrum);
                break;
            case false:
                bullets.splice(bullets.indexOf(bullet), 1);
                break;
        }
    }

    //Update player
    if(player.alive){
        player.update(input, deltaTime, camera, frustrum);
    }
    else if(!blockReset){

        blockReset = true;
        
        clearInterval(asteroidInterval);
        clearInterval(enemyInterval);

        setTimeout(restart, 3000);
    }
    render();
}

function render(){
    renderer.render(scene, camera);
}

function restart()
{
    //Destroy all asteroids, empty array the array
    for(let a of asteroids){
        a.destroy();
    }
    asteroids.length = 0;

    //Destroy all bullets, empty array the array
    for(let b of bullets){
        b.destroy();
    }
    bullets.length = 0;

    //Destroy all enemies, empty array the array
    for(let e of enemies){
        e.destroy();
    }
    enemies.length = 0;

    // Reset interval ID's
    asteroidInterval = window.setInterval(spawnAsteroid, 5000);
    enemyInterval = window.setInterval(spawnEnemy, 15000);

    // Reset score
    let scoreDiv = document.querySelector('#score');
    scoreDiv.innerHTML = '0000';

    // Reset life counter
    let icons = document.querySelectorAll('.life');
    for(let element of icons){
        element.style.display = 'block';
    }

    // Re-initalize player
    player = new Ship(scene, bullets);

    blockReset = false;
}

//Called to create Enemies
function spawnEnemy(){
    if(enemies.length < enemyLimit){
        let enemy = new Enemy(scene, player, bullets);
        enemies.push(enemy);

        clearInterval(enemyInterval);
        enemyInterval = window.setInterval(spawnEnemy, (15000 + Math.random()) * 2);
    }
}

//Called to create asteroids
function spawnAsteroid(size, position, rotation){
    let asteroid;
    let transform = makeNewTransform();
    
    if(size != null){ 
        asteroid = new Asteroid(scene, player, size, position, rotation);
    }
    else{ 
        asteroid = new Asteroid(scene, player, (1 + Math.floor( Math.random() * 3) ), transform.position, transform.rotation);
    }

    asteroids.push(asteroid);

    clearInterval(asteroidInterval);
    asteroidInterval = window.setInterval(spawnAsteroid, (4000 + Math.random() * 2));
}

function makeNewTransform(){
    let pos, rot;
    do{
        pos = (Math.random() >= 0.5) ? (new THREE.Vector3(Math.random() * -20, Math.random() * -20, 0)) : (new THREE.Vector3(Math.random() * 20, Math.random() * 20, 0));
        rot = (Math.random() >= 0.5) ? (Math.random() * 6) : -(Math.random() * 6);
    }while(pos.distanceTo(player.position) < 10)
    //do while to prevent spawning ontop of player

    return {
        position: pos,
        rotation: rot
    }
}

//Mouse click event for shooting;
window.addEventListener('mousedown', shoot, false);
function shoot(){
    if(player.alive){
        player.shoot();
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