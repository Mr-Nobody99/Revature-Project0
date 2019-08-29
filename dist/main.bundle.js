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
exports.push([module.i, "body{\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\ncanvas{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n#info{\r\n\r\n    width: 20vw;\r\n    height: 10vh;\r\n    position: absolute;\r\n    \r\n    left: 10vw;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    align-items: center;\r\n    \r\n    z-index: 1;\r\n}\r\n#score{\r\n    font-family: monospace;\r\n    font-size: 3.5vh;\r\n}\r\n#info > div{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n#lives{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, min-content);\r\n    grid-template-rows: min-content;\r\n    justify-content: center;\r\n}\r\n.life{\r\n    width: 15px;\r\n    height: 15px;\r\n    margin: 2px;\r\n    background-color: white;\r\n}", ""]);


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
        
        if(this.direction == null){ this.translateY(this.speed * deltaTime); }
        else{ this.translateOnAxis(this.direction, this.speed * deltaTime);}

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

    makeCollider(geo){
        let mat = new THREE.MeshStandardMaterial({visible:false});
        let mesh = new THREE.Mesh(geo, mat);
        this.collider = mesh;
        this.add(this.collider);
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

    //Called to loop object around screen
    screenLoop(camera){
        if(!this.blockScreenLoop){
            let screenPos = this.position.clone();
            screenPos.project(camera);//Project the vector to screen space(ie. cameras view);
            screenPos.x = ( screenPos.x + 1 ) * window.innerWidth / 2 ;//Map the projected vector
            screenPos.y = ( screenPos.y + 1 ) * window.innerHeight / 2 ;// using basic conversion formula.
            screenPos.z = 0;

            let newPos = this.position.clone();
            newPos.multiplyScalar(-1);

            if(screenPos.y > 0 && screenPos.y < window.innerHeight){
                this.position.setX(newPos.x);
            }
            if(screenPos.x > 0 && screenPos.x < window.innerWidth){
                this.position.setY(newPos.y);
            }
        }
    }

    checkCollision(names){
        if(this.alive){

            let hits = [];
            for(let child of this.scene.children){
                if(names.includes(child.name)){
                    hits.push(child.collider);
                }
            }

            let vertices;
            let origin = this.position.clone();
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
                    collisionResults[0].object.parent.destroy();
                    this.destroy();
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
    constructor(scene){
        super(scene);
        
        this.loadMesh('./glb_files/spaceShip_LowPoly.glb');

        let geo = new THREE.CylinderBufferGeometry(0.25, 1.25, 1.85, 18, 18);
        this.makeCollider(geo);
        this.collider.position.setY(0.15);

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

        return bullet;
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

/***/ "./src/images/AsteroidShip_small.jpg":
/*!*******************************************!*\
  !*** ./src/images/AsteroidShip_small.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cacf5ebcefc1f2014aa30e5f159e5ae6.jpg";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_AsteroidShip_small_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/AsteroidShip_small.jpg */ "./src/images/AsteroidShip_small.jpg");
/* harmony import */ var _images_AsteroidShip_small_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_AsteroidShip_small_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_space_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/space-image.png */ "./src/images/space-image.png");
/* harmony import */ var _images_space_image_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_space_image_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_stars_img_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/stars-img.png */ "./src/images/stars-img.png");
/* harmony import */ var _images_stars_img_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_stars_img_png__WEBPACK_IMPORTED_MODULE_6__);
const THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");








const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0x008077, 0x4b1f5e, 1.25));
scene.add(new THREE.AmbientLight(0xdedede, 1));
let light = new THREE.DirectionalLight(0xdefcf6, 0.5);
light.position.set(20,-5,10);
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
camera.position.set(0,0,50);
let frustrum = new THREE.Frustum();

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( ()=>{ update(); } );
renderer.setClearColor(0x000000);

document.body.appendChild(renderer.domElement);

let starsTexture = new THREE.TextureLoader().load(_images_stars_img_png__WEBPACK_IMPORTED_MODULE_6___default.a);
starsTexture.wrapS = THREE.RepeatWrapping;
starsTexture.wrapT = THREE.RepeatWrapping;
starsTexture.repeat.set( 4, 4 );

let spaceTexture = new THREE.TextureLoader().load(_images_space_image_png__WEBPACK_IMPORTED_MODULE_5___default.a);
spaceTexture.wrapS = THREE.RepeatWrapping;
spaceTexture.wrapT = THREE.RepeatWrapping;
spaceTexture.center.set(0.5, 0.5);

let starMaterial = new THREE.MeshPhongMaterial({map: starsTexture, alphaMap: starsTexture});
starMaterial.transparent = true;
starMaterial.depthTest = true;
starMaterial.blending = THREE.AdditiveBlending;
let bgMaterial = new THREE.MeshPhongMaterial({map: spaceTexture, alphaMap: spaceTexture});
bgMaterial.transparent = true;
bgMaterial.blending = THREE.AdditiveBlending;

let starPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25, 25), starMaterial);
starPlane.position.set(0, -10, 0);
scene.add(starPlane);
let bgPlane = new THREE.Mesh(new THREE.PlaneBufferGeometry(100,100, 25,25), bgMaterial);
bgPlane.position.set(0, -5, -15);
// scene.add(bgPlane);

const input = ['',''];
const bullets = [];
const enemies = [];
const asteroids = [];
let asteroidInterval = window.setInterval(spawnAsteroid, 5000);
let enemyInterval = window.setInterval(spawnEnemy, 15000);
let enemyLimit = 2;

let player = new _Components_Ship_js__WEBPACK_IMPORTED_MODULE_2__["Ship"](scene);

let blockReset = false;

function update(){
    frustrum.setFromMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    let deltaTime = clock.getDelta();
    // spaceTexture.rotation += 0.01 * deltaTime;

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
    while(asteroids.length > 0){
            for(let a of asteroids){
                a.destroy();
                asteroids.splice(asteroids.indexOf(a), 1);
                break;
            }
        }
    while(bullets.length > 0){
            for(let b of bullets){
                b.destroy();
                bullets.splice(bullets.indexOf(b), 1);
                break;
            }
        }
    while(enemies.length > 0)
        for(let e of enemies){
            e.destroy();
            enemies.splice(enemies.indexOf(e), 1);
            break;
        }

        asteroidInterval = window.setInterval(spawnAsteroid, 5000);
        enemyInterval = window.setInterval(spawnEnemy, 15000);

        let scoreDiv = document.querySelector('#score');
        scoreDiv.innerHTML = '0000';

        let icons = document.querySelectorAll('.life');
        for(let element of icons){
            element.style.display = 'block';
        }

        player = new _Components_Ship_js__WEBPACK_IMPORTED_MODULE_2__["Ship"](scene);

        blockReset = false;
}

function spawnEnemy(){
    if(enemies.length < enemyLimit){
        let enemy = new _Components_Enemy_js__WEBPACK_IMPORTED_MODULE_1__["Enemy"](scene, player, bullets);
        enemies.push(enemy);

        clearInterval(enemyInterval);
        enemyInterval = window.setInterval(spawnEnemy, (15000 + Math.random()) * 2);
    }
}

function spawnAsteroid(size, position, rotation){
    let asteroid;
    let transform = makeNewTransform();
    
    if(size != null){ asteroid = new _Components_Asteroid_js__WEBPACK_IMPORTED_MODULE_0__["Asteroid"](scene, player, size, position, rotation);}
    else{ asteroid = new _Components_Asteroid_js__WEBPACK_IMPORTED_MODULE_0__["Asteroid"](scene, player, (1 + Math.floor( Math.random() * 3) ), transform.position, transform.rotation);}

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

    return {
        position: pos,
        rotation: rot
    }
}

//Mouse click event for shooting;
window.addEventListener('mousedown', shoot, false);
function shoot(){
    if(player.alive){
        let bullet = player.shoot();
        bullets.push(bullet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Bc3Rlcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRW5lbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvQXN0ZXJvaWRTaGlwX3NtYWxsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NwYWNlLWltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YXJzLWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz85ODE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0RBQUk7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwwREFBSztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQixnRUFBUTtBQUM3QyxTQUFTLGdCQUFnQixnRUFBUTs7QUFFakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7OztBQzNSQSxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RTtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTdGO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmNhbnZhc3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuI2luZm97XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAyMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgXFxyXFxuICAgIGxlZnQ6IDEwdnc7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG4jc2NvcmV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41dmg7XFxyXFxufVxcclxcbiNpbmZvID4gZGl2e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI2xpdmVze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubGlmZXtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cIiwgXCJcIl0pO1xuIiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge0dhbWVPYmplY3R9IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcblxyXG5jbGFzcyBBc3Rlcm9pZCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgcGxheWVyLCBzaXplLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9uKXtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJSZWYgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2FzdGVyb2lkJztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBzaXplICogMTAwO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCAwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uLnogPSByb3RhdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGdlbztcclxuICAgICAgICBzd2l0Y2goc2l6ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lc2goJy4vZ2xiX2ZpbGVzL0FzdGVyb2lkMS5nbGInKTtcclxuICAgICAgICAgICAgICAgIGdlbyA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgzLjI1LCAxOCwgMTgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDIuNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZXNoKCcuL2dsYl9maWxlcy9Bc3Rlcm9pZDIuZ2xiJyk7XHJcbiAgICAgICAgICAgICAgICBnZW8gPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoMS43NSwgMTgsIDE4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lc2goJy4vZ2xiX2ZpbGVzL0FzdGVyb2lkMy5nbGInKTtcclxuICAgICAgICAgICAgICAgIGdlbyA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgxLCAxOCwgMTgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDQuNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1ha2VDb2xsaWRlcihnZW8pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUsIGNhbWVyYSwgZnJ1c3RydW0pe1xyXG4gICAgICAgIGlmKCFmcnVzdHJ1bS5jb250YWluc1BvaW50KHRoaXMucG9zaXRpb24pKXtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5Mb29wKGNhbWVyYSlcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1NjcmVlbkxvb3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle3RoaXMuYmxvY2tTY3JlZW5Mb29wID0gZmFsc2U7fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSh0aGlzLnNwZWVkICogZGVsdGFUaW1lKTtcclxuICAgICAgICB0aGlzLnJvdGF0ZVkoMC41ICogZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCl7XHJcbiAgICAgICAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XHJcbiAgICAgICAgbGV0IHNjb3JlID0gcGFyc2VJbnQoc2NvcmVEaXYuaW5uZXJIVE1MLCAxMCk7XHJcbiAgICAgICAgc2NvcmUgKz0gdGhpcy52YWx1ZTtcclxuICAgICAgICBzY29yZURpdi5pbm5lckhUTUwgPSBzY29yZS50b1N0cmluZygxMCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnR7QXN0ZXJvaWR9OyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL0dhbWVPYmplY3QuanMnO1xyXG5cclxuY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCBkaXJlY3Rpb24gPSBudWxsKXtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9ICdidWxsZXQnO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyNTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMjAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICAvLyBNYWtlIHNwaGVyZSBmb3IgYnVsbGV0XHJcbiAgICAgICAgbGV0IGdlbyA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgwLjEyLCAxOCwgMTgpO1xyXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6J3llbGxvdycsIHdpcmVmcmFtZTpmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsKTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSl7XHJcbiAgICAgICAgaWYoIWZydXN0cnVtLmNvbnRhaW5zUG9pbnQodGhpcy5wb3NpdGlvbikpe1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxvb3AoY2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5kdXJhdGlvbiA8PSAwKXsgdGhpcy5kZXN0cm95KCk7IH1cclxuICAgICAgICBlbHNleyB0aGlzLmR1cmF0aW9uLS07IH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PSBudWxsKXsgdGhpcy50cmFuc2xhdGVZKHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpOyB9XHJcbiAgICAgICAgZWxzZXsgdGhpcy50cmFuc2xhdGVPbkF4aXModGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkZWx0YVRpbWUpO31cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbihbJ2FzdGVyb2lkJywgJ2VuZW15J10pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0J1bGxldH07IiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge0dhbWVPYmplY3R9IGZyb20gJy4vR2FtZU9iamVjdC5qcyc7XHJcbmltcG9ydCB7QnVsbGV0fSBmcm9tICcuL0J1bGxldC5qcyc7XHJcblxyXG5jbGFzcyBFbmVteSBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgcGxheWVyLCBidWxsZXRzKXtcclxuICAgICAgICBzdXBlcihzY2VuZSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE1lc2goJy4vZ2xiX2ZpbGVzL1VGTy5nbGInKTtcclxuXHJcbiAgICAgICAgbGV0IGdlbyA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgwLjc1LCAxOCwgMTgpO1xyXG4gICAgICAgIHRoaXMubWFrZUNvbGxpZGVyKGdlbyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IGJ1bGxldHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2VuZW15JztcclxuICAgICAgICB0aGlzLnBsYXllclJlZiA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKC0xLDAsMCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEyO1xyXG4gICAgICAgIHRoaXMuc2hvb3REZWxheSA9IDE3NTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gNTAwO1xyXG5cclxuICAgICAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMzUgOiAzNTtcclxuICAgICAgICBsZXQgeSA9IChNYXRoLnJhbmRvbSgpLTAuNSkgKiAyMDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCggeCwgeSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3QoKXtcclxuXHJcbiAgICAgICAgbGV0IGRpciA9IHRoaXMucGxheWVyUmVmLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgZGlyLnN1Yih0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICBkaXIubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgcG9zLmFkZChkaXIpO1xyXG5cclxuICAgICAgICBsZXQgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLnNjZW5lLCBkaXIpO1xyXG4gICAgICAgIGJ1bGxldC5wb3NpdGlvbi5zZXQocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgYnVsbGV0LnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSl7XHJcbiAgICAgICAgaWYoIWZydXN0cnVtLmNvbnRhaW5zUG9pbnQodGhpcy5wb3NpdGlvbikpe1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxvb3AoY2FtZXJhKVxyXG4gICAgICAgICAgICB0aGlzLmJsb2NrU2NyZWVuTG9vcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7dGhpcy5ibG9ja1NjcmVlbkxvb3AgPSBmYWxzZTt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG9vdERlbGF5LS07XHJcbiAgICAgICAgaWYodGhpcy5zaG9vdERlbGF5IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REZWxheSA9ICgxMCArIE1hdGgucmFuZG9tKCkpICogMjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLmRpc3RhbmNlVG8odGhpcy5wbGF5ZXJSZWYucG9zaXRpb24pIDwgMTUpe1xyXG4gICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBkaXIuc3ViKHRoaXMucGxheWVyUmVmLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgZGlyLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0KGRpci54LCBkaXIueSwgZGlyLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZU9uQXhpcyh0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCAqIGRlbHRhVGltZSk7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkaW5nQ29tcGxldGUpe3RoaXMubWVzaC5yb3RhdGVaKDEuNSpkZWx0YVRpbWUpO31cclxuICAgIH1cclxuICAgIGRlc3Ryb3koKXtcclxuICAgICAgICBsZXQgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgICAgICBsZXQgc2NvcmUgPSBwYXJzZUludChzY29yZURpdi5pbm5lckhUTUwsIDEwKTtcclxuICAgICAgICBzY29yZSArPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHNjb3JlRGl2LmlubmVySFRNTCA9IHNjb3JlLnRvU3RyaW5nKDEwKTtcclxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RW5lbXl9OyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtPYmplY3QzRH0gZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQge0dMVEZMb2FkZXJ9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInO1xyXG5cclxuY2xhc3MgR2FtZU9iamVjdCBleHRlbmRzIE9iamVjdDNEe1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NjcmVlbkxvb3AgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ29sbGlkZXIoZ2VvKXtcclxuICAgICAgICBsZXQgbWF0ID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHt2aXNpYmxlOmZhbHNlfSk7XHJcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG1lc2g7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5jb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZE1lc2godXJsKXtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgbG9hZGVyLmxvYWQodXJsLCAoZ2x0Zik9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzaCA9IGdsdGYuc2NlbmUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5hbWUgPT09ICdhc3Rlcm9pZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbih0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzaC51cGRhdGVNYXRyaXhXb3JsZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5tZXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KDAsMCwwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5tZXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zY2VuZS5hZGQodGhpcyksIHRoaXMubG9hZGluZ0NvbXBsZXRlID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2FsbGVkIHRvIGxvb3Agb2JqZWN0IGFyb3VuZCBzY3JlZW5cclxuICAgIHNjcmVlbkxvb3AoY2FtZXJhKXtcclxuICAgICAgICBpZighdGhpcy5ibG9ja1NjcmVlbkxvb3Ape1xyXG4gICAgICAgICAgICBsZXQgc2NyZWVuUG9zID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBzY3JlZW5Qb3MucHJvamVjdChjYW1lcmEpOy8vUHJvamVjdCB0aGUgdmVjdG9yIHRvIHNjcmVlbiBzcGFjZShpZS4gY2FtZXJhcyB2aWV3KTtcclxuICAgICAgICAgICAgc2NyZWVuUG9zLnggPSAoIHNjcmVlblBvcy54ICsgMSApICogd2luZG93LmlubmVyV2lkdGggLyAyIDsvL01hcCB0aGUgcHJvamVjdGVkIHZlY3RvclxyXG4gICAgICAgICAgICBzY3JlZW5Qb3MueSA9ICggc2NyZWVuUG9zLnkgKyAxICkgKiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIDsvLyB1c2luZyBiYXNpYyBjb252ZXJzaW9uIGZvcm11bGEuXHJcbiAgICAgICAgICAgIHNjcmVlblBvcy56ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG5ld1Bvcy5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG4gICAgICAgICAgICBpZihzY3JlZW5Qb3MueSA+IDAgJiYgc2NyZWVuUG9zLnkgPCB3aW5kb3cuaW5uZXJIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXRYKG5ld1Bvcy54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzY3JlZW5Qb3MueCA+IDAgJiYgc2NyZWVuUG9zLnggPCB3aW5kb3cuaW5uZXJXaWR0aCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldFkobmV3UG9zLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKG5hbWVzKXtcclxuICAgICAgICBpZih0aGlzLmFsaXZlKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaXRzID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy5zY2VuZS5jaGlsZHJlbil7XHJcbiAgICAgICAgICAgICAgICBpZihuYW1lcy5pbmNsdWRlcyhjaGlsZC5uYW1lKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGl0cy5wdXNoKGNoaWxkLmNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHZlcnRpY2VzO1xyXG4gICAgICAgICAgICBsZXQgb3JpZ2luID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICBsZXQgdGVtcEdlbyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpLmZyb21CdWZmZXJHZW9tZXRyeSh0aGlzLmNvbGxpZGVyLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgdmVydGljZXMgPSB0ZW1wR2VvLnZlcnRpY2VzO1xyXG4gICAgICAgICAgICB0ZW1wR2VvLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsVmVydGV4ID0gdmVydGljZXNbaV0uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBnbG9iYWxWZXJ0ZXggPSBsb2NhbFZlcnRleC5hcHBseU1hdHJpeDQoIHRoaXMubWF0cml4ICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gZ2xvYmFsVmVydGV4LnN1YiggdGhpcy5wb3NpdGlvbiApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBvcmlnaW4sIGRpcmVjdGlvblZlY3Rvci5jbG9uZSgpLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKCBoaXRzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IGRpcmVjdGlvblZlY3Rvci5sZW5ndGgoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblJlc3VsdHNbMF0ub2JqZWN0LnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpe1xyXG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKHRoaXMubWVzaCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0dhbWVPYmplY3R9OyIsImNvbnN0IFRIUkVFID0gcmVxdWlyZSgndGhyZWUnKTtcclxuaW1wb3J0IHtHYW1lT2JqZWN0fSBmcm9tICcuL0dhbWVPYmplY3QuanMnO1xyXG5pbXBvcnQge0J1bGxldH0gZnJvbSAnLi9CdWxsZXQuanMnO1xyXG5cclxuY2xhc3MgU2hpcCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSl7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubG9hZE1lc2goJy4vZ2xiX2ZpbGVzL3NwYWNlU2hpcF9Mb3dQb2x5LmdsYicpO1xyXG5cclxuICAgICAgICBsZXQgZ2VvID0gbmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yNSwgMS4yNSwgMS44NSwgMTgsIDE4KTtcclxuICAgICAgICB0aGlzLm1ha2VDb2xsaWRlcihnZW8pO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIucG9zaXRpb24uc2V0WSgwLjE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ3NoaXAnO1xyXG4gICAgICAgIHRoaXMubGl2ZXMgPSAzO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgICAgICB0aGlzLnRocnVzdEZvcmNlID0gMC4yNTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSAzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRocnVzdCgpe1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnggKz0gdGhpcy50aHJ1c3RGb3JjZSAqIE1hdGguY29zKC10aGlzLnJvdGF0aW9uLnopO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnkgKz0gdGhpcy50aHJ1c3RGb3JjZSAqIE1hdGguc2luKC10aGlzLnJvdGF0aW9uLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHNwaW4oZGlyLCBkZWx0YVRpbWUpe1xyXG4gICAgICAgIGxldCByYXRlID0gdGhpcy5yb3RhdGlvblNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgIHN3aXRjaChkaXIpe1xyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlWihyYXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZVooLXJhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob290KCl7XHJcbiAgICAgICAgbGV0IG11enpsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsMS41LDApO1xyXG4gICAgICAgIHRoaXMubG9jYWxUb1dvcmxkKG11enpsZSk7XHJcblxyXG4gICAgICAgIGxldCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMuc2NlbmUpO1xyXG4gICAgICAgIGJ1bGxldC5wb3NpdGlvbi5zZXQobXV6emxlLngsIG11enpsZS55LCBtdXp6bGUueik7XHJcbiAgICAgICAgYnVsbGV0LnJvdGF0aW9uLnogPSB0aGlzLnJvdGF0aW9uLno7XHJcbiAgICAgICAgYnVsbGV0LnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gYnVsbGV0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGUoaW5wdXQsIGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSl7XHJcbiAgICAgICAgaWYoIWZydXN0cnVtLmNvbnRhaW5zUG9pbnQodGhpcy5wb3NpdGlvbikpe1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxvb3AoY2FtZXJhKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1NjcmVlbkxvb3AgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle3RoaXMuYmxvY2tTY3JlZW5Mb29wID0gZmFsc2U7fVxyXG4gICAgICAgIC8vQXBwbHkgcm90YXRpb25cclxuICAgICAgICB0aGlzLnNwaW4oaW5wdXRbMV0sIGRlbHRhVGltZSk7XHJcbiAgICAgICAgLy9BZGQgdGhydXN0IGlmIGJ1dHRvbiBwcmVzc2VkXHJcbiAgICAgICAgaWYoaW5wdXRbMF0gPT09ICdmb3J3YXJkJyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGhydXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVwZGF0ZSBwb3NpdGlvbiB1c2luZyBleGlzdGluZyB2ZWxvY2l0eVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5LnkgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueCAqIGRlbHRhVGltZTtcclxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgYnkgYWRkaW5nIGFjY2VsZXJhdGlvblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuYWRkVmVjdG9ycyh0aGlzLnZlbG9jaXR5LCB0aGlzLmFjY2VsZXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5tdWx0aXBseVNjYWxhcigwLjk5Nyk7Ly9BcHBseSBmcmljdGlvblxyXG4gICAgICAgIC8vUmVzZXQgYWNjZWxlcmF0aW9uXHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0KDAsMCwwKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbihbJ2FzdGVyb2lkJywgJ2J1bGxldCddKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCl7XHJcbiAgICAgICAgbGV0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZmUnKTtcclxuICAgICAgICBpY29uc1t0aGlzLmxpdmVzLTFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5saXZlcy0tO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMubGl2ZXMgPj0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0KDAsMCwwKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXQoMCwwKTtcclxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0KDAsMCk7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24ueiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2FjZjVlYmNlZmMxZjIwMTRhYTMwZTVmMTU5ZTVhZTYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWI0MDc0NzYwODMzYmE3ZGQ3ZmUwYjY3ZDlkM2Q3NjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDA3ZmIyNmUwYzg2YjYyNGU0M2FiYjRhMjgyMzc0OWMucG5nXCI7IiwiY29uc3QgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5pbXBvcnQge0FzdGVyb2lkfSBmcm9tICcuL0NvbXBvbmVudHMvQXN0ZXJvaWQuanMnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL0NvbXBvbmVudHMvRW5lbXkuanMnO1xyXG5pbXBvcnQge1NoaXB9IGZyb20gJy4vQ29tcG9uZW50cy9TaGlwLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsaWZlSW1nIGZyb20gJy4vaW1hZ2VzL0FzdGVyb2lkU2hpcF9zbWFsbC5qcGcnO1xyXG5pbXBvcnQgc3BhY2VJbWcgZnJvbSAnLi9pbWFnZXMvc3BhY2UtaW1hZ2UucG5nJztcclxuaW1wb3J0IHN0YXJzSW1nIGZyb20gJy4vaW1hZ2VzL3N0YXJzLWltZy5wbmcnO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbnNjZW5lLmFkZChuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4MDA4MDc3LCAweDRiMWY1ZSwgMS4yNSkpO1xyXG5zY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGRlZGVkZSwgMSkpO1xyXG5sZXQgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGRlZmNmNiwgMC41KTtcclxubGlnaHQucG9zaXRpb24uc2V0KDIwLC01LDEwKTtcclxuc2NlbmUuYWRkKGxpZ2h0KTtcclxuXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMCk7XHJcbmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwwLDUwKTtcclxubGV0IGZydXN0cnVtID0gbmV3IFRIUkVFLkZydXN0dW0oKTtcclxuXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczp0cnVlfSk7XHJcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG5yZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCAoKT0+eyB1cGRhdGUoKTsgfSApO1xyXG5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5sZXQgc3RhcnNUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHN0YXJzSW1nKTtcclxuc3RhcnNUZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbnN0YXJzVGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5zdGFyc1RleHR1cmUucmVwZWF0LnNldCggNCwgNCApO1xyXG5cclxubGV0IHNwYWNlVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChzcGFjZUltZyk7XHJcbnNwYWNlVGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5zcGFjZVRleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuc3BhY2VUZXh0dXJlLmNlbnRlci5zZXQoMC41LCAwLjUpO1xyXG5cclxubGV0IHN0YXJNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7bWFwOiBzdGFyc1RleHR1cmUsIGFscGhhTWFwOiBzdGFyc1RleHR1cmV9KTtcclxuc3Rhck1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuc3Rhck1hdGVyaWFsLmRlcHRoVGVzdCA9IHRydWU7XHJcbnN0YXJNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcbmxldCBiZ01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHttYXA6IHNwYWNlVGV4dHVyZSwgYWxwaGFNYXA6IHNwYWNlVGV4dHVyZX0pO1xyXG5iZ01hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuYmdNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcblxyXG5sZXQgc3RhclBsYW5lID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMTAwLDEwMCwgMjUsIDI1KSwgc3Rhck1hdGVyaWFsKTtcclxuc3RhclBsYW5lLnBvc2l0aW9uLnNldCgwLCAtMTAsIDApO1xyXG5zY2VuZS5hZGQoc3RhclBsYW5lKTtcclxubGV0IGJnUGxhbmUgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgxMDAsMTAwLCAyNSwyNSksIGJnTWF0ZXJpYWwpO1xyXG5iZ1BsYW5lLnBvc2l0aW9uLnNldCgwLCAtNSwgLTE1KTtcclxuLy8gc2NlbmUuYWRkKGJnUGxhbmUpO1xyXG5cclxuY29uc3QgaW5wdXQgPSBbJycsJyddO1xyXG5jb25zdCBidWxsZXRzID0gW107XHJcbmNvbnN0IGVuZW1pZXMgPSBbXTtcclxuY29uc3QgYXN0ZXJvaWRzID0gW107XHJcbmxldCBhc3Rlcm9pZEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduQXN0ZXJvaWQsIDUwMDApO1xyXG5sZXQgZW5lbXlJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChzcGF3bkVuZW15LCAxNTAwMCk7XHJcbmxldCBlbmVteUxpbWl0ID0gMjtcclxuXHJcbmxldCBwbGF5ZXIgPSBuZXcgU2hpcChzY2VuZSk7XHJcblxyXG5sZXQgYmxvY2tSZXNldCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKCl7XHJcbiAgICBmcnVzdHJ1bS5zZXRGcm9tTWF0cml4KG5ldyBUSFJFRS5NYXRyaXg0KCkubXVsdGlwbHlNYXRyaWNlcyhjYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSkpO1xyXG4gICAgbGV0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAvLyBzcGFjZVRleHR1cmUucm90YXRpb24gKz0gMC4wMSAqIGRlbHRhVGltZTtcclxuXHJcbiAgICBmb3IobGV0IGFzdGVyb2lkIG9mIGFzdGVyb2lkcyl7XHJcbiAgICAgICAgc3dpdGNoKGFzdGVyb2lkLmFsaXZlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWQudXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIGlmKGFzdGVyb2lkLnNpemUgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXN0ZXJvaWQuc2l6ZTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3QgPSBhc3Rlcm9pZC5yb3RhdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gYXN0ZXJvaWQucG9zaXRpb24uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZU9mZnNldCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gKDAuNSArIChNYXRoLnJhbmRvbSgpICogMS4xNSkpIDogLSggMC41ICsgKE1hdGgucmFuZG9tKCkgKiAxLjE1KSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC5yb3RhdGVaKGFuZ2xlT2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC50cmFuc2xhdGVYKGFzdGVyb2lkLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnRyYW5zbGF0ZVgoLWFzdGVyb2lkLnNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnRyYW5zbGF0ZVkoYXN0ZXJvaWQuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25Bc3Rlcm9pZChhc3Rlcm9pZC5zaXplIC0gMSwgYXN0ZXJvaWQucG9zaXRpb24sIGFzdGVyb2lkLnJvdGF0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZC5yb3RhdGlvbi5zZXQocm90LngsIHJvdC55LCByb3Queik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzdGVyb2lkLnBvc2l0aW9uLnNldChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWRzLnNwbGljZShhc3Rlcm9pZHMuaW5kZXhPZihhc3Rlcm9pZCksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgZW5lbXkgb2YgZW5lbWllcyl7XHJcbiAgICAgICAgc3dpdGNoKGVuZW15LmFsaXZlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgZW5lbXkudXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlbmVteSksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgYnVsbGV0IG9mIGJ1bGxldHMpe1xyXG4gICAgICAgIHN3aXRjaChidWxsZXQuYWxpdmUpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBidWxsZXQudXBkYXRlKGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIGJ1bGxldHMuc3BsaWNlKGJ1bGxldHMuaW5kZXhPZihidWxsZXQpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihwbGF5ZXIuYWxpdmUpe1xyXG4gICAgICAgIHBsYXllci51cGRhdGUoaW5wdXQsIGRlbHRhVGltZSwgY2FtZXJhLCBmcnVzdHJ1bSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKCFibG9ja1Jlc2V0KXtcclxuXHJcbiAgICAgICAgYmxvY2tSZXNldCA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhc3Rlcm9pZEludGVydmFsKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGVuZW15SW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHJlc3RhcnQsIDMwMDApO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0KClcclxue1xyXG4gICAgd2hpbGUoYXN0ZXJvaWRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBmb3IobGV0IGEgb2YgYXN0ZXJvaWRzKXtcclxuICAgICAgICAgICAgICAgIGEuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgYXN0ZXJvaWRzLnNwbGljZShhc3Rlcm9pZHMuaW5kZXhPZihhKSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIHdoaWxlKGJ1bGxldHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYiBvZiBidWxsZXRzKXtcclxuICAgICAgICAgICAgICAgIGIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0cy5zcGxpY2UoYnVsbGV0cy5pbmRleE9mKGIpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgd2hpbGUoZW5lbWllcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIGZvcihsZXQgZSBvZiBlbmVtaWVzKXtcclxuICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGVuZW1pZXMuc3BsaWNlKGVuZW1pZXMuaW5kZXhPZihlKSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN0ZXJvaWRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChzcGF3bkFzdGVyb2lkLCA1MDAwKTtcclxuICAgICAgICBlbmVteUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduRW5lbXksIDE1MDAwKTtcclxuXHJcbiAgICAgICAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XHJcbiAgICAgICAgc2NvcmVEaXYuaW5uZXJIVE1MID0gJzAwMDAnO1xyXG5cclxuICAgICAgICBsZXQgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlmZScpO1xyXG4gICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBpY29ucyl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5ZXIgPSBuZXcgU2hpcChzY2VuZSk7XHJcblxyXG4gICAgICAgIGJsb2NrUmVzZXQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3Bhd25FbmVteSgpe1xyXG4gICAgaWYoZW5lbWllcy5sZW5ndGggPCBlbmVteUxpbWl0KXtcclxuICAgICAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkoc2NlbmUsIHBsYXllciwgYnVsbGV0cyk7XHJcbiAgICAgICAgZW5lbWllcy5wdXNoKGVuZW15KTtcclxuXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbmVteUludGVydmFsKTtcclxuICAgICAgICBlbmVteUludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHNwYXduRW5lbXksICgxNTAwMCArIE1hdGgucmFuZG9tKCkpICogMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwYXduQXN0ZXJvaWQoc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9uKXtcclxuICAgIGxldCBhc3Rlcm9pZDtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSBtYWtlTmV3VHJhbnNmb3JtKCk7XHJcbiAgICBcclxuICAgIGlmKHNpemUgIT0gbnVsbCl7IGFzdGVyb2lkID0gbmV3IEFzdGVyb2lkKHNjZW5lLCBwbGF5ZXIsIHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbik7fVxyXG4gICAgZWxzZXsgYXN0ZXJvaWQgPSBuZXcgQXN0ZXJvaWQoc2NlbmUsIHBsYXllciwgKDEgKyBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogMykgKSwgdHJhbnNmb3JtLnBvc2l0aW9uLCB0cmFuc2Zvcm0ucm90YXRpb24pO31cclxuXHJcbiAgICBhc3Rlcm9pZHMucHVzaChhc3Rlcm9pZCk7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbChhc3Rlcm9pZEludGVydmFsKTtcclxuICAgIGFzdGVyb2lkSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoc3Bhd25Bc3Rlcm9pZCwgKDQwMDAgKyBNYXRoLnJhbmRvbSgpICogMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTmV3VHJhbnNmb3JtKCl7XHJcbiAgICBsZXQgcG9zLCByb3Q7XHJcbiAgICBkb3tcclxuXHJcbiAgICAgICAgcG9zID0gKE1hdGgucmFuZG9tKCkgPj0gMC41KSA/IChuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnJhbmRvbSgpICogLTIwLCBNYXRoLnJhbmRvbSgpICogLTIwLCAwKSkgOiAobmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5yYW5kb20oKSAqIDIwLCBNYXRoLnJhbmRvbSgpICogMjAsIDApKTtcclxuICAgICAgICByb3QgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUpID8gKE1hdGgucmFuZG9tKCkgKiA2KSA6IC0oTWF0aC5yYW5kb20oKSAqIDYpO1xyXG5cclxuICAgIH13aGlsZShwb3MuZGlzdGFuY2VUbyhwbGF5ZXIucG9zaXRpb24pIDwgMTApXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3NpdGlvbjogcG9zLFxyXG4gICAgICAgIHJvdGF0aW9uOiByb3RcclxuICAgIH1cclxufVxyXG5cclxuLy9Nb3VzZSBjbGljayBldmVudCBmb3Igc2hvb3Rpbmc7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG9vdCwgZmFsc2UpO1xyXG5mdW5jdGlvbiBzaG9vdCgpe1xyXG4gICAgaWYocGxheWVyLmFsaXZlKXtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gcGxheWVyLnNob290KCk7XHJcbiAgICAgICAgYnVsbGV0cy5wdXNoKGJ1bGxldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vR2V0dGluZyBrZXlib2FyZCBpbnB1dCBmb3IgZGlyZWN0aW9uYWwgY29udHJvbHMuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdXBkYXRlSW5wdXQsIGZhbHNlKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlSW5wdXQsIGZhbHNlKTtcclxuZnVuY3Rpb24gdXBkYXRlSW5wdXQoZSl7XHJcbiAgICBsZXQgdHlwZSA9IGUudHlwZTtcclxuICAgIHN3aXRjaChlLmtleUNvZGUpe1xyXG4gICAgICAgIC8vIFdcclxuICAgICAgICBjYXNlIDg3OlxyXG4gICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2tleWRvd24nICYmIGlucHV0WzBdICE9ICdmb3J3YXJkJylcclxuICAgICAgICAgICAgICAgIGlucHV0WzBdID0gJ2ZvcndhcmQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFswXSA9PSAnZm9yd2FyZCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFswXSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBTXHJcbiAgICAgICAgY2FzZSA4MzpcclxuICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICBpZih0eXBlID09ICdrZXlkb3duJyAmJiBpbnB1dFswXSAhPSAnYmFja3dhcmQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMF0gPSAnYmFja3dhcmQnO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT0gJ2tleXVwJyAmJiBpbnB1dFswXSA9PSAnYmFja3dhcmQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMF0gPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gQVxyXG4gICAgICAgIGNhc2UgNjU6XHJcbiAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgaWYodHlwZSA9PSAna2V5ZG93bicgJiYgaW5wdXRbMV0gIT0gJ2xlZnQnKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRbMV0gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAna2V5dXAnICYmIGlucHV0WzFdID09ICdsZWZ0JylcclxuICAgICAgICAgICAgICAgIGlucHV0WzFdID0gJyc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIERcclxuICAgICAgICBjYXNlIDY4OlxyXG4gICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2tleWRvd24nICYmIGlucHV0WzFdICE9ICdyaWdodCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFsxXSA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PSAna2V5dXAnICYmIGlucHV0WzFdID09ICdyaWdodCcpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFsxXSA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLy9XaW5kb3cgcmVzaXppbmdcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplKTtcclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKXtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbn0iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=