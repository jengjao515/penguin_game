$(document).ready(function() {
// Cross-browser support for requestAnimationFrame
  var w = window;
  requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
////////////////// DEFINING THE CANVAS AND DIMENSIONS
  var canvas = document.getElementById("game");
  canvas.width = 500;
  canvas.height = 500;
  // canvas.style.width = '800px';
  // canvas.style.height = '600px';
  var context = canvas.getContext("2d");

////////////////// DEFINING SPRITE OBJECTS
var sprite = function(url, pos, size, speed, frames, dir, once) {
  this.pos = pos; // the x and y coordinate in the image for this sprite
  this.size = size; // size of the sprite (just one keyframe)
  this.speed = typeof speed === 'number' ? speed : 0; // speed in frames/sec for animating
  this.frames = frames; //an array of frame indexes for animating: [0, 1, 2, 1]
  this._index = 0;
  this.url = url; // the path to the image for this sprite
  this.dir = dir || 'horizontal'; // which direction to move in the sprite map when animating: 'horizontal' (default) or 'vertical'
  this.once = once; // true to only run the animation once, defaults to false
};


////////////////// BACKGROUND AND OBJECTS
  var bgReady = false;
  var bgImage = new Image();
  bgImage.onload = function() {
    bgReady = true;
  };
  bgImage.src = "auroraback.jpg"

  var penguinReady = false;
  var penguinImage = new Image();
  penguinImage.onload = function() {
    penguinReady = true;
  };
  penguinImage.src = "penguin.png";

  var penguin = {
    speed: 256,
    x: 0,
    y: 0
  };

////////////////// MANAGING SNOWBALL MOVEMENTS
  var snowballReady = false;
  var snowballImage = new Image();
  snowballImage.onload = function() {
    snowballReady = true;
  };
   snowballImage.src = "snowball.gif";

  var snowball = {
    x: 0,
    y: 0
  };

////////////////// KEY/UPDATE FUNCTIONS
  var keysDown = {};
  addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
  }, false);

  addEventListener("keyup", function (event) {
   delete keysDown[event.keyCode];
  }, false);

  var update = function (modifier) {
    if (38 in keysDown) { // Player holding up
      penguin.y -= penguin.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
      penguin.y += penguin.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
      penguin.x -= penguin.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
      penguin.x += penguin.speed * modifier;
    }
  };
////////////////// DRAWS THE GAME ONTO CANVAS
  var render = function () {
    if (bgReady) {
      context.drawImage(bgImage, 0, 0);
    };

    if (penguinReady) {
      context.drawImage(penguinImage, penguin.x, penguin.y);
    }

    if (snowballReady) {
      context.drawImage(snowballImage, 5, 5);
  }
  };
////////////////// HOW TO LOOP THE GAME
  var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;
    requestAnimationFrame(main);
  };
////////////////// RESET THE PENGUIN'S POSITION
  var reset = function () {
    penguin.x = canvas.width / 2;
    penguin.y = canvas.height / 2;
  };
////////////////// RUN THE GAME
  var then = Date.now();
  reset();
  main();

});
