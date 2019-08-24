const THREE = require('three');
import {GameObject} from './GameObject';
import { SphereGeometry } from 'three';

class Asteroid extends GameObject{
    constructor(scene, size, position = null, rotation){
        super(scene);

        this.name = 'asteroid';
        this.size = size;
        this.speed = 2.5;

        let geo = new THREE.SphereGeometry(size,32,32);//0x787878
        let material = new THREE.MeshPhongMaterial({color:0x787878, wireframe: false});
        this.mesh = new THREE.Mesh(geo, material);
        this.mesh.name = this.name;
        this.add(this.mesh);

        if(position != null) {
            this.position.set(position.x, position.y, position.z);
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
    }
}

export{Asteroid};