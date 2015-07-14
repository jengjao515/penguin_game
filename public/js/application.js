$(document).ready(function() {
// Cross-browser support for requestAnimationFrame ============

  var w = window;
  requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// DEFINING THE CANVAS AND DIMENSIONS =========================

  var canvas = document.getElementById("game");
  canvas.width = 500;
  canvas.height = 500;
  var context = canvas.getContext("2d");


// BACKGROUND AND OBJECTS =====================================
var GameObject = function(){ 
  this.ready = false;
  this.x = 0;
  this.y = 0;
};

GameObject.prototype.image = function(imageSrc) { 
  this.image = new Image();
  this.image.src = imageSrc;
};

GameObject.prototype.onload = function() { 
  this.ready = true;
};

var background = new GameObject();
background.image("snow.jpg");

var penguin = new GameObject();
penguin.image("penguin.png");
penguin.speed = 500;

var snowball = new GameObject();
snowball.image("snowball.gif");

var objects = [background, penguin, snowball];
for(var i=0; i < objects.length; i++) { 
  objects[i].onload();
};

////////////////// KEY/UPDATE FUNCTIONS
  var keysDown = {};
  addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
  }, false);

  addEventListener("keyup", function (event) {
   delete keysDown[event.keyCode];
  }, false);

  // var update = function (modifier) {
  //   if (38 in keysDown) { // Player holding up
  //     penguin.y -= penguin.speed * modifier;
  //   }
  //   if (40 in keysDown) { // Player holding down
  //     penguin.y += penguin.speed * modifier;
  //   }
  //   if (37 in keysDown) { // Player holding left
  //     penguin.x -= penguin.speed * modifier;
  //   }
  //   if (39 in keysDown) { // Player holding right
  //     penguin.x += penguin.speed * modifier;
  //   }

  //   if (
  //     penguin.x <= (snowball.x + 32)
  //     && snowball.x <= (penguin.x + 32)
  //     && penguin.y <= (snowball.y + 32)
  //     && snowball.y <= (penguin.y + 32)
  //   ) {
  //       reset();
  //     }

  // };
////////////////// DRAWS THE GAME ONTO CANVAS
  var render = function () {
    if (background.ready) {
      context.drawImage(background.image, 0, 0);
    };

    if (penguin.ready) {
      context.drawImage(penguin.image, 0, 0);
    };

    if (snowball.ready) {
      context.drawImage(snowballImage, snowball.x, snowball.y);
    };
  };
////////////////// HOW TO LOOP THE GAME
  var main = function () {
    var now = Date.now();
    var delta = now - then;

    // update(delta / 1000);
    render();

    then = now;
    requestAnimationFrame(main);
  };
////////////////// RESET THE PENGUIN'S POSITION
  var reset = function () {
    // penguin.x = canvas.width / 2;
    // penguin.y = canvas.height / 2;

    // snowball.x = 32 + (Math.random() * (canvas.width - 64));
    // snowball.y = 32 + (Math.random() * (canvas.height - 64));

  };
////////////////// RUN THE GAME
  var then = Date.now();
  reset();
  main();

});
