const THREE = require('three');
import {GameObject} from './GameObject.js';
import {Bullet} from './Bullet.js';

class Ship extends GameObject{
    constructor(scene){
        super(scene);

        this.shotsFired = [];
        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.direction = -this.rotation.z;
        this.thrustForce = 0.1;
        this.rotationSpeed = 2;

        //make cube for ship stand-in
        let geo = new THREE.BoxGeometry(1,2,1, 6,6,6);
        let material = new THREE.MeshPhongMaterial({color: 0x4287f5});
        this.mesh = new THREE.Mesh(geo, material);
        this.mesh.name = 'ship';
        this.add(this.mesh);

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
        
        // update new direction after rotation is applied
        this.direction = -this.rotation.z;
    }

    update(input, deltaTime){

        let hit = this.checkCollision();
        if(hit != false){
            console.log(`${this.mesh.name} hit by a ${hit}`);
        }

        for(let bullet of this.shotsFired){
            if(bullet.update(deltaTime)){
                this.shotsFired.splice(this.shotsFired.indexOf(bullet),1);
                this.collisions.splice(this.shotsFired.indexOf(bullet),1);
            }
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

    shoot(){
        
        let muzzle = new THREE.Vector3();
        this.gun.localToWorld(muzzle);

        let bullet = new Bullet(this.scene);
        bullet.position.set(muzzle.x, muzzle.y, muzzle.z);
        bullet.rotation.z = this.rotation.z;

        this.collisions.push(bullet.mesh);
        this.shotsFired.push(bullet);
    }
}

export {Ship};