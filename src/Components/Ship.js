const THREE = require('three');
import {Object3D} from 'three';

class Ship extends Object3D{
    constructor(mesh){
        super();

        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.direction = -this.rotation.z;
        this.thrustForce = 0.1;
        this.rotationSpeed = 2;

        this.add(mesh);
    }

    screenLoop(camera){//Function used to loop object around screen

        //Create a new vector from current location. This will be used to determine which edge the object has moved into.
        let screenPos = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
        screenPos.project(camera);//Project the vector to screen space(ie. cameras view);
        screenPos.x = ( screenPos.x + 1 ) * window.innerWidth / 2 ;//Map the projected vector
        screenPos.y = ( screenPos.y + 1 ) * window.innerHeight / 2 ;// using basic conversion formula.
        screenPos.z = 0;

        //Creating a new target world space loaction using the screen space position
        //This will be used to as the target location to warp the obect to.
        let worldPos = new THREE.Vector3((screenPos.x / window.innerWidth) * 2 - 1,
                                        (screenPos.y / window.innerHeight) * 2 - 1,
                                        0.5);
        worldPos.unproject(camera);//project back into world space;

        if(screenPos.y > 0 && screenPos.y < window.innerHeight){
            let x = (100 * worldPos.x);
            if(screenPos.x <= 0) { this.position.setX(-x + 5); }
            else if(screenPos.x >= 0) { this.position.setX(-x - 5); }
        }
        if(screenPos.x > 0 && screenPos.x < window.innerWidth){
            let y = (100 * worldPos.y);
            if(screenPos.y <= 0) { this.position.setY(-y + 3); }
            else if(screenPos.y >= 0) { this.position.setY(-y - 3); }
        }
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
        this.direction = -this.rotation.z;// update new direction after rotation is applied
    }

    update(input, deltaTime){
        this.spin(input[1], deltaTime);
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