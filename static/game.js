import { World } from "../src/naruto.js"

function initGame(){
    var game = new World(500, 500);
    game.animate();
}

initGame();

export {initGame}