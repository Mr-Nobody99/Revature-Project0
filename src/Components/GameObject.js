const THREE = require('three');
import {Object3D} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

class GameObject extends Object3D{
    constructor(scene){
        super();
        this.scene = scene;
        this.alive = true;
        this.loadingComplete = false;
        this.blockScreenLoop = false;
    }

    makeCollider(geo){
        let mat = new THREE.MeshStandardMaterial({visible:false});
        let mesh = new THREE.Mesh(geo, mat);
        this.collider = mesh;
        this.add(this.collider);
    }

    async loadMesh(url){
        const loader = new GLTFLoader();
        return new Promise(resolve => {
            loader.load(url, (gltf)=>{
                this.mesh = gltf.scene.children[0];
                if(this.name === 'asteroid'){
                    this.getWorldPosition(this.mesh.position);
                    this.mesh.updateMatrixWorld(false);
                    this.add(this.mesh);
                    this.mesh.position.set(0,0,0);
                }
                else{
                    this.add(this.mesh);
                }
                resolve(this.scene.add(this), this.loadingComplete = true);
            });
        });
    }

    //Called to loop object around screen
    screenLoop(camera){
        if(!this.blockScreenLoop){
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
    }

    checkCollision(names){
        if(this.alive){

            let hits = [];
            for(let child of this.scene.children){
                if(names.includes(child.name)){
                    hits.push(child.collider);
                }
            }

            let vertices;
            let origin = this.position.clone();
            let tempGeo = new THREE.Geometry().fromBufferGeometry(this.collider.geometry);
            vertices = tempGeo.vertices;
            tempGeo.dispose();

            for(let i = 0; i < vertices.length; i++){

                let localVertex = vertices[i].clone();
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
        this.collider.geometry.dispose();
        this.collider = undefined;
        this.alive = false;
    }

}

export {GameObject};