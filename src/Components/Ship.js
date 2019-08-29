const THREE = require('three');
import {GameObject} from './GameObject.js';
import {Bullet} from './Bullet.js';

class Ship extends GameObject{
    constructor(scene){
        super(scene);
        
        this.loadMesh('./glb_files/spaceShip_LowPoly.glb');

        let geo = new THREE.CylinderBufferGeometry(0.25, 1.25, 1.85, 18, 18);
        this.makeCollider(geo);
        this.collider.position.setY(0.15);

        this.name = 'ship';
        this.lives = 3;
        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.thrustForce = 0.25;
        this.rotationSpeed = 3;
    }

    addThrust(){
        this.acceleration.x += this.thrustForce * Math.cos(-this.rotation.z);
        this.acceleration.y += this.thrustForce * Math.sin(-this.rotation.z);
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
    }

    shoot(){
        let muzzle = new THREE.Vector3(0,1.5,0);
        this.localToWorld(muzzle);

        let bullet = new Bullet(this.scene);
        bullet.position.set(muzzle.x, muzzle.y, muzzle.z);
        bullet.rotation.z = this.rotation.z;
        bullet.updateMatrixWorld(true);

        return bullet;
    }
    
    update(input, deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera);
            this.blockScreenLoop = true;
        }
        else{this.blockScreenLoop = false;}
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

        this.checkCollision(['asteroid', 'bullet']);
    }

    destroy(){
        let icons = document.querySelectorAll('.life');
        icons[this.lives-1].style.display = 'none';
        this.lives--;
        
        if(this.lives >= 1){
            this.position.set(0,0,0);
            this.velocity.set(0,0);
            this.acceleration.set(0,0);
            this.rotation.z = 0;
        }
        else{
            super.destroy();
        }
    }
}

export {Ship};