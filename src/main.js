const THREE = require('three');
import {Object3D} from 'three';
import './style.css';

const input = ['',''];

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

//make cube for ship stand-in
let cubeGeo = new THREE.BoxBufferGeometry(1,2,1);
let material = new THREE.MeshPhongMaterial({color: 0x4287f5});
let cubeMesh = new THREE.Mesh(cubeGeo, material);

class Ship extends Object3D{
    constructor(mesh){
        super();
        this.add(mesh);

        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.direction = -this.rotation.z;
        this.rotationSpeed = 2;
    }

    addThrust(){
        this.acceleration.x += 0.1 * Math.cos(this.direction);
        this.acceleration.y += 0.1 * Math.sin(this.direction);
    }

    spin(input, deltaTime){
        let step = this.rotationSpeed * deltaTime;
        switch(input[1]){
            case 'left':
                this.rotateZ(step);
                break;
            case 'right':
                this.rotateZ(-step);
                break;
        }
        this.direction = -this.rotation.z
    }

    update(input, deltaTime){
        this.spin(input, deltaTime);
        if(input[0] === 'forward'){
            this.addThrust();
        }
        
        this.position.x += this.velocity.y * deltaTime;
        this.position.y += this.velocity.x * deltaTime;

        this.velocity.addVectors(this.velocity, this.acceleration);
        this.velocity.multiplyScalar(0.99);

        this.acceleration.set(0,0,0);
    }
}
const player = new Ship(cubeMesh);
scene.add(player);

init();
function init(){
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1,1,1);
    scene.add(light);

    scene.add(new THREE.AmbientLight(0x222222));
    scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 0.75));
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

function warpPlayer(position){
    let screenPos = new THREE.Vector3(position.x, position.y, position.z);
    screenPos.project(camera);
    screenPos.x = ( screenPos.x + 1 ) * window.innerWidth / 2 ;
    screenPos.y = ( screenPos.y + 1 ) * window.innerHeight / 2 ;
    screenPos.z = 0;

    let worldPos = new THREE.Vector3((screenPos.x / window.innerWidth) * 2 - 1,
                                    (screenPos.y / window.innerHeight) * 2 - 1,
                                    0.5);
    worldPos.unproject(camera);

    console.log(`screen y = ${screenPos.y}`);
    console.log(`world y = ${player.position.y}`);
    console.log(`new world y = ${((worldPos.y))}`);

    if(screenPos.x <= 0 && screenPos.y > 0 && screenPos.y < window.innerHeight){
        let x = ((worldPos.x)*100);
        player.position.setX(-x + 5);
    }
    if(screenPos.x >= 0 && screenPos.y > 0 && screenPos.y < window.innerHeight){
        let x = ((worldPos.x)*100);
        player.position.setX(-x - 5);
    }
    if(screenPos.y <= 0 && screenPos.x > 0 && screenPos.x < window.innerWidth){
        let y = ((worldPos.y)*100);
        player.position.setY(-y + 3);
    }
    if(screenPos.y >= 0 && screenPos.x > 0 && screenPos.x < window.innerWidth){
        let y = ((worldPos.y)*100);
        player.position.setY(-y - 3);
    }
}
function update(){
    let deltaTime = clock.getDelta();
    player.update(input, deltaTime);

    let frustrum = new THREE.Frustum();
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    
    if(!frustrum.containsPoint(player.position)){
        console.log('player off screen');
        warpPlayer(player.position);
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