import {World,ThreeBall} from "../src/naruto.js"

class BilliardWorld extends World {
    constructor(width, height) {
        super(width, height);
    }

    initScene(scene) {
        this.ball = new ThreeBall(scene, [-20,20,0], 1 )
        this.ball.setSpeed([5.0,0,0])
        this.ball.addForce([0,-9.8,0])


        this.ball2 = new ThreeBall(scene, [20,20,0], 1 )
        this.ball2.setSpeed([-10.0,0,0])
        this.ball2.addForce([0,-9.8,0])
    }

    update(dt) {
        this.ball.update(dt)
        this.ball2.update(dt)
    }
}

function initGame() {
    var game = new BilliardWorld(500, 500);
    game.animate();
}

initGame();

export {initGame}