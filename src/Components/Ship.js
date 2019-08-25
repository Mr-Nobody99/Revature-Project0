const THREE = require('three');
import {GameObject} from './GameObject.js';
import {Bullet} from './Bullet.js';

class Ship extends GameObject{
    constructor(scene){
        super(scene);
        this.loadMesh('./glb_files/spaceShip_LowPoly.glb');
        
        this.name = 'ship';
        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.direction = -this.rotation.z;
        this.thrustForce = 0.1;
        this.rotationSpeed = 2;

        let gunGeo = new THREE.SphereBufferGeometry(.5,6,6);
        let gunMaterial = new THREE.MeshBasicMaterial({wireframe:true});
        this.gun = new THREE.Mesh(gunGeo, gunMaterial);
        this.gun.position.set(0,1.25,0);
        this.gun.visible = false;
        this.add(this.gun);

        this.scene.add(this);
    }

    addThrust(){
        this.acceleration.x += this.thrustForce * Math.cos(this.direction);
        this.acceleration.y += this.thrustForce * Math.sin(this.direction);
    }

    spin(dir, deltaTime){
        let rate = this.rotationSpeed * deltaTime;
        switch(dir){
            case 'left':
                this.rotateZ(rate);
                break;
            case 'right':
                this.rotateZ(-rate);
                break;
        }
        this.direction = -this.rotation.z;//update direction.
    }

    shoot(){
        let muzzle = new THREE.Vector3();
        this.gun.localToWorld(muzzle);

        let bullet = new Bullet(this.scene);
        bullet.position.set(muzzle.x, muzzle.y, muzzle.z);
        bullet.rotation.z = this.rotation.z;

        return bullet;
    }
    
    update(input, deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
        }
        //Apply rotation
        this.spin(input[1], deltaTime);
        //Add thrust if button pressed
        if(input[0] === 'forward'){
            this.addThrust();
        }
        // Update position using existing velocity
        this.position.x += this.velocity.y * deltaTime;
        this.position.y += this.velocity.x * deltaTime;
        // update velocity by adding acceleration
        this.velocity.addVectors(this.velocity, this.acceleration);
        this.velocity.multiplyScalar(0.997);//Apply friction
        //Reset acceleration
        this.acceleration.set(0,0,0);
    }
}

export {Ship};