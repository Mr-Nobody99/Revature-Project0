const THREE = require('three');
import {Object3D} from 'three';

class GameObject extends Object3D{
    constructor(scene){
        super();

        this.scene = scene;
        this.collisions = [];
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

    checkCollision(){
        let origin = this.position.clone();
        for(let i = 0; i < this.mesh.geometry.vertices.length; i++){

            let localVertex = this.mesh.geometry.vertices[i].clone();
		    let globalVertex = localVertex.applyMatrix4( this.matrix );
		    let directionVector = globalVertex.sub( this.position );

		    let ray = new THREE.Raycaster( origin, directionVector.clone().normalize() );
            let collisionResults = ray.intersectObjects( this.collisions );
		    if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
                // console.log(`${this.mesh.name} colision results:`);
                // console.log(collisionResults);
			    return collisionResults[0].object.name;
            }
        }
        return false;
    }

    destroy(){
        this.scene.remove(this);
    }

}

export {GameObject};