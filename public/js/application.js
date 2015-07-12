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



////////////////// BACKGROUND AND OBJECTS
  var bgReady = false;
  var bgImage = new Image();
  bgImage.onload = function() {
    bgReady = true;
  };
  bgImage.src = "snow.jpg"

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

    snowball.x = 32 + (Math.random() * (canvas.width - 64));
    snowball.y = 32 + (Math.random() * (canvas.height - 64));

  };
////////////////// RUN THE GAME
  var then = Date.now();
  reset();
  main();

});
