$(document).ready(function() {
  var canvas = document.getElementById("game");
  canvas.width = 800;
  canvas.height = 600;
  // canvas.style.width = '800px';
  // canvas.style.height = '600px';
  var context = canvas.getContext("2d");

///////////// CANVAS BACKGROUND //////////
// var backgroundReady = false;
// var backgroundImage = new Image();
// backgroundImage.onload = function() {
//   backgroundReady = true;
// };
// backgroundImage.src = "../auroraback.jpg";

///////////// PENGUIN CODE ////////////
var penguinReady = false;
var penguinImage = new Image();
penguinImage.onload = function() {
  penguinReady = true;
};

penguinImage.src = "penguin.png";

var penguin = {
  speed: 400, // movement in pixels per second
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

///////// Checking for what keys player is pressing ////
var update = function(modifier) {
  if (38 in keysDown) {
    penguin.y -= penguin.speed * modifier;
  }
  if (40 in keysDown) {
    penguin.y += penguin.speed * modifier;
  }
  if (37 in keysDown) {
    penguin.x -= penguin.speed * modifier;
  }
  if (39 in keysDown) {
    penguin.x += penguin.speed * modifier;
  }
};

/////// HOW TO RESET GAME ///////
var reset = function() {
  penguin.x = canvas.width / 2;
  penguin.y = canvas.width / 2;
};

//////////// JS drawing images onto the Canvas /////
var render = function() {
  // if (backgroundReady) {
  //   context.drawImage(backgroundImage, 0, 0);
  // };
  if (penguinReady) {
    context.drawImage(penguinImage, penguin.x, penguin.y);
  };
};

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();

});
