"use strict";

var Game = {
    canvas : undefined,
    ct : undefined,
    pokeSprite : undefined,
    pokePosition : { x : 0, y : 50}
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.ct = Game.canvas.getContext("2d");
    Game.pokeSprite = new Image();
    Game.pokeSprite.src = "images/Artwork092_RFVF.png";
    window.setTimeout(Game.mainLoop, 500);
};

document.addEventListener( 'DOMContentLoaded', Game.start);

Game.clearCanvas = function () {
    Game.ct.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.drawImage = function (sprite, position) {
    Game.ct.save();
    Game.ct.translate(position.x, position.y);
    Game.ct.drawImage(sprite, 0, 0, sprite.width, sprite.height,
        0, 0, sprite.width, sprite.height);
    Game.ct.restore();
};

Game.mainLoop = function() {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
    var d = new Date();
    Game.pokePosition.x = d.getTime() * 0.3 % Game.canvas.width;
};

Game.draw = function () {

    Game.drawImage(Game.pokeSprite, Game.pokePosition);
};