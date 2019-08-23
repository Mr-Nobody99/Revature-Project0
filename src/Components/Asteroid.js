const THREE = require('three');
import {GameObject} from './GameObject';
import { SphereGeometry } from 'three';

class Asteroid extends GameObject{
    constructor(scene, size){
        super(scene);

        this.size = size;
        this.speed = 2;

        let geo = new THREE.SphereGeometry(size,6,6);
        let material = new THREE.MeshPhongMaterial({color:0x787878});
        this.mesh = new THREE.Mesh(geo, material);
        this.mesh.name = 'asteroid';
        this.add(this.mesh);

        let neg = Math.random();

        if(neg >= 0.5){
            this.position.set(Math.random() * -20, Math.random() * -20, 0);
            this.rotation.z = Math.random();
        }
        else{
            this.position.set(Math.random() * 20, Math.random() * 20, 0);
            this.rotation.z = -(Math.random());
        }

        scene.add(this);
    }


    update(deltaTime){
        let hit = this.checkCollision();
        if(hit != false){
            switch(hit){
                case 'bullet':
                    return this.destroy();
                case 'ship':
                    break;
            }
            console.log(`${this.mesh.name} hit by a ${hit}`);
        }
        this.translateY(this.speed * deltaTime);
        return true;
    }

    destroy(){
        super.destroy();
        switch(this.size){
            case 3:
                return 3;
            case 2:
                return 2;
            case 1:
                return 1;
        }
    }
}

export{Asteroid};