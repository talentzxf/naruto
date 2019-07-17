import { World } from "../src/naruto.js"
var THREE = require("n3d-threejs")

class BilliardWorld extends World{
    constructor(width, height){
        super(width, height);
    }

    initScene(scene){
        var geometry = new THREE.BoxGeometry(1, 1, 1)
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
    }

    update(){
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
    }
}

function initGame(){
    var game = new BilliardWorld(500, 500);
    game.animate();
}

initGame();

export {initGame}