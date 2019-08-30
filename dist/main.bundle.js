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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Bc3Rlcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRW5lbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3BhY2UtaW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc3RhcnMtaW1nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzk4MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsd0RBQUk7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFLO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCO0FBQ0EsdUJBQXVCLGdFQUFRO0FBQy9CO0FBQ0EsUztBQUNBLHVCQUF1QixnRUFBUTtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7OztBQ3JUQSxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmNhbnZhc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxucHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNpbmZve1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIFxcclxcbiAgICBsZWZ0OiAxMHZ3O1xcclxcblxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAydnc7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4jc2NvcmV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxyXFxufVxcclxcbiNpbmZvID4gZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI2xpdmVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubGlmZXtcXHJcXG4gICAgd2lkdGg6IDJ2aDtcXHJcXG4gICAgaGVpZ2h0OiAydmg7XFxyXFxuICAgIG1hcmdpbjogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCJdKTtcbiIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5cclxuY2xhc3MgQXN0ZXJvaWQgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHBsYXllciwgc2l6ZSwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbil7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyUmVmID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdhc3Rlcm9pZCc7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gc2l6ZSAqIDEwMDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgMCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbi56ID0gcm90YXRpb247XHJcblxyXG4gICAgICAgIGxldCBnZW87XHJcbiAgICAgICAgc3dpdGNoKHNpemUpe1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9Bc3Rlcm9pZDEuZ2xiJyk7XHJcbiAgICAgICAgICAgICAgICBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMy4yNSwgMTgsIDE4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAyLjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVzaCgnLi9nbGJfZmlsZXMvQXN0ZXJvaWQyLmdsYicpO1xyXG4gICAgICAgICAgICAgICAgZ2VvID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEuNzUsIDE4LCAxOCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9Bc3Rlcm9pZDMuZ2xiJyk7XHJcbiAgICAgICAgICAgICAgICBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMSwgMTgsIDE4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA0LjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYWtlQ29sbGlkZXIoZ2VvKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKXtcclxuICAgICAgICBpZighZnJ1c3RydW0uY29udGFpbnNQb2ludCh0aGlzLnBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTG9vcChjYW1lcmEpXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTY3JlZW5Mb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXt0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO31cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVkodGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGVZKDAuNSAqIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xyXG4gICAgICAgIGxldCBzY29yZSA9IHBhcnNlSW50KHNjb3JlRGl2LmlubmVySFRNTCwgMTApO1xyXG4gICAgICAgIHNjb3JlICs9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gc2NvcmUudG9TdHJpbmcoMTApO1xyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0e0FzdGVyb2lkfTsiLCJjb25zdCBUSFJFRSA9IHJlcXVpcmUoJ3RocmVlJyk7XHJcbmltcG9ydCB7R2FtZU9iamVjdH0gZnJvbSAnLi9HYW1lT2JqZWN0LmpzJztcclxuXHJcbmNsYXNzIEJ1bGxldCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgZGlyZWN0aW9uID0gbnVsbCl7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSAnYnVsbGV0JztcclxuICAgICAgICB0aGlzLnNwZWVkID0gMjU7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDIwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzcGhlcmUgZm9yIGJ1bGxldFxyXG4gICAgICAgIGxldCBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMC4xMiwgMTgsIDE4KTtcclxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOid5ZWxsb3cnLCB3aXJlZnJhbWU6ZmFsc2V9KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5jb2xsaWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pe1xyXG4gICAgICAgIGlmKCFmcnVzdHJ1bS5jb250YWluc1BvaW50KHRoaXMucG9zaXRpb24pKXtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5Mb29wKGNhbWVyYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZHVyYXRpb24gPD0gMCl7IHRoaXMuZGVzdHJveSgpOyB9XHJcbiAgICAgICAgZWxzZXsgdGhpcy5kdXJhdGlvbi0tOyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT0gbnVsbCl7IFxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkodGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNleyBcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVPbkF4aXModGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbihbJ2FzdGVyb2lkJywgJ2VuZW15J10pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0J1bGxldH07IiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge0dhbWVPYmplY3R9IGZyb20gJy4vR2FtZU9iamVjdC5qcyc7XHJcbmltcG9ydCB7QnVsbGV0fSBmcm9tICcuL0J1bGxldC5qcyc7XHJcblxyXG5jbGFzcyBFbmVteSBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgcGxheWVyLCBidWxsZXRzKXtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE1lc2goJy4vZ2xiX2ZpbGVzL1VGTy5nbGInKTtcclxuXHJcbiAgICAgICAgbGV0IGdlbyA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgwLjc1LCAxOCwgMTgpO1xyXG4gICAgICAgIHRoaXMubWFrZUNvbGxpZGVyKGdlbyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IGJ1bGxldHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2VuZW15JztcclxuICAgICAgICB0aGlzLnBsYXllclJlZiA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKC0xLDAsMCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEyO1xyXG4gICAgICAgIHRoaXMuc2hvb3REZWxheSA9IDE3NTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gNTAwO1xyXG5cclxuICAgICAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMzUgOiAzNTtcclxuICAgICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpLTAuNSkgKiAyMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCggeCwgeSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3QoKXtcclxuICAgICAgICBsZXQgZGlyID0gdGhpcy5wbGF5ZXJSZWYucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICBkaXIuc3ViKHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIGRpci5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICBwb3MuYWRkKGRpcik7XHJcblxyXG4gICAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuc2NlbmUsIGRpcik7XHJcbiAgICAgICAgYnVsbGV0LnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICBidWxsZXQudXBkYXRlTWF0cml4V29ybGQodHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5idWxsZXRzLnB1c2goYnVsbGV0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKXtcclxuICAgICAgICBpZighZnJ1c3RydW0uY29udGFpbnNQb2ludCh0aGlzLnBvc2l0aW9uKSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuTG9vcChjYW1lcmEpXHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTY3JlZW5Mb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXt0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO31cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob290RGVsYXktLTtcclxuICAgICAgICBpZih0aGlzLnNob290RGVsYXkgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdERlbGF5ID0gKDEwICsgTWF0aC5yYW5kb20oKSkgKiAyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24uZGlzdGFuY2VUbyh0aGlzLnBsYXllclJlZi5wb3NpdGlvbikgPCAxNSl7XHJcbiAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIGRpci5zdWIodGhpcy5wbGF5ZXJSZWYucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBkaXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbi5zZXQoZGlyLngsIGRpci55LCBkaXIueik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlT25BeGlzKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICBpZih0aGlzLmxvYWRpbmdDb21wbGV0ZSl7dGhpcy5tZXNoLnJvdGF0ZVooMS41KmRlbHRhVGltZSk7fVxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xyXG4gICAgICAgIGxldCBzY29yZSA9IHBhcnNlSW50KHNjb3JlRGl2LmlubmVySFRNTCwgMTApO1xyXG4gICAgICAgIHNjb3JlICs9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gc2NvcmUudG9TdHJpbmcoMTApO1xyXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtFbmVteX07IiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge09iamVjdDNEfSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7R0xURkxvYWRlcn0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcic7XHJcblxyXG5jbGFzcyBHYW1lT2JqZWN0IGV4dGVuZHMgT2JqZWN0M0R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRNZXNoKHVybCl7XHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlci5sb2FkKHVybCwgKGdsdGYpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc2ggPSBnbHRmLnNjZW5lLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5uYW1lID09PSAnYXN0ZXJvaWQnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24odGhpcy5tZXNoLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc2gudXBkYXRlTWF0cml4V29ybGQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMubWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCgwLDAsMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMubWVzaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2NlbmUuYWRkKHRoaXMpLCB0aGlzLmxvYWRpbmdDb21wbGV0ZSA9IHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ29sbGlkZXIoZ2VvKXtcclxuICAgICAgICBsZXQgbWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHt2aXNpYmxlOmZhbHNlfSk7XHJcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG1lc2g7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5jb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9DYWxsZWQgdG8gbG9vcCBvYmplY3QgYXJvdW5kIHNjcmVlblxyXG4gICAgc2NyZWVuTG9vcChjYW1lcmEpe1xyXG4gICAgICAgIGlmKCF0aGlzLmJsb2NrU2NyZWVuTG9vcCl7XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5Qb3MgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHNjcmVlblBvcy5wcm9qZWN0KGNhbWVyYSk7Ly9Qcm9qZWN0IHRoZSB2ZWN0b3IgdG8gc2NyZWVuIHNwYWNlKGllLiBjYW1lcmFzIHZpZXcpO1xyXG4gICAgICAgICAgICBzY3JlZW5Qb3MueCA9ICggc2NyZWVuUG9zLnggKyAxICkgKiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgOy8vTWFwIHRoZSBwcm9qZWN0ZWQgdmVjdG9yXHJcbiAgICAgICAgICAgIHNjcmVlblBvcy55ID0gKCBzY3JlZW5Qb3MueSArIDEgKSAqIHdpbmRvdy5pbm5lckhlaWdodCAvIDIgOy8vIHVzaW5nIGJhc2ljIGNvbnZlcnNpb24gZm9ybXVsYS5cclxuICAgICAgICAgICAgc2NyZWVuUG9zLnogPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1BvcyA9IHRoaXMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgbmV3UG9zLm11bHRpcGx5U2NhbGFyKC0xKTsvL0ZsaXAgcG9zaXRpb24gdG8gb3Bwb3NpdGUgc2lkZS5cclxuXHJcbiAgICAgICAgICAgIC8vSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBpZihzY3JlZW5Qb3MueSA+IDAgJiYgc2NyZWVuUG9zLnkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXRYKG5ld1Bvcy54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3ZlcnRpY2FsXHJcbiAgICAgICAgICAgIGlmKHNjcmVlblBvcy54ID4gMCAmJiBzY3JlZW5Qb3MueCA8IHdpbmRvdy5pbm5lcldpZHRoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0WShuZXdQb3MueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24obmFtZXMpe1xyXG4gICAgICAgIGxldCBoaXRzID0gW107XHJcbiAgICAgICAgaWYodGhpcy5hbGl2ZSl7XHJcbiAgICAgICAgICAgIC8vR2V0IGFsbCBvYmplY3RzIGluIHRoZSBzY2VuZSB3aXRoIHRoZSBnaXZlbiBuYW1lc1xyXG4gICAgICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMuc2NlbmUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAgICAgaWYobmFtZXMuaW5jbHVkZXMoY2hpbGQubmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGhpdHMucHVzaChjaGlsZC5jb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNlcztcclxuICAgICAgICAgICAgbGV0IG9yaWdpbiA9IHRoaXMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgLy9DcmVhdGUgYSB0ZW1wb3JhcnkgZ2VvbWV0cnkgZnJvbSB0aGUgYnVmZmVyIHRvIG1ha2UgdmVydGV4IGxpc3RcclxuICAgICAgICAgICAgbGV0IHRlbXBHZW8gPSBuZXcgVEhSRUUuR2VvbWV0cnkoKS5mcm9tQnVmZmVyR2VvbWV0cnkodGhpcy5jb2xsaWRlci5nZW9tZXRyeSk7XHJcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdGVtcEdlby52ZXJ0aWNlcztcclxuICAgICAgICAgICAgdGVtcEdlby5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbFZlcnRleCA9IHZlcnRpY2VzW2ldLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2xvYmFsVmVydGV4ID0gbG9jYWxWZXJ0ZXguYXBwbHlNYXRyaXg0KCB0aGlzLm1hdHJpeCApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvblZlY3RvciA9IGdsb2JhbFZlcnRleC5zdWIoIHRoaXMucG9zaXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlciggb3JpZ2luLCBkaXJlY3Rpb25WZWN0b3IuY2xvbmUoKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyggaGl0cyApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCBkaXJlY3Rpb25WZWN0b3IubGVuZ3RoKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25SZXN1bHRzWzBdLm9iamVjdC5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKXtcclxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLm1lc2gpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lT2JqZWN0fTsiLCJjb25zdCBUSFJFRSA9IHJlcXVpcmUoJ3RocmVlJyk7XHJcbmltcG9ydCB7R2FtZU9iamVjdH0gZnJvbSAnLi9HYW1lT2JqZWN0LmpzJztcclxuaW1wb3J0IHtCdWxsZXR9IGZyb20gJy4vQnVsbGV0LmpzJztcclxuXHJcbmNsYXNzIFNoaXAgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIGJ1bGxldHMpe1xyXG4gICAgICAgIHN1cGVyKHNjZW5lKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9zcGFjZVNoaXBfTG93UG9seS5nbGInKTtcclxuXHJcbiAgICAgICAgbGV0IGdlbyA9IG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDAuMjUsIDEuMjUsIDEuODUsIDE4LCAxOCk7XHJcbiAgICAgICAgdGhpcy5tYWtlQ29sbGlkZXIoZ2VvKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLnBvc2l0aW9uLnNldFkoMC4xNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IGJ1bGxldHM7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9ICdzaGlwJztcclxuICAgICAgICB0aGlzLmxpdmVzID0gMztcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICAgICAgdGhpcy50aHJ1c3RGb3JjZSA9IDAuMjU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkID0gMztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUaHJ1c3QoKXtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi54ICs9IHRoaXMudGhydXN0Rm9yY2UgKiBNYXRoLmNvcygtdGhpcy5yb3RhdGlvbi56KTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi55ICs9IHRoaXMudGhydXN0Rm9yY2UgKiBNYXRoLnNpbigtdGhpcy5yb3RhdGlvbi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzcGluKGRpciwgZGVsdGFUaW1lKXtcclxuICAgICAgICBsZXQgcmF0ZSA9IHRoaXMucm90YXRpb25TcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICBzd2l0Y2goZGlyKXtcclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVoocmF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVaKC1yYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG9vdCgpe1xyXG4gICAgICAgIGxldCBtdXp6bGUgPSBuZXcgVEhSRUUuVmVjdG9yMygwLDEuNSwwKTtcclxuICAgICAgICB0aGlzLmxvY2FsVG9Xb3JsZChtdXp6bGUpO1xyXG5cclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLnNjZW5lKTtcclxuICAgICAgICBidWxsZXQucG9zaXRpb24uc2V0KG11enpsZS54LCBtdXp6bGUueSwgbXV6emxlLnopO1xyXG4gICAgICAgIGJ1bGxldC5yb3RhdGlvbi56ID0gdGhpcy5yb3RhdGlvbi56O1xyXG4gICAgICAgIGJ1bGxldC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWxsZXRzLnB1c2goYnVsbGV0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlKGlucHV0LCBkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pe1xyXG4gICAgICAgIGlmKCFmcnVzdHJ1bS5jb250YWluc1BvaW50KHRoaXMucG9zaXRpb24pKXtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5Mb29wKGNhbWVyYSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tTY3JlZW5Mb29wID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXt0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IGZhbHNlO31cclxuICAgICAgICAvL0FwcGx5IHJvdGF0aW9uXHJcbiAgICAgICAgdGhpcy5zcGluKGlucHV0WzFdLCBkZWx0YVRpbWUpO1xyXG4gICAgICAgIC8vQWRkIHRocnVzdCBpZiBidXR0b24gcHJlc3NlZFxyXG4gICAgICAgIGlmKGlucHV0WzBdID09PSAnZm9yd2FyZCcpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRocnVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVcGRhdGUgcG9zaXRpb24gdXNpbmcgZXhpc3RpbmcgdmVsb2NpdHlcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS55ICogZGVsdGFUaW1lO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5LnggKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgLy8gdXBkYXRlIHZlbG9jaXR5IGJ5IGFkZGluZyBhY2NlbGVyYXRpb25cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZFZlY3RvcnModGhpcy52ZWxvY2l0eSwgdGhpcy5hY2NlbGVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkubXVsdGlwbHlTY2FsYXIoMC45OTcpOy8vQXBwbHkgZnJpY3Rpb25cclxuICAgICAgICAvL1Jlc2V0IGFjY2VsZXJhdGlvblxyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnNldCgwLDAsMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oWydhc3Rlcm9pZCcsICdidWxsZXQnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpe1xyXG4gICAgICAgIGxldCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWZlJyk7XHJcbiAgICAgICAgaWNvbnNbdGhpcy5saXZlcy0xXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMubGl2ZXMtLTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmxpdmVzID49IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCgwLDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnNldCgwLDApO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uLnogPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImViNDA3NDc2MDgzM2JhN2RkN2ZlMGI2N2Q5ZDNkNzYxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAwN2ZiMjZlMGM4NmI2MjRlNDNhYmI0YTI4MjM3NDljLnBuZ1wiOyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuXHJcbmltcG9ydCB7QXN0ZXJvaWR9IGZyb20gJy4vQ29tcG9uZW50cy9Bc3Rlcm9pZC5qcyc7XHJcbmltcG9ydCB7RW5lbXl9IGZyb20gJy4vQ29tcG9uZW50cy9FbmVteS5qcyc7XHJcbmltcG9ydCB7U2hpcH0gZnJvbSAnLi9Db21wb25lbnRzL1NoaXAuanMnO1xyXG5cclxuaW1wb3J0IHNwYWNlSW1nIGZyb20gJy4vaW1hZ2VzL3NwYWNlLWltYWdlLnBuZyc7XHJcbmltcG9ydCBzdGFyc0ltZyBmcm9tICcuL2ltYWdlcy9zdGFycy1pbWcucG5nJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbi8vIE1ha2Ugc2NlbmUgYW5kIGFkZCBsaWdodHNcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuc2NlbmUuYWRkKG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHgwMDgwNzcsIDB4NGIxZjVlLCAxLjI1KSk7XHJcbnNjZW5lLmFkZChuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZGVkZWRlLCAxKSk7XHJcbmxldCBsaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZGVmY2Y2LCAwLjUpO1xyXG5saWdodC5wb3NpdGlvbi5zZXQoMjAsLTUsMTApO1xyXG5zY2VuZS5hZGQobGlnaHQpO1xyXG5cclxuLy8gTWFrZSBjYW1lcmEgYW5kIGZydXN0cnVtXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMCk7XHJcbmxldCBmcnVzdHJ1bSA9IG5ldyBUSFJFRS5GcnVzdHVtKCk7XHJcbmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwwLDUwKTtcclxuXHJcbi8vIE1ha2UgcmVuZGVyZXIgYW5kIHNldCBhbmltYXRpb24gbG9vcFxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6dHJ1ZX0pO1xyXG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxucmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcCggKCk9PnsgdXBkYXRlKCk7IH0gKTtcclxucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCk7XHJcblxyXG4vL0FkZCByZW5kZXIgY2FudmFzIGVsZW1lbnQgdG8gZG9jdW1lbnQgYm9keVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuLy9CYWNrZ3JvdW5kIHNldHVwXHJcbmxldCBzdGFyc1RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoc3RhcnNJbWcpO1xyXG5zdGFyc1RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuc3RhcnNUZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbnN0YXJzVGV4dHVyZS5yZXBlYXQuc2V0KCA0LCA0ICk7XHJcblxyXG5sZXQgc3BhY2VUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHNwYWNlSW1nKTtcclxuc3BhY2VUZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbnNwYWNlVGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5zcGFjZVRleHR1cmUuY2VudGVyLnNldCgwLjUsIDAuNSk7XHJcblxyXG5sZXQgc3Rhck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHttYXA6IHN0YXJzVGV4dHVyZSwgYWxwaGFNYXA6IHN0YXJzVGV4dHVyZX0pO1xyXG5zdGFyTWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5zdGFyTWF0ZXJpYWwuZGVwdGhUZXN0ID0gdHJ1ZTtcclxuc3Rhck1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuQWRkaXRpdmVCbGVuZGluZztcclxuXHJcbmxldCBzcGFjZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHttYXA6IHNwYWNlVGV4dHVyZSwgYWxwaGFNYXA6IHNwYWNlVGV4dHVyZX0pO1xyXG5zcGFjZU1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuc3BhY2VNYXRlcmlhbC5vcGFjaXR5ID0gMC4xNTtcclxuc3BhY2VNYXRlcmlhbC5kZXB0aFRlc3QgPSB0cnVlO1xyXG5zcGFjZU1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuQWRkaXRpdmVCbGVuZGluZztcclxuXHJcbmxldCBzdGFyUGxhbmUgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgxMDAsMTAwLCAyNSwgMjUpLCBzdGFyTWF0ZXJpYWwpO1xyXG5zdGFyUGxhbmUucG9zaXRpb24uc2V0KDAsIC0xMCwgMCk7XHJcbnNjZW5lLmFkZChzdGFyUGxhbmUpO1xyXG5cclxubGV0IHNwYWNlUGxhbmUgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgxMDAsMTAwLCAyNSwyNSksIHNwYWNlTWF0ZXJpYWwpO1xyXG5zcGFjZVBsYW5lLnBvc2l0aW9uLnNldCgwLCAtMTUsIDApO1xyXG5zY2VuZS5hZGQoc3BhY2VQbGFuZSk7XHJcblxyXG4vLyBhcnJheXNcclxuY29uc3QgaW5wdXQgPSBbJycsJyddO1xyXG5jb25zdCBidWxsZXRzID0gW107XHJcbmNvbnN0IGVuZW1pZXMgPSBbXTtcclxuY29uc3QgYXN0ZXJvaWRzID0gW107XHJcblxyXG4vLyBJbnRlcnZhbCBJRCdzIGZvciBzcGF3bmluZyBhc3Rlcm9pZHMvZW5lbWllc1xyXG5sZXQgYXN0ZXJvaWRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChzcGF3bkFzdGVyb2lkLCA1MDAwKTtcclxubGV0IGVuZW15SW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25FbmVteSwgMTUwMDApO1xyXG5sZXQgZW5lbXlMaW1pdCA9IDI7XHJcblxyXG4vLyBJbnN0YW50aWF0ZSBwbGF5ZXJcclxubGV0IHBsYXllciA9IG5ldyBTaGlwKHNjZW5lLCBidWxsZXRzKTtcclxuXHJcbi8vIFJlc2V0IGZsYWdcclxubGV0IGJsb2NrUmVzZXQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpe1xyXG4gICAgZnJ1c3RydW0uc2V0RnJvbU1hdHJpeChuZXcgVEhSRUUuTWF0cml4NCgpLm11bHRpcGx5TWF0cmljZXMoY2FtZXJhLnByb2plY3Rpb25NYXRyaXgsIGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UpKTtcclxuICAgIFxyXG4gICAgbGV0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICBzcGFjZVRleHR1cmUucm90YXRpb24gKz0gMC4wMSAqIGRlbHRhVGltZTtcclxuXHJcbiAgICAvL1VwZGF0ZSBhc3Rlcm9pZHNcclxuICAgIGZvcihsZXQgYXN0ZXJvaWQgb2YgYXN0ZXJvaWRzKXtcclxuICAgICAgICBzd2l0Y2goYXN0ZXJvaWQuYWxpdmUpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBhc3Rlcm9pZC51cGRhdGUoZGVsdGFUaW1lLCBjYW1lcmEsIGZydXN0cnVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgaWYoYXN0ZXJvaWQuc2l6ZSA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhc3Rlcm9pZC5zaXplOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm90ID0gYXN0ZXJvaWQucm90YXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGFzdGVyb2lkLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGVPZmZzZXQgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/ICgwLjUgKyAoTWF0aC5yYW5kb20oKSAqIDEuMTUpKSA6IC0oIDAuNSArIChNYXRoLnJhbmRvbSgpICogMS4xNSkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQucm90YXRlWihhbmdsZU9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQudHJhbnNsYXRlWChhc3Rlcm9pZC5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC50cmFuc2xhdGVYKC1hc3Rlcm9pZC5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC50cmFuc2xhdGVZKGFzdGVyb2lkLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduQXN0ZXJvaWQoYXN0ZXJvaWQuc2l6ZSAtIDEsIGFzdGVyb2lkLnBvc2l0aW9uLCBhc3Rlcm9pZC5yb3RhdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWQucm90YXRpb24uc2V0KHJvdC54LCByb3QueSwgcm90LnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFzdGVyb2lkcy5zcGxpY2UoYXN0ZXJvaWRzLmluZGV4T2YoYXN0ZXJvaWQpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1VwYWR0ZSBFbmVtaWVzXHJcbiAgICBmb3IobGV0IGVuZW15IG9mIGVuZW1pZXMpe1xyXG4gICAgICAgIHN3aXRjaChlbmVteS5hbGl2ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGVuZW15LnVwZGF0ZShkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBlbmVtaWVzLnNwbGljZShlbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1VwZGF0ZSBidWxsZXRzXHJcbiAgICBmb3IobGV0IGJ1bGxldCBvZiBidWxsZXRzKXtcclxuICAgICAgICBzd2l0Y2goYnVsbGV0LmFsaXZlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgYnVsbGV0LnVwZGF0ZShkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBidWxsZXRzLnNwbGljZShidWxsZXRzLmluZGV4T2YoYnVsbGV0KSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9VcGRhdGUgcGxheWVyXHJcbiAgICBpZihwbGF5ZXIuYWxpdmUpe1xyXG4gICAgICAgIHBsYXllci51cGRhdGUoaW5wdXQsIGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFibG9ja1Jlc2V0KXtcclxuXHJcbiAgICAgICAgYmxvY2tSZXNldCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhc3Rlcm9pZEludGVydmFsKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGVuZW15SW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHJlc3RhcnQsIDMwMDApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KClcclxue1xyXG4gICAgLy9EZXN0cm95IGFsbCBhc3Rlcm9pZHMsIGVtcHR5IGFycmF5IHRoZSBhcnJheVxyXG4gICAgZm9yKGxldCBhIG9mIGFzdGVyb2lkcyl7XHJcbiAgICAgICAgYS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBhc3Rlcm9pZHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAvL0Rlc3Ryb3kgYWxsIGJ1bGxldHMsIGVtcHR5IGFycmF5IHRoZSBhcnJheVxyXG4gICAgZm9yKGxldCBiIG9mIGJ1bGxldHMpe1xyXG4gICAgICAgIGIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgYnVsbGV0cy5sZW5ndGggPSAwO1xyXG5cclxuICAgIC8vRGVzdHJveSBhbGwgZW5lbWllcywgZW1wdHkgYXJyYXkgdGhlIGFycmF5XHJcbiAgICBmb3IobGV0IGUgb2YgZW5lbWllcyl7XHJcbiAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBlbmVtaWVzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgLy8gUmVzZXQgaW50ZXJ2YWwgSUQnc1xyXG4gICAgYXN0ZXJvaWRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChzcGF3bkFzdGVyb2lkLCA1MDAwKTtcclxuICAgIGVuZW15SW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25FbmVteSwgMTUwMDApO1xyXG5cclxuICAgIC8vIFJlc2V0IHNjb3JlXHJcbiAgICBsZXQgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgIHNjb3JlRGl2LmlubmVySFRNTCA9ICcwMDAwJztcclxuXHJcbiAgICAvLyBSZXNldCBsaWZlIGNvdW50ZXJcclxuICAgIGxldCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWZlJyk7XHJcbiAgICBmb3IobGV0IGVsZW1lbnQgb2YgaWNvbnMpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmUtaW5pdGFsaXplIHBsYXllclxyXG4gICAgcGxheWVyID0gbmV3IFNoaXAoc2NlbmUsIGJ1bGxldHMpO1xyXG5cclxuICAgIGJsb2NrUmVzZXQgPSBmYWxzZTtcclxufVxyXG5cclxuLy9DYWxsZWQgdG8gY3JlYXRlIEVuZW1pZXNcclxuZnVuY3Rpb24gc3Bhd25FbmVteSgpe1xyXG4gICAgaWYoZW5lbWllcy5sZW5ndGggPCBlbmVteUxpbWl0KXtcclxuICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkoc2NlbmUsIHBsYXllciwgYnVsbGV0cyk7XHJcbiAgICAgICAgZW5lbWllcy5wdXNoKGVuZW15KTtcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteUludGVydmFsKTtcclxuICAgICAgICBlbmVteUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduRW5lbXksICgxNTAwMCArIE1hdGgucmFuZG9tKCkpICogMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2FsbGVkIHRvIGNyZWF0ZSBhc3Rlcm9pZHNcclxuZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZChzaXplLCBwb3NpdGlvbiwgcm90YXRpb24pe1xyXG4gICAgbGV0IGFzdGVyb2lkO1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IG1ha2VOZXdUcmFuc2Zvcm0oKTtcclxuICAgIFxyXG4gICAgaWYoc2l6ZSAhPSBudWxsKXsgXHJcbiAgICAgICAgYXN0ZXJvaWQgPSBuZXcgQXN0ZXJvaWQoc2NlbmUsIHBsYXllciwgc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2V7IFxyXG4gICAgICAgIGFzdGVyb2lkID0gbmV3IEFzdGVyb2lkKHNjZW5lLCBwbGF5ZXIsICgxICsgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDMpICksIHRyYW5zZm9ybS5wb3NpdGlvbiwgdHJhbnNmb3JtLnJvdGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3Rlcm9pZHMucHVzaChhc3Rlcm9pZCk7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbChhc3Rlcm9pZEludGVydmFsKTtcclxuICAgIGFzdGVyb2lkSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25Bc3Rlcm9pZCwgKDQwMDAgKyBNYXRoLnJhbmRvbSgpICogMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTmV3VHJhbnNmb3JtKCl7XHJcbiAgICBsZXQgcG9zLCByb3Q7XHJcbiAgICBkb3tcclxuICAgICAgICBwb3MgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUpID8gKG5ldyBUSFJFRS5WZWN0b3IzKE1hdGgucmFuZG9tKCkgKiAtMjAsIE1hdGgucmFuZG9tKCkgKiAtMjAsIDApKSA6IChuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnJhbmRvbSgpICogMjAsIE1hdGgucmFuZG9tKCkgKiAyMCwgMCkpO1xyXG4gICAgICAgIHJvdCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSkgPyAoTWF0aC5yYW5kb20oKSAqIDYpIDogLShNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgICB9d2hpbGUocG9zLmRpc3RhbmNlVG8ocGxheWVyLnBvc2l0aW9uKSA8IDEwKVxyXG4gICAgLy9kbyB3aGlsZSB0byBwcmV2ZW50IHNwYXduaW5nIG9udG9wIG9mIHBsYXllclxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zaXRpb246IHBvcyxcclxuICAgICAgICByb3RhdGlvbjogcm90XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vTW91c2UgY2xpY2sgZXZlbnQgZm9yIHNob290aW5nO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvb3QsIGZhbHNlKTtcclxuZnVuY3Rpb24gc2hvb3QoKXtcclxuICAgIGlmKHBsYXllci5hbGl2ZSl7XHJcbiAgICAgICAgcGxheWVyLnNob290KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vR2V0dGluZyBrZXlib2FyZCBpbnB1dCBmb3IgZGlyZWN0aW9uYWwgY29udHJvbHMuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdXBkYXRlSW5wdXQsIGZhbHNlKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlSW5wdXQsIGZhbHNlKTtcclxuZnVuY3Rpb24gdXBkYXRlSW5wdXQoZSl7XHJcbiAgICBsZXQgdHlwZSA9IGUudHlwZTtcclxuICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgIC8vIFdcclxuICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2tleWRvd24nICYmIGlucHV0WzBdICE9ICdmb3J3YXJkJylcclxuICAgICAgICAgICAgICAgIGlucHV0WzBdID0gJ2ZvcndhcmQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFswXSA9PSAnZm9yd2FyZCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFswXSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBTXHJcbiAgICAgICAgY2FzZSA4MzpcclxuICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdrZXlkb3duJyAmJiBpbnB1dFswXSAhPSAnYmFja3dhcmQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMF0gPSAnYmFja3dhcmQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFswXSA9PSAnYmFja3dhcmQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMF0gPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gQVxyXG4gICAgICAgIGNhc2UgNjU6XHJcbiAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAna2V5ZG93bicgJiYgaW5wdXRbMV0gIT0gJ2xlZnQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMV0gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAna2V5dXAnICYmIGlucHV0WzFdID09ICdsZWZ0JylcclxuICAgICAgICAgICAgICAgIGlucHV0WzFdID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIERcclxuICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2tleWRvd24nICYmIGlucHV0WzFdICE9ICdyaWdodCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFsxXSA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAna2V5dXAnICYmIGlucHV0WzFdID09ICdyaWdodCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFsxXSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLy9XaW5kb3cgcmVzaXppbmdcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplKTtcclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKXtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbn0iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=