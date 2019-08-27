const THREE = require('three');
import {GameObject} from './GameObject.js';
import {Bullet} from './Bullet.js';

class Enemy extends GameObject{
    constructor(scene, player, bullets){
        super(scene);
        this.loadMesh('./glb_files/UFO.glb');

        this.bullets = bullets;

        this.name = 'enemy';
        this.playerRef = player;
        this.direction = new THREE.Vector3(-1,0,0);
        this.speed = 12;
        this.shootDelay = 175;

        // let geo = new THREE.SphereBufferGeometry(0.75, 18, 18);
        // let material = new THREE.MeshPhongMaterial({color:'red'});
        // this.mesh = new THREE.Mesh(geo, material);
        // this.mesh.name = this.name;
        // this.add(this.mesh);

        this.position.set(35, ((Math.random()-0.5) * 20), 0);

        this.scene.add(this);
    }

    shoot(){

        let dir = this.playerRef.position.clone();
        dir.sub(this.position);
        dir.normalize();

        let pos = this.position.clone();
        pos.add(dir);

        let bullet = new Bullet(this.scene, dir);
        bullet.position.set(pos.x, pos.y, pos.z);
        bullet.updateMatrixWorld(true);
        
        this.bullets.push(bullet);
    }

    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
        }
        
        this.shootDelay--;
        if(this.shootDelay <= 0){
            this.shoot();
            this.shootDelay = (10 + Math.random()) * 20;
        }

        if(this.position.distanceTo(this.playerRef.position) < 15){
            let dir = this.position.clone();
            dir.sub(this.playerRef.position);
            dir.normalize();
            
            this.direction.set(dir.x, dir.y, dir.z);
        }
        this.translateOnAxis(this.direction, this.speed * deltaTime);
        if(this.loadingComplete){this.mesh.rotateZ(1.5*deltaTime);}
    }
}

export {Enemy};