const THREE = require('three');
import {GameObject} from './GameObject';

class Asteroid extends GameObject{
    constructor(scene, player, size, position = null, rotation){
        super(scene);
        
        this.playerRef = player;
        this.name = 'asteroid';
        this.size = size;
        this.value = size * 100;

        this.position.set(position.x, position.y, 0);
        this.rotation.z = rotation;

        switch(size){
            case 3:
                this.loadMesh('./glb_files/Asteroid1.glb');
                this.speed = 2.5;
                break;
            case 2:
                this.loadMesh('./glb_files/Asteroid2.glb');
                this.speed = 4;
                break;
            case 1:
                this.loadMesh('./glb_files/Asteroid3.glb');
                this.speed = 4.5;
                break;
        }
    }

    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
        }
        this.translateY(this.speed * deltaTime);
        this.rotateY(0.5 * deltaTime);
    }

    destroy(){
        let scoreDiv = document.querySelector('#score');
        let score = parseInt(scoreDiv.innerHTML, 10);
        score += this.value;
        scoreDiv.innerHTML = score.toString(10);
        super.destroy();
    }
}

export{Asteroid};