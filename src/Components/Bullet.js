const THREE = require('three');
import {GameObject} from './GameObject.js';

class Bullet extends GameObject{
    constructor(scene, direction = null){
        super(scene);

        this.name = 'bullet';
        this.speed = 25;
        this.duration = 200;
        this.direction = direction;

        // Make sphere for bullet
        let geo = new THREE.SphereBufferGeometry(0.12, 18, 18);
        let material = new THREE.MeshPhongMaterial({color:'yellow', wireframe:false});
        this.collider = new THREE.Mesh(geo, material);
        this.add(this.collider);

        this.scene.add(this);
    }

    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera);
        }
        
        if(this.duration <= 0){ this.destroy(); }
        else{ this.duration--; }
        
        if(this.direction == null){ 
            this.translateY(this.speed * deltaTime); 
        }
        else{ 
            this.translateOnAxis(this.direction, this.speed * deltaTime);
        }

        this.checkCollision(['asteroid', 'enemy']);
    }
}

export {Bullet};