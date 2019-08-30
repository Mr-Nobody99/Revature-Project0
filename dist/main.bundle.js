/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\ncanvas{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\np{\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n#info{\r\n    width: 20vw;\r\n    height: 10vh;\r\n    position: absolute;\r\n    \r\n    left: 10vw;\r\n\r\n    color: white;\r\n    font-size: 3.5vh;\r\n\r\n    display: grid;\r\n    grid-template-columns: min-content min-content;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-column-gap: 2vw;\r\n    align-items: center;\r\n    \r\n    z-index: 1;\r\n}\r\n#score{\r\n    font-family: monospace;\r\n    font-size: 3.5vh;\r\n}\r\n#info > div{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n#lives{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, min-content);\r\n    grid-template-rows: min-content;\r\n    justify-content: center;\r\n}\r\n.life{\r\n    width: 2vh;\r\n    height: 2vh;\r\n    margin: 2px;\r\n    background-color: white;\r\n}", ""]);


/***/ }),

/***/ "./src/Components/Asteroid.js":
/*!************************************!*\
  !*** ./src/Components/Asteroid.js ***!
  \************************************/
/*! exports provided: Asteroid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asteroid", function() { return Asteroid; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/Components/GameObject.js");
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Asteroid extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["GameObject"]{
    constructor(scene, player, size, position = null, rotation){
        super(scene);
        
        this.playerRef = player;
        this.name = 'asteroid';
        this.size = size;
        this.value = size * 100;

        this.position.set(position.x, position.y, 0);
        this.rotation.z = rotation;

        let geo;
        switch(size){
            case 3:
                this.loadMesh('./glb_files/Asteroid1.glb');
                geo = new THREE.SphereBufferGeometry(3.25, 18, 18);
                this.speed = 2.5;
                break;
            case 2:
                this.loadMesh('./glb_files/Asteroid2.glb');
                geo = new THREE.SphereBufferGeometry(1.75, 18, 18);
                this.speed = 4;
                break;
            case 1:
                this.loadMesh('./glb_files/Asteroid3.glb');
                geo = new THREE.SphereBufferGeometry(1, 18, 18);
                this.speed = 4.5;
                break;
        }
        this.makeCollider(geo);
    }

    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
            this.blockScreenLoop = true;
        }
        else{this.blockScreenLoop = false;}
        
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



/***/ }),

/***/ "./src/Components/Bullet.js":
/*!**********************************!*\
  !*** ./src/Components/Bullet.js ***!
  \**********************************/
/*! exports provided: Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bullet", function() { return Bullet; });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/Components/GameObject.js");
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Bullet extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__["GameObject"]{
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
            this.blockScreenLoop = true;
        }
        else{this.blockScreenLoop = false;}
        
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



/***/ }),

/***/ "./src/Components/Enemy.js":
/*!*********************************!*\
  !*** ./src/Components/Enemy.js ***!
  \*********************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/Components/GameObject.js");
/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet.js */ "./src/Components/Bullet.js");
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



class Enemy extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__["GameObject"]{
    constructor(scene, player, bullets){
        super(scene);

        this.loadMesh('./glb_files/UFO.glb');

        let geo = new THREE.SphereBufferGeometry(0.75, 18, 18);
        this.makeCollider(geo);

        this.bullets = bullets;
        
        this.name = 'enemy';
        this.playerRef = player;
        this.direction = new THREE.Vector3(-1,0,0);
        this.speed = 12;
        this.shootDelay = 175;
        this.value = 500;

        let x = Math.random() > 0.5 ? -35 : 35;
        let y = (Math.random()-0.5) * 20;
        this.position.set( x, y, 0);
    }

    shoot(){
        let dir = this.playerRef.position.clone();
        dir.sub(this.position);
        dir.normalize();

        let pos = this.position.clone();
        pos.add(dir);

        let bullet = new _Bullet_js__WEBPACK_IMPORTED_MODULE_1__["Bullet"](this.scene, dir);
        bullet.position.set(pos.x, pos.y, pos.z);
        bullet.updateMatrixWorld(true);
        
        this.bullets.push(bullet);
    }

    update(deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera)
            this.blockScreenLoop = true;
        }
        else{this.blockScreenLoop = false;}
        
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
    destroy(){
        let scoreDiv = document.querySelector('#score');
        let score = parseInt(scoreDiv.innerHTML, 10);
        score += this.value;
        scoreDiv.innerHTML = score.toString(10);
        super.destroy();
    }
}



/***/ }),

/***/ "./src/Components/GameObject.js":
/*!**************************************!*\
  !*** ./src/Components/GameObject.js ***!
  \**************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



class GameObject extends three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]{
    constructor(scene){
        super();
        this.scene = scene;
        this.alive = true;
        this.loadingComplete = false;
        this.blockScreenLoop = false;
    }

    async loadMesh(url){
        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"]();
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

    makeCollider(geo){
        let mat = new THREE.MeshStandardMaterial({visible:false});
        let mesh = new THREE.Mesh(geo, mat);
        this.collider = mesh;
        this.add(this.collider);
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
            newPos.multiplyScalar(-1);//Flip position to opposite side.

            //Horizontal
            if(screenPos.y > 0 && screenPos.y < window.innerHeight){
                this.position.setX(newPos.x);
            }
            //vertical
            if(screenPos.x > 0 && screenPos.x < window.innerWidth){
                this.position.setY(newPos.y);
            }
        }
    }

    checkCollision(names){
        let hits = [];
        if(this.alive){
            //Get all objects in the scene with the given names
            for(let child of this.scene.children){
                if(names.includes(child.name)){
                    hits.push(child.collider);
                }
            }

            let vertices;
            let origin = this.position.clone();
            //Create a temporary geometry from the buffer to make vertex list
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
                    this.destroy();
                    collisionResults[0].object.parent.destroy();
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



/***/ }),

/***/ "./src/Components/Ship.js":
/*!********************************!*\
  !*** ./src/Components/Ship.js ***!
  \********************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ship", function() { return Ship; });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/Components/GameObject.js");
/* harmony import */ var _Bullet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bullet.js */ "./src/Components/Bullet.js");
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



class Ship extends _GameObject_js__WEBPACK_IMPORTED_MODULE_0__["GameObject"]{
    constructor(scene, bullets){
        super(scene);
        
        this.loadMesh('./glb_files/spaceShip_LowPoly.glb');

        let geo = new THREE.CylinderBufferGeometry(0.25, 1.25, 1.85, 18, 18);
        this.makeCollider(geo);
        this.collider.position.setY(0.15);

        this.bullets = bullets;

        this.name = 'ship';
        this.lives = 3;
        this.velocity = new THREE.Vector2();
        this.acceleration = new THREE.Vector2();
        this.thrustForce = 0.25;
        this.rotationSpeed = 3;
    }

    addThrust(){
        this.acceleration.x += this.thrustForce * Math.cos(-this.rotation.z);
        this.acceleration.y += this.thrustForce * Math.sin(-this.rotation.z);
    }

    spin(dir, deltaTime){
        let rate = this.rotationSpeed * deltaTime;
        switch(dir){
            case 'left':
                this.rotateZ(rate);
                break;
            case 'right':
                this.rotateZ(-rate);
                break;
        }
    }

    shoot(){
        let muzzle = new THREE.Vector3(0,1.5,0);
        this.localToWorld(muzzle);

        let bullet = new _Bullet_js__WEBPACK_IMPORTED_MODULE_1__["Bullet"](this.scene);
        bullet.position.set(muzzle.x, muzzle.y, muzzle.z);
        bullet.rotation.z = this.rotation.z;
        bullet.updateMatrixWorld(true);

        this.bullets.push(bullet);
    }
    
    update(input, deltaTime, camera, frustrum){
        if(!frustrum.containsPoint(this.position)){
            this.screenLoop(camera);
            this.blockScreenLoop = true;
        }
        else{this.blockScreenLoop = false;}
        //Apply rotation
        this.spin(input[1], deltaTime);
        //Add thrust if button pressed
        if(input[0] === 'forward'){
            this.addThrust();
        }
        // Update position using existing velocity
        this.position.x += this.velocity.y * deltaTime;
        this.position.y += this.velocity.x * deltaTime;
        // update velocity by adding acceleration
        this.velocity.addVectors(this.velocity, this.acceleration);
        this.velocity.multiplyScalar(0.997);//Apply friction
        //Reset acceleration
        this.acceleration.set(0,0,0);

        this.checkCollision(['asteroid', 'bullet']);
    }

    destroy(){
        let icons = document.querySelectorAll('.life');
        icons[this.lives-1].style.display = 'none';
        this.lives--;
        
        if(this.lives >= 1){
            this.position.set(0,0,0);
            this.velocity.set(0,0);
            this.acceleration.set(0,0);
            this.rotation.z = 0;
        }
        else{
            super.destroy();
        }
    }
}



/***/ }),

/***/ "./src/images/space-image.png":
/*!************************************!*\
  !*** ./src/images/space-image.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eb4074760833ba7dd7fe0b67d9d3d761.png";

/***/ }),

/***/ "./src/images/stars-img.png":
/*!**********************************!*\
  !*** ./src/images/stars-img.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "007fb26e0c86b624e43abb4a2823749c.png";

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Asteroid.js */ "./src/Components/Asteroid.js");
/* harmony import */ var _Components_Enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Enemy.js */ "./src/Components/Enemy.js");
/* harmony import */ var _Components_Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Ship.js */ "./src/Components/Ship.js");
/* harmony import */ var _images_space_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/space-image.png */ "./src/images/space-image.png");
/* harmony import */ var _images_space_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_space_image_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_stars_img_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/stars-img.png */ "./src/images/stars-img.png");
/* harmony import */ var _images_stars_img_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_stars_img_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");










const clock = new THREE.Clock();

// Make scene and add lights
const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0x008077, 0x4b1f5e, 1.25));
scene.add(new THREE.AmbientLight(0xdedede, 1));
let light = new THREE.DirectionalLight(0xdefcf6, 0.5);
light.position.set(20,-5,10);
scene.add(light);

// Make camera and frustrum
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
let frustrum = new THREE.Frustum();
camera.position.set(0,0,50);

// Make renderer and set animation loop
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( ()=>{ update(); } );
renderer.setClearColor(0x000000);

//Add render canvas element to document body
document.body.appendChild(renderer.domElement);

//Background setup
let starsTexture = new THREE.TextureLoader().load(_images_stars_img_png__WEBPACK_IMPORTED_MODULE_4___default.a);
starsTexture.wrapS = THREE.RepeatWrapping;
starsTexture.wrapT = THREE.RepeatWrapping;
starsTexture.repeat.set( 4, 4 );

let spaceTexture = new THREE.TextureLoader().load(_images_space_image_png__WEBPACK_IMPORTED_MODULE_3___default.a);
spaceTexture.wrapS = THREE.RepeatWrapping;
spaceTexture.wrapT = THREE.RepeatWrapping;
spaceTexture.center.set(0.5, 0.5);

let starMaterial = new THREE.MeshPhongMaterial({map: starsTexture, alphaMap: starsTexture});
starMaterial.transparent = true;
starMaterial.depthTest = true;
starMaterial.blending = THREE.AdditiveBlending;

let spaceMaterial = new THREE.MeshPhongMaterial({map: spaceTexture, alphaMap: spaceTexture});
spaceMaterial.transparent = true;
spaceMaterial.opacity = 0.15;
spaceMaterial.depthTest = true;
spaceMaterial.blending = THREE.AdditiveBlending;

let starPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25, 25), starMaterial);
starPlane.position.set(0, -10, 0);
scene.add(starPlane);

let spacePlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25,25), spaceMaterial);
spacePlane.position.set(0, -15, 0);
scene.add(spacePlane);

// arrays
const input = ['',''];
const bullets = [];
const enemies = [];
const asteroids = [];

// Interval ID's for spawning asteroids/enemies
let asteroidInterval = window.setInterval(spawnAsteroid, 5000);
let enemyInterval = window.setInterval(spawnEnemy, 15000);
let enemyLimit = 2;

// Instantiate player
let player = new _Components_Ship_js__WEBPACK_IMPORTED_MODULE_2__["Ship"](scene, bullets);

// Reset flag
let blockReset = false;

function update(){
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    
    let deltaTime = clock.getDelta();
    spaceTexture.rotation += 0.01 * deltaTime;

    //Update asteroids
    for(let asteroid of asteroids){
        switch(asteroid.alive){
            case true:
                asteroid.update(deltaTime, camera, frustrum);
                break;
            case false:
                if(asteroid.size > 1){
                    for(let i = 0; i < asteroid.size; i++){
                 
                        let rot = asteroid.rotation.clone();
                        let pos = asteroid.position.clone();

                        let angleOffset = Math.random() >= 0.5 ? (0.5 + (Math.random() * 1.15)) : -( 0.5 + (Math.random() * 1.15) );
                        asteroid.rotateZ(angleOffset);

                        switch(i){
                            case 0:
                                asteroid.translateX(asteroid.size);
                                break;
                            case 1:
                                asteroid.translateX(-asteroid.size);
                                break;
                            case 2:
                                asteroid.translateY(asteroid.size);
                        }
                        spawnAsteroid(asteroid.size - 1, asteroid.position, asteroid.rotation.z);
                        asteroid.rotation.set(rot.x, rot.y, rot.z);
                        asteroid.position.set(pos.x, pos.y, pos.z);

                    }
                }
                asteroids.splice(asteroids.indexOf(asteroid), 1);
                break;
        }
    }

    //Upadte Enemies
    for(let enemy of enemies){
        switch(enemy.alive){
            case true:
                enemy.update(deltaTime, camera, frustrum);
                break;
            case false:
                enemies.splice(enemies.indexOf(enemy), 1);
                break;
        }
    }

    //Update bullets
    for(let bullet of bullets){
        switch(bullet.alive){
            case true:
                bullet.update(deltaTime, camera, frustrum);
                break;
            case false:
                bullets.splice(bullets.indexOf(bullet), 1);
                break;
        }
    }

    //Update player
    if(player.alive){
        player.update(input, deltaTime, camera, frustrum);
    }
    else if(!blockReset){

        blockReset = true;
        
        clearInterval(asteroidInterval);
        clearInterval(enemyInterval);

        setTimeout(restart, 3000);
    }
    render();
}

function render(){
    renderer.render(scene, camera);
}

function restart()
{
    //Destroy all asteroids, empty array the array
    for(let a of asteroids){
        a.destroy();
    }
    asteroids.length = 0;

    //Destroy all bullets, empty array the array
    for(let b of bullets){
        b.destroy();
    }
    bullets.length = 0;

    //Destroy all enemies, empty array the array
    for(let e of enemies){
        e.destroy();
    }
    enemies.length = 0;

    // Reset interval ID's
    asteroidInterval = window.setInterval(spawnAsteroid, 5000);
    enemyInterval = window.setInterval(spawnEnemy, 15000);

    // Reset score
    let scoreDiv = document.querySelector('#score');
    scoreDiv.innerHTML = '0000';

    // Reset life counter
    let icons = document.querySelectorAll('.life');
    for(let element of icons){
        element.style.display = 'block';
    }

    // Re-initalize player
    player = new _Components_Ship_js__WEBPACK_IMPORTED_MODULE_2__["Ship"](scene, bullets);

    blockReset = false;
}

//Called to create Enemies
function spawnEnemy(){
    if(enemies.length < enemyLimit){
        let enemy = new _Components_Enemy_js__WEBPACK_IMPORTED_MODULE_1__["Enemy"](scene, player, bullets);
        enemies.push(enemy);

        clearInterval(enemyInterval);
        enemyInterval = window.setInterval(spawnEnemy, (15000 + Math.random()) * 2);
    }
}

//Called to create asteroids
function spawnAsteroid(size, position, rotation){
    let asteroid;
    let transform = makeNewTransform();
    
    if(size != null){ 
        asteroid = new _Components_Asteroid_js__WEBPACK_IMPORTED_MODULE_0__["Asteroid"](scene, player, size, position, rotation);
    }
    else{ 
        asteroid = new _Components_Asteroid_js__WEBPACK_IMPORTED_MODULE_0__["Asteroid"](scene, player, (1 + Math.floor( Math.random() * 3) ), transform.position, transform.rotation);
    }

    asteroids.push(asteroid);

    clearInterval(asteroidInterval);
    asteroidInterval = window.setInterval(spawnAsteroid, (4000 + Math.random() * 2));
}

function makeNewTransform(){
    let pos, rot;
    do{
        pos = (Math.random() >= 0.5) ? (new THREE.Vector3(Math.random() * -20, Math.random() * -20, 0)) : (new THREE.Vector3(Math.random() * 20, Math.random() * 20, 0));
        rot = (Math.random() >= 0.5) ? (Math.random() * 6) : -(Math.random() * 6);
    }while(pos.distanceTo(player.position) < 10)
    //do while to prevent spawning ontop of player

    return {
        position: pos,
        rotation: rot
    }
}

//Mouse click event for shooting;
window.addEventListener('mousedown', shoot, false);
function shoot(){
    if(player.alive){
        player.shoot();
    }
}

//Getting keyboard input for directional controls.
window.addEventListener('keydown', updateInput, false);
window.addEventListener('keyup', updateInput, false);
function updateInput(e){
    let type = e.type;
    switch(e.keyCode){
        // W
        case 87:
        case 38:
            if(type == 'keydown' && input[0] != 'forward')
                input[0] = 'forward';
            else if(type == 'keyup' && input[0] == 'forward')
                input[0] = '';
            break;
        // S
        case 83:
        case 40:
            if(type == 'keydown' && input[0] != 'backward')
                input[0] = 'backward';
            else if(type == 'keyup' && input[0] == 'backward')
                input[0] = '';
            break;
        // A
        case 65:
        case 37:
            if(type == 'keydown' && input[1] != 'left')
                input[1] = 'left';
            else if(type == 'keyup' && input[1] == 'left')
                input[1] = '';
            break;
        // D
        case 68:
        case 39:
            if(type == 'keydown' && input[1] != 'right')
                input[1] = 'right';
            else if(type == 'keyup' && input[1] == 'right')
                input[1] = '';
            break;
    }
}

//Window resizing
window.addEventListener('resize', onWindowResize);
function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Bc3Rlcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRW5lbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3BhY2UtaW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnMtaW1nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzk4MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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QW1COztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0RBQUk7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFLO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCO0FBQ0EsdUJBQXVCLGdFQUFRO0FBQy9CO0FBQ0EsUztBQUNBLHVCQUF1QixnRUFBUTtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7OztBQ3JUQSxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmNhbnZhc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxucHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNpbmZve1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIFxcclxcbiAgICBsZWZ0OiAxMHZ3O1xcclxcblxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4jc2NvcmV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxyXFxufVxcclxcbiNpbmZvID4gZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI2xpdmVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubGlmZXtcXHJcXG4gICAgd2lkdGg6IDJ2aDtcXHJcXG4gICAgaGVpZ2h0OiAydmg7XFxyXFxuICAgIG1hcmdpbjogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCJdKTtcbiIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5cclxuY2xhc3MgQXN0ZXJvaWQgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHBsYXllciwgc2l6ZSwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbil7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyUmVmID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdhc3Rlcm9pZCc7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc2l6ZSAqIDEwMDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi56ID0gcm90YXRpb247XHJcblxyXG4gICAgICAgIGxldCBnZW87XHJcbiAgICAgICAgc3dpdGNoKHNpemUpe1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9Bc3Rlcm9pZDEuZ2xiJyk7XHJcbiAgICAgICAgICAgICAgICBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMy4yNSwgMTgsIDE4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAyLjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVzaCgnLi9nbGJfZmlsZXMvQXN0ZXJvaWQyLmdsYicpO1xyXG4gICAgICAgICAgICAgICAgZ2VvID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEuNzUsIDE4LCAxOCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9Bc3Rlcm9pZDMuZ2xiJyk7XHJcbiAgICAgICAgICAgICAgICBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMSwgMTgsIDE4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA0LjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWtlQ29sbGlkZXIoZ2VvKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKXtcclxuICAgICAgICBpZighZnJ1c3RydW0uY29udGFpbnNQb2ludCh0aGlzLnBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTG9vcChjYW1lcmEpXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTY3JlZW5Mb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXt0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO31cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkodGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVZKDAuNSAqIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xyXG4gICAgICAgIGxldCBzY29yZSA9IHBhcnNlSW50KHNjb3JlRGl2LmlubmVySFRNTCwgMTApO1xyXG4gICAgICAgIHNjb3JlICs9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gc2NvcmUudG9TdHJpbmcoMTApO1xyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0e0FzdGVyb2lkfTsiLCJjb25zdCBUSFJFRSA9IHJlcXVpcmUoJ3RocmVlJyk7XHJcbmltcG9ydCB7R2FtZU9iamVjdH0gZnJvbSAnLi9HYW1lT2JqZWN0LmpzJztcclxuXHJcbmNsYXNzIEJ1bGxldCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgZGlyZWN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSAnYnVsbGV0JztcclxuICAgICAgICB0aGlzLnNwZWVkID0gMjU7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDIwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzcGhlcmUgZm9yIGJ1bGxldFxyXG4gICAgICAgIGxldCBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMC4xMiwgMTgsIDE4KTtcclxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOid5ZWxsb3cnLCB3aXJlZnJhbWU6ZmFsc2V9KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5jb2xsaWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pe1xyXG4gICAgICAgIGlmKCFmcnVzdHJ1bS5jb250YWluc1BvaW50KHRoaXMucG9zaXRpb24pKXtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5Mb29wKGNhbWVyYSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTY3JlZW5Mb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXt0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO31cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmR1cmF0aW9uIDw9IDApeyB0aGlzLmRlc3Ryb3koKTsgfVxyXG4gICAgICAgIGVsc2V7IHRoaXMuZHVyYXRpb24tLTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09IG51bGwpeyBcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZKHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXsgXHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlT25BeGlzKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oWydhc3Rlcm9pZCcsICdlbmVteSddKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtCdWxsZXR9OyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL0dhbWVPYmplY3QuanMnO1xyXG5pbXBvcnQge0J1bGxldH0gZnJvbSAnLi9CdWxsZXQuanMnO1xyXG5cclxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHBsYXllciwgYnVsbGV0cyl7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9VRk8uZ2xiJyk7XHJcblxyXG4gICAgICAgIGxldCBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMC43NSwgMTgsIDE4KTtcclxuICAgICAgICB0aGlzLm1ha2VDb2xsaWRlcihnZW8pO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBidWxsZXRzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmFtZSA9ICdlbmVteSc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZWYgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygtMSwwLDApO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMjtcclxuICAgICAgICB0aGlzLnNob290RGVsYXkgPSAxNzU7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDUwMDtcclxuXHJcbiAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTM1IDogMzU7XHJcbiAgICAgICAgbGV0IHkgPSAoTWF0aC5yYW5kb20oKS0wLjUpICogMjA7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoIHgsIHksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290KCl7XHJcbiAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyUmVmLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgZGlyLnN1Yih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICBkaXIubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgcG9zLmFkZChkaXIpO1xyXG5cclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLnNjZW5lLCBkaXIpO1xyXG4gICAgICAgIGJ1bGxldC5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgYnVsbGV0LnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSl7XHJcbiAgICAgICAgaWYoIWZydXN0cnVtLmNvbnRhaW5zUG9pbnQodGhpcy5wb3NpdGlvbikpe1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxvb3AoY2FtZXJhKVxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7dGhpcy5ibG9ja1NjcmVlbkxvb3AgPSBmYWxzZTt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG9vdERlbGF5LS07XHJcbiAgICAgICAgaWYodGhpcy5zaG9vdERlbGF5IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REZWxheSA9ICgxMCArIE1hdGgucmFuZG9tKCkpICogMjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLmRpc3RhbmNlVG8odGhpcy5wbGF5ZXJSZWYucG9zaXRpb24pIDwgMTUpe1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBkaXIuc3ViKHRoaXMucGxheWVyUmVmLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGlyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0KGRpci54LCBkaXIueSwgZGlyLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZU9uQXhpcyh0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nQ29tcGxldGUpe3RoaXMubWVzaC5yb3RhdGVaKDEuNSpkZWx0YVRpbWUpO31cclxuICAgIH1cclxuICAgIGRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgICAgICBsZXQgc2NvcmUgPSBwYXJzZUludChzY29yZURpdi5pbm5lckhUTUwsIDEwKTtcclxuICAgICAgICBzY29yZSArPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHNjb3JlRGl2LmlubmVySFRNTCA9IHNjb3JlLnRvU3RyaW5nKDEwKTtcclxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RW5lbXl9OyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtPYmplY3QzRH0gZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQge0dMVEZMb2FkZXJ9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCBleHRlbmRzIE9iamVjdDNEe1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NjcmVlbkxvb3AgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkTWVzaCh1cmwpe1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZXIubG9hZCh1cmwsIChnbHRmKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNoID0gZ2x0Zi5zY2VuZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubmFtZSA9PT0gJ2FzdGVyb2lkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNoLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoMCwwLDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZCh0aGlzLm1lc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNjZW5lLmFkZCh0aGlzKSwgdGhpcy5sb2FkaW5nQ29tcGxldGUgPSB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUNvbGxpZGVyKGdlbyl7XHJcbiAgICAgICAgbGV0IG1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7dmlzaWJsZTpmYWxzZX0pO1xyXG4gICAgICAgIGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXQpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBtZXNoO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuY29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2FsbGVkIHRvIGxvb3Agb2JqZWN0IGFyb3VuZCBzY3JlZW5cclxuICAgIHNjcmVlbkxvb3AoY2FtZXJhKXtcclxuICAgICAgICBpZighdGhpcy5ibG9ja1NjcmVlbkxvb3Ape1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuUG9zID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBzY3JlZW5Qb3MucHJvamVjdChjYW1lcmEpOy8vUHJvamVjdCB0aGUgdmVjdG9yIHRvIHNjcmVlbiBzcGFjZShpZS4gY2FtZXJhcyB2aWV3KTtcclxuICAgICAgICAgICAgc2NyZWVuUG9zLnggPSAoIHNjcmVlblBvcy54ICsgMSApICogd2luZG93LmlubmVyV2lkdGggLyAyIDsvL01hcCB0aGUgcHJvamVjdGVkIHZlY3RvclxyXG4gICAgICAgICAgICBzY3JlZW5Qb3MueSA9ICggc2NyZWVuUG9zLnkgKyAxICkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIDsvLyB1c2luZyBiYXNpYyBjb252ZXJzaW9uIGZvcm11bGEuXHJcbiAgICAgICAgICAgIHNjcmVlblBvcy56ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG5ld1Bvcy5tdWx0aXBseVNjYWxhcigtMSk7Ly9GbGlwIHBvc2l0aW9uIHRvIG9wcG9zaXRlIHNpZGUuXHJcblxyXG4gICAgICAgICAgICAvL0hvcml6b250YWxcclxuICAgICAgICAgICAgaWYoc2NyZWVuUG9zLnkgPiAwICYmIHNjcmVlblBvcy55IDwgd2luZG93LmlubmVySGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0WChuZXdQb3MueCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy92ZXJ0aWNhbFxyXG4gICAgICAgICAgICBpZihzY3JlZW5Qb3MueCA+IDAgJiYgc2NyZWVuUG9zLnggPCB3aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldFkobmV3UG9zLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKG5hbWVzKXtcclxuICAgICAgICBsZXQgaGl0cyA9IFtdO1xyXG4gICAgICAgIGlmKHRoaXMuYWxpdmUpe1xyXG4gICAgICAgICAgICAvL0dldCBhbGwgb2JqZWN0cyBpbiB0aGUgc2NlbmUgd2l0aCB0aGUgZ2l2ZW4gbmFtZXNcclxuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLnNjZW5lLmNoaWxkcmVuKXtcclxuICAgICAgICAgICAgICAgIGlmKG5hbWVzLmluY2x1ZGVzKGNoaWxkLm5hbWUpKXtcclxuICAgICAgICAgICAgICAgICAgICBoaXRzLnB1c2goY2hpbGQuY29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdmVydGljZXM7XHJcbiAgICAgICAgICAgIGxldCBvcmlnaW4gPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGEgdGVtcG9yYXJ5IGdlb21ldHJ5IGZyb20gdGhlIGJ1ZmZlciB0byBtYWtlIHZlcnRleCBsaXN0XHJcbiAgICAgICAgICAgIGxldCB0ZW1wR2VvID0gbmV3IFRIUkVFLkdlb21ldHJ5KCkuZnJvbUJ1ZmZlckdlb21ldHJ5KHRoaXMuY29sbGlkZXIuZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHRlbXBHZW8udmVydGljZXM7XHJcbiAgICAgICAgICAgIHRlbXBHZW8uZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxWZXJ0ZXggPSB2ZXJ0aWNlc1tpXS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdsb2JhbFZlcnRleCA9IGxvY2FsVmVydGV4LmFwcGx5TWF0cml4NCggdGhpcy5tYXRyaXggKTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSBnbG9iYWxWZXJ0ZXguc3ViKCB0aGlzLnBvc2l0aW9uICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIG9yaWdpbiwgZGlyZWN0aW9uVmVjdG9yLmNsb25lKCkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoIGhpdHMgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgZGlyZWN0aW9uVmVjdG9yLmxlbmd0aCgpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uUmVzdWx0c1swXS5vYmplY3QucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCl7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5tZXNoKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZU9iamVjdH07IiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge0dhbWVPYmplY3R9IGZyb20gJy4vR2FtZU9iamVjdC5qcyc7XHJcbmltcG9ydCB7QnVsbGV0fSBmcm9tICcuL0J1bGxldC5qcyc7XHJcblxyXG5jbGFzcyBTaGlwIGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCBidWxsZXRzKXtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkTWVzaCgnLi9nbGJfZmlsZXMvc3BhY2VTaGlwX0xvd1BvbHkuZ2xiJyk7XHJcblxyXG4gICAgICAgIGxldCBnZW8gPSBuZXcgVEhSRUUuQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSgwLjI1LCAxLjI1LCAxLjg1LCAxOCwgMTgpO1xyXG4gICAgICAgIHRoaXMubWFrZUNvbGxpZGVyKGdlbyk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5wb3NpdGlvbi5zZXRZKDAuMTUpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBidWxsZXRzO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSAnc2hpcCc7XHJcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgICAgIHRoaXMudGhydXN0Rm9yY2UgPSAwLjI1O1xyXG4gICAgICAgIHRoaXMucm90YXRpb25TcGVlZCA9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGhydXN0KCl7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueCArPSB0aGlzLnRocnVzdEZvcmNlICogTWF0aC5jb3MoLXRoaXMucm90YXRpb24ueik7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueSArPSB0aGlzLnRocnVzdEZvcmNlICogTWF0aC5zaW4oLXRoaXMucm90YXRpb24ueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3BpbihkaXIsIGRlbHRhVGltZSl7XHJcbiAgICAgICAgbGV0IHJhdGUgPSB0aGlzLnJvdGF0aW9uU3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgc3dpdGNoKGRpcil7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVaKHJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlWigtcmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3QoKXtcclxuICAgICAgICBsZXQgbXV6emxlID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwxLjUsMCk7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRvV29ybGQobXV6emxlKTtcclxuXHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IG5ldyBCdWxsZXQodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgYnVsbGV0LnBvc2l0aW9uLnNldChtdXp6bGUueCwgbXV6emxlLnksIG11enpsZS56KTtcclxuICAgICAgICBidWxsZXQucm90YXRpb24ueiA9IHRoaXMucm90YXRpb24uejtcclxuICAgICAgICBidWxsZXQudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZShpbnB1dCwgZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKXtcclxuICAgICAgICBpZighZnJ1c3RydW0uY29udGFpbnNQb2ludCh0aGlzLnBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTG9vcChjYW1lcmEpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7dGhpcy5ibG9ja1NjcmVlbkxvb3AgPSBmYWxzZTt9XHJcbiAgICAgICAgLy9BcHBseSByb3RhdGlvblxyXG4gICAgICAgIHRoaXMuc3BpbihpbnB1dFsxXSwgZGVsdGFUaW1lKTtcclxuICAgICAgICAvL0FkZCB0aHJ1c3QgaWYgYnV0dG9uIHByZXNzZWRcclxuICAgICAgICBpZihpbnB1dFswXSA9PT0gJ2ZvcndhcmQnKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRUaHJ1c3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXBkYXRlIHBvc2l0aW9uIHVzaW5nIGV4aXN0aW5nIHZlbG9jaXR5XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueSAqIGRlbHRhVGltZTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS54ICogZGVsdGFUaW1lO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB2ZWxvY2l0eSBieSBhZGRpbmcgYWNjZWxlcmF0aW9uXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGRWZWN0b3JzKHRoaXMudmVsb2NpdHksIHRoaXMuYWNjZWxlcmF0aW9uKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5Lm11bHRpcGx5U2NhbGFyKDAuOTk3KTsvL0FwcGx5IGZyaWN0aW9uXHJcbiAgICAgICAgLy9SZXNldCBhY2NlbGVyYXRpb25cclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXQoMCwwLDApO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKFsnYXN0ZXJvaWQnLCAnYnVsbGV0J10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlmZScpO1xyXG4gICAgICAgIGljb25zW3RoaXMubGl2ZXMtMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmxpdmVzLS07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5saXZlcyA+PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoMCwwLDApO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnNldCgwLDApO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXQoMCwwKTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi56ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtTaGlwfTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYjQwNzQ3NjA4MzNiYTdkZDdmZTBiNjdkOWQzZDc2MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMDdmYjI2ZTBjODZiNjI0ZTQzYWJiNGEyODIzNzQ5Yy5wbmdcIjsiLCJjb25zdCBUSFJFRSA9IHJlcXVpcmUoJ3RocmVlJyk7XHJcblxyXG5pbXBvcnQge0FzdGVyb2lkfSBmcm9tICcuL0NvbXBvbmVudHMvQXN0ZXJvaWQuanMnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL0NvbXBvbmVudHMvRW5lbXkuanMnO1xyXG5pbXBvcnQge1NoaXB9IGZyb20gJy4vQ29tcG9uZW50cy9TaGlwLmpzJztcclxuXHJcbmltcG9ydCBzcGFjZUltZyBmcm9tICcuL2ltYWdlcy9zcGFjZS1pbWFnZS5wbmcnO1xyXG5pbXBvcnQgc3RhcnNJbWcgZnJvbSAnLi9pbWFnZXMvc3RhcnMtaW1nLnBuZyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XHJcblxyXG4vLyBNYWtlIHNjZW5lIGFuZCBhZGQgbGlnaHRzXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbnNjZW5lLmFkZChuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4MDA4MDc3LCAweDRiMWY1ZSwgMS4yNSkpO1xyXG5zY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGRlZGVkZSwgMSkpO1xyXG5sZXQgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGRlZmNmNiwgMC41KTtcclxubGlnaHQucG9zaXRpb24uc2V0KDIwLC01LDEwKTtcclxuc2NlbmUuYWRkKGxpZ2h0KTtcclxuXHJcbi8vIE1ha2UgY2FtZXJhIGFuZCBmcnVzdHJ1bVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDApO1xyXG5sZXQgZnJ1c3RydW0gPSBuZXcgVEhSRUUuRnJ1c3R1bSgpO1xyXG5jYW1lcmEucG9zaXRpb24uc2V0KDAsMCw1MCk7XHJcblxyXG4vLyBNYWtlIHJlbmRlcmVyIGFuZCBzZXQgYW5pbWF0aW9uIGxvb3BcclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YW50aWFsaWFzOnRydWV9KTtcclxucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbnJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoICgpPT57IHVwZGF0ZSgpOyB9ICk7XHJcbnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDApO1xyXG5cclxuLy9BZGQgcmVuZGVyIGNhbnZhcyBlbGVtZW50IHRvIGRvY3VtZW50IGJvZHlcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbi8vQmFja2dyb3VuZCBzZXR1cFxyXG5sZXQgc3RhcnNUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHN0YXJzSW1nKTtcclxuc3RhcnNUZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbnN0YXJzVGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5zdGFyc1RleHR1cmUucmVwZWF0LnNldCggNCwgNCApO1xyXG5cclxubGV0IHNwYWNlVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChzcGFjZUltZyk7XHJcbnNwYWNlVGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5zcGFjZVRleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuc3BhY2VUZXh0dXJlLmNlbnRlci5zZXQoMC41LCAwLjUpO1xyXG5cclxubGV0IHN0YXJNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7bWFwOiBzdGFyc1RleHR1cmUsIGFscGhhTWFwOiBzdGFyc1RleHR1cmV9KTtcclxuc3Rhck1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuc3Rhck1hdGVyaWFsLmRlcHRoVGVzdCA9IHRydWU7XHJcbnN0YXJNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcblxyXG5sZXQgc3BhY2VNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7bWFwOiBzcGFjZVRleHR1cmUsIGFscGhhTWFwOiBzcGFjZVRleHR1cmV9KTtcclxuc3BhY2VNYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbnNwYWNlTWF0ZXJpYWwub3BhY2l0eSA9IDAuMTU7XHJcbnNwYWNlTWF0ZXJpYWwuZGVwdGhUZXN0ID0gdHJ1ZTtcclxuc3BhY2VNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcblxyXG5sZXQgc3RhclBsYW5lID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMTAwLDEwMCwgMjUsIDI1KSwgc3Rhck1hdGVyaWFsKTtcclxuc3RhclBsYW5lLnBvc2l0aW9uLnNldCgwLCAtMTAsIDApO1xyXG5zY2VuZS5hZGQoc3RhclBsYW5lKTtcclxuXHJcbmxldCBzcGFjZVBsYW5lID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMTAwLDEwMCwgMjUsMjUpLCBzcGFjZU1hdGVyaWFsKTtcclxuc3BhY2VQbGFuZS5wb3NpdGlvbi5zZXQoMCwgLTE1LCAwKTtcclxuc2NlbmUuYWRkKHNwYWNlUGxhbmUpO1xyXG5cclxuLy8gYXJyYXlzXHJcbmNvbnN0IGlucHV0ID0gWycnLCcnXTtcclxuY29uc3QgYnVsbGV0cyA9IFtdO1xyXG5jb25zdCBlbmVtaWVzID0gW107XHJcbmNvbnN0IGFzdGVyb2lkcyA9IFtdO1xyXG5cclxuLy8gSW50ZXJ2YWwgSUQncyBmb3Igc3Bhd25pbmcgYXN0ZXJvaWRzL2VuZW1pZXNcclxubGV0IGFzdGVyb2lkSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25Bc3Rlcm9pZCwgNTAwMCk7XHJcbmxldCBlbmVteUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduRW5lbXksIDE1MDAwKTtcclxubGV0IGVuZW15TGltaXQgPSAyO1xyXG5cclxuLy8gSW5zdGFudGlhdGUgcGxheWVyXHJcbmxldCBwbGF5ZXIgPSBuZXcgU2hpcChzY2VuZSwgYnVsbGV0cyk7XHJcblxyXG4vLyBSZXNldCBmbGFnXHJcbmxldCBibG9ja1Jlc2V0ID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoKXtcclxuICAgIGZydXN0cnVtLnNldEZyb21NYXRyaXgobmV3IFRIUkVFLk1hdHJpeDQoKS5tdWx0aXBseU1hdHJpY2VzKGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlKSk7XHJcbiAgICBcclxuICAgIGxldCBkZWx0YVRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgc3BhY2VUZXh0dXJlLnJvdGF0aW9uICs9IDAuMDEgKiBkZWx0YVRpbWU7XHJcblxyXG4gICAgLy9VcGRhdGUgYXN0ZXJvaWRzXHJcbiAgICBmb3IobGV0IGFzdGVyb2lkIG9mIGFzdGVyb2lkcyl7XHJcbiAgICAgICAgc3dpdGNoKGFzdGVyb2lkLmFsaXZlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIGlmKGFzdGVyb2lkLnNpemUgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXN0ZXJvaWQuc2l6ZTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdCA9IGFzdGVyb2lkLnJvdGF0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBhc3Rlcm9pZC5wb3NpdGlvbi5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlT2Zmc2V0ID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAoMC41ICsgKE1hdGgucmFuZG9tKCkgKiAxLjE1KSkgOiAtKCAwLjUgKyAoTWF0aC5yYW5kb20oKSAqIDEuMTUpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnJvdGF0ZVooYW5nbGVPZmZzZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnRyYW5zbGF0ZVgoYXN0ZXJvaWQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQudHJhbnNsYXRlWCgtYXN0ZXJvaWQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQudHJhbnNsYXRlWShhc3Rlcm9pZC5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGF3bkFzdGVyb2lkKGFzdGVyb2lkLnNpemUgLSAxLCBhc3Rlcm9pZC5wb3NpdGlvbiwgYXN0ZXJvaWQucm90YXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnJvdGF0aW9uLnNldChyb3QueCwgcm90LnksIHJvdC56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQucG9zaXRpb24uc2V0KHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZHMuc3BsaWNlKGFzdGVyb2lkcy5pbmRleE9mKGFzdGVyb2lkKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9VcGFkdGUgRW5lbWllc1xyXG4gICAgZm9yKGxldCBlbmVteSBvZiBlbmVtaWVzKXtcclxuICAgICAgICBzd2l0Y2goZW5lbXkuYWxpdmUpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBlbmVteS51cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgZW5lbWllcy5zcGxpY2UoZW5lbWllcy5pbmRleE9mKGVuZW15KSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9VcGRhdGUgYnVsbGV0c1xyXG4gICAgZm9yKGxldCBidWxsZXQgb2YgYnVsbGV0cyl7XHJcbiAgICAgICAgc3dpdGNoKGJ1bGxldC5hbGl2ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGJ1bGxldC51cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgYnVsbGV0cy5zcGxpY2UoYnVsbGV0cy5pbmRleE9mKGJ1bGxldCksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vVXBkYXRlIHBsYXllclxyXG4gICAgaWYocGxheWVyLmFsaXZlKXtcclxuICAgICAgICBwbGF5ZXIudXBkYXRlKGlucHV0LCBkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZighYmxvY2tSZXNldCl7XHJcblxyXG4gICAgICAgIGJsb2NrUmVzZXQgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoYXN0ZXJvaWRJbnRlcnZhbCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteUludGVydmFsKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChyZXN0YXJ0LCAzMDAwKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKXtcclxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdGFydCgpXHJcbntcclxuICAgIC8vRGVzdHJveSBhbGwgYXN0ZXJvaWRzLCBlbXB0eSBhcnJheSB0aGUgYXJyYXlcclxuICAgIGZvcihsZXQgYSBvZiBhc3Rlcm9pZHMpe1xyXG4gICAgICAgIGEuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgYXN0ZXJvaWRzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgLy9EZXN0cm95IGFsbCBidWxsZXRzLCBlbXB0eSBhcnJheSB0aGUgYXJyYXlcclxuICAgIGZvcihsZXQgYiBvZiBidWxsZXRzKXtcclxuICAgICAgICBiLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGJ1bGxldHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAvL0Rlc3Ryb3kgYWxsIGVuZW1pZXMsIGVtcHR5IGFycmF5IHRoZSBhcnJheVxyXG4gICAgZm9yKGxldCBlIG9mIGVuZW1pZXMpe1xyXG4gICAgICAgIGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgZW5lbWllcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIC8vIFJlc2V0IGludGVydmFsIElEJ3NcclxuICAgIGFzdGVyb2lkSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25Bc3Rlcm9pZCwgNTAwMCk7XHJcbiAgICBlbmVteUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduRW5lbXksIDE1MDAwKTtcclxuXHJcbiAgICAvLyBSZXNldCBzY29yZVxyXG4gICAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XHJcbiAgICBzY29yZURpdi5pbm5lckhUTUwgPSAnMDAwMCc7XHJcblxyXG4gICAgLy8gUmVzZXQgbGlmZSBjb3VudGVyXHJcbiAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlmZScpO1xyXG4gICAgZm9yKGxldCBlbGVtZW50IG9mIGljb25zKXtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlLWluaXRhbGl6ZSBwbGF5ZXJcclxuICAgIHBsYXllciA9IG5ldyBTaGlwKHNjZW5lLCBidWxsZXRzKTtcclxuXHJcbiAgICBibG9ja1Jlc2V0ID0gZmFsc2U7XHJcbn1cclxuXHJcbi8vQ2FsbGVkIHRvIGNyZWF0ZSBFbmVtaWVzXHJcbmZ1bmN0aW9uIHNwYXduRW5lbXkoKXtcclxuICAgIGlmKGVuZW1pZXMubGVuZ3RoIDwgZW5lbXlMaW1pdCl7XHJcbiAgICAgICAgbGV0IGVuZW15ID0gbmV3IEVuZW15KHNjZW5lLCBwbGF5ZXIsIGJ1bGxldHMpO1xyXG4gICAgICAgIGVuZW1pZXMucHVzaChlbmVteSk7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZW5lbXlJbnRlcnZhbCk7XHJcbiAgICAgICAgZW5lbXlJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChzcGF3bkVuZW15LCAoMTUwMDAgKyBNYXRoLnJhbmRvbSgpKSAqIDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0NhbGxlZCB0byBjcmVhdGUgYXN0ZXJvaWRzXHJcbmZ1bmN0aW9uIHNwYXduQXN0ZXJvaWQoc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9uKXtcclxuICAgIGxldCBhc3Rlcm9pZDtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSBtYWtlTmV3VHJhbnNmb3JtKCk7XHJcbiAgICBcclxuICAgIGlmKHNpemUgIT0gbnVsbCl7IFxyXG4gICAgICAgIGFzdGVyb2lkID0gbmV3IEFzdGVyb2lkKHNjZW5lLCBwbGF5ZXIsIHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNleyBcclxuICAgICAgICBhc3Rlcm9pZCA9IG5ldyBBc3Rlcm9pZChzY2VuZSwgcGxheWVyLCAoMSArIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAzKSApLCB0cmFuc2Zvcm0ucG9zaXRpb24sIHRyYW5zZm9ybS5yb3RhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN0ZXJvaWRzLnB1c2goYXN0ZXJvaWQpO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoYXN0ZXJvaWRJbnRlcnZhbCk7XHJcbiAgICBhc3Rlcm9pZEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduQXN0ZXJvaWQsICg0MDAwICsgTWF0aC5yYW5kb20oKSAqIDIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU5ld1RyYW5zZm9ybSgpe1xyXG4gICAgbGV0IHBvcywgcm90O1xyXG4gICAgZG97XHJcbiAgICAgICAgcG9zID0gKE1hdGgucmFuZG9tKCkgPj0gMC41KSA/IChuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnJhbmRvbSgpICogLTIwLCBNYXRoLnJhbmRvbSgpICogLTIwLCAwKSkgOiAobmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5yYW5kb20oKSAqIDIwLCBNYXRoLnJhbmRvbSgpICogMjAsIDApKTtcclxuICAgICAgICByb3QgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUpID8gKE1hdGgucmFuZG9tKCkgKiA2KSA6IC0oTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgfXdoaWxlKHBvcy5kaXN0YW5jZVRvKHBsYXllci5wb3NpdGlvbikgPCAxMClcclxuICAgIC8vZG8gd2hpbGUgdG8gcHJldmVudCBzcGF3bmluZyBvbnRvcCBvZiBwbGF5ZXJcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBwb3MsXHJcbiAgICAgICAgcm90YXRpb246IHJvdFxyXG4gICAgfVxyXG59XHJcblxyXG4vL01vdXNlIGNsaWNrIGV2ZW50IGZvciBzaG9vdGluZztcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob290LCBmYWxzZSk7XHJcbmZ1bmN0aW9uIHNob290KCl7XHJcbiAgICBpZihwbGF5ZXIuYWxpdmUpe1xyXG4gICAgICAgIHBsYXllci5zaG9vdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0dldHRpbmcga2V5Ym9hcmQgaW5wdXQgZm9yIGRpcmVjdGlvbmFsIGNvbnRyb2xzLlxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHVwZGF0ZUlucHV0LCBmYWxzZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwZGF0ZUlucHV0LCBmYWxzZSk7XHJcbmZ1bmN0aW9uIHVwZGF0ZUlucHV0KGUpe1xyXG4gICAgbGV0IHR5cGUgPSBlLnR5cGU7XHJcbiAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAvLyBXXHJcbiAgICAgICAgY2FzZSA4NzpcclxuICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdrZXlkb3duJyAmJiBpbnB1dFswXSAhPSAnZm9yd2FyZCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFswXSA9ICdmb3J3YXJkJztcclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlID09ICdrZXl1cCcgJiYgaW5wdXRbMF0gPT0gJ2ZvcndhcmQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMF0gPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gU1xyXG4gICAgICAgIGNhc2UgODM6XHJcbiAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAna2V5ZG93bicgJiYgaW5wdXRbMF0gIT0gJ2JhY2t3YXJkJylcclxuICAgICAgICAgICAgICAgIGlucHV0WzBdID0gJ2JhY2t3YXJkJztcclxuICAgICAgICAgICAgZWxzZSBpZih0eXBlID09ICdrZXl1cCcgJiYgaW5wdXRbMF0gPT0gJ2JhY2t3YXJkJylcclxuICAgICAgICAgICAgICAgIGlucHV0WzBdID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIEFcclxuICAgICAgICBjYXNlIDY1OlxyXG4gICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2tleWRvd24nICYmIGlucHV0WzFdICE9ICdsZWZ0JylcclxuICAgICAgICAgICAgICAgIGlucHV0WzFdID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFsxXSA9PSAnbGVmdCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFsxXSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBEXHJcbiAgICAgICAgY2FzZSA2ODpcclxuICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdrZXlkb3duJyAmJiBpbnB1dFsxXSAhPSAncmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMV0gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFsxXSA9PSAncmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMV0gPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vV2luZG93IHJlc2l6aW5nXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSk7XHJcbmZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCl7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG59IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9