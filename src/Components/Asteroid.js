const THREE = require('three');
import {GameObject} from './GameObject';
import { SphereGeometry } from 'three';

class Asteroid extends GameObject{
    constructor(scene, size, position = null, rotation){
        super(scene);

        switch(size){
            case 3:
                this.loadMesh('./glb_files/Asteroid1.glb');
                break;
            case 2:
                this.loadMesh('./glb_files/Asteroid2.glb');
                break;
            case 1:
                this.loadMesh('./glb_files/Asteroid3.glb');
                break;
        }
        
        this.name = 'asteroid';
        this.size = size;
        this.speed = 2.5;

        if(position != null) {
            this.position.set(position.x, position.y, 0);
            this.rotation.z = rotation;
        }
        else{
            let neg = Math.random();
            if(neg >= 0.5){
                this.position.set(Math.random() * -20, Math.random() * -20, 0);
                this.rotation.z = Math.random();
            }
            else{
                this.position.set(Math.random() * 20, Math.random() * 20, 0);
                this.rotation.z = -(Math.random());
            }
        }
        scene.add(this);
    }


    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
        }
        this.translateY(this.speed * deltaTime);
        this.rotateY(0.5 * deltaTime);
    }
}

export{Asteroid};