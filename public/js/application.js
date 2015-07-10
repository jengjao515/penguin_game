$(document).ready(function() {
  var canvas = document.getElementById("game");
  var context = canvas.getContext("2d");

///////////// CANVAS BACKGROUND //////////
var backgroundReady = false;
var backgroundImage = new Image();
backgroundImage.onload = function() {
  backgroundReady = true;
};
backgroundImage.src = "../auroraback.jpg";

///////////// PENGUIN CODE ////////////
var penguinReady = false;
var penguinImage = new Image();
penguinImage.onload = function() {
  penguinReady = true;
};

penguinImage.src = "../penguin.png";

var penguin = {
  speed: 256, // movement in pixels per second
  x: 0, // canvas functions in coordinates when placing objects, not pixels
  y: 0
}

////////// PLAYER MOVES PENGUIN VIA THIS //////////
var keysDown = {};
addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
}, false);

addEventListener("keyup", function(event){
  delete keysDown[event.keyCode];
}, false);

//////////// JS drawing images onto the Canvas /////
var render = function() {
  if (backgroundReady) {
    context.drawImage(backgroundImage, 0, 0);
  };
  if (penguinReady) {
    context.drawImage(penguinImage, penguin.x, penguin.y);
  };
};

});
