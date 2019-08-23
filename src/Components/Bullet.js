const THREE = require('three');
import {GameObject} from './GameObject.js';

class Bullet extends GameObject{
    constructor(scene){
        super(scene);

        this.speed = 20;
        this.duration = 250;

        // Make sphere for bullet
        let geo = new THREE.SphereGeometry(0.25, 18, 18);
        let material = new THREE.MeshPhongMaterial({color:'red'});
        this.mesh = new THREE.Mesh(geo, material);
        this.mesh.name = 'bullet';
        this.add(this.mesh);

        this.scene.add(this);
    }

    update(deltaTime){
        this.translateY(this.speed * deltaTime);
        --this.duration;
        if(this.duration <= 0){
            return this.destroy();
        }
        return false;
    }

    destroy(){
        this.scene.remove(this);
        this.remove(this.mesh);
        this.mesh = undefined;
        return true;
    }
}

export {Bullet};