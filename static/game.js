import {World,ThreeSphere,Point3d} from "../src/naruto.js"

class BilliardWorld extends World {
    constructor(width, height) {
        super(width, height);
    }

    initScene(scene) {
        this.sphere = new ThreeSphere(scene, new Point3d([0,0,0]), 1 )
    }

    update() {
        this.sphere.getRotation().x += 0.01
        this.sphere.getRotation().y += 0.01

        this.sphere.getPosition().x = this.sphere.getPosition().x + 0.1 > 10?0:this.sphere.getPosition().x + 0.1
    }
}

function initGame() {
    var game = new BilliardWorld(500, 500);
    game.animate();
}

initGame();

export {initGame}