const THREE = require('three');
import {Object3D} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

class GameObject extends Object3D{
    constructor(scene){
        super();
        this.scene = scene;
        this.alive = true;
    }

    async loadMesh(url){
        const loader = new GLTFLoader();
        return new Promise(resolve => {
            loader.load(url, (gltf)=>{
                this.mesh = gltf.scene.children[0];
                this.mesh.name = this.name;
                this.add(this.mesh);
                resolve();
            });
        });
    }

    screenLoop(camera){//Function used to loop object around screen
        let screenPos = this.position.clone();
        screenPos.project(camera);//Project the vector to screen space(ie. cameras view);
        screenPos.x = ( screenPos.x + 1 ) * window.innerWidth / 2 ;//Map the projected vector
        screenPos.y = ( screenPos.y + 1 ) * window.innerHeight / 2 ;// using basic conversion formula.
        screenPos.z = 0;

        let newPos = this.position.clone();
        newPos.multiplyScalar(-1);

        if(screenPos.y > 0 && screenPos.y < window.innerHeight){
            this.position.setX(newPos.x);
        }
        if(screenPos.x > 0 && screenPos.x < window.innerWidth){
            this.position.setY(newPos.y);
        }
    }

    checkCollision(names){
        if(this.alive){
            let hits = [];
            for(let child of this.scene.children){
                if(names.includes(child.name) && child.mesh != undefined){
                    hits.push(child.mesh);
                }
            }

            let origin = this.position.clone();
            for(let i = 0; i < this.mesh.geometry.vertices.length; i++){

                let localVertex = this.mesh.geometry.vertices[i].clone();
                let globalVertex = localVertex.applyMatrix4( this.matrix );
                let directionVector = globalVertex.sub( this.position );

                let ray = new THREE.Raycaster( origin, directionVector.clone().normalize() );
                let collisionResults = ray.intersectObjects( hits );
                if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
                    collisionResults[0].object.parent.destroy();
                    this.destroy();
                    return;
                }
            }
        }
    }

    destroy(){
        this.scene.remove(this);
        this.remove(this.mesh);
        this.mesh = undefined;
        this.alive = false;
    }

}

export {GameObject};