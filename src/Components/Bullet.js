const THREE = require('three');
import {GameObject} from './GameObject.js';

class Bullet extends GameObject{
    constructor(scene){
        super(scene);

        this.name = 'bullet';
        this.speed = 20;
        this.duration = 200;

        // Make sphere for bullet
        let geo = new THREE.SphereGeometry(0.25, 18, 18);
        let material = new THREE.MeshPhongMaterial({color:'red', wireframe:false});
        this.mesh = new THREE.Mesh(geo, material);
        this.mesh.name = this.name;
        this.add(this.mesh);

        this.scene.add(this);
    }

    update(deltaTime, camera, frustrum, hits){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
        }
        this.translateY(this.speed * deltaTime);
        if(this.duration <= 0){ this.destroy(); }
        else{ this.duration--; }

        if(this.alive) this.checkCollision(['asteroid']);
    }
}

export {Bullet};