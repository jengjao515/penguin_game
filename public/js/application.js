$(document).ready(function() {
// CROSS-BROWSER SUPPORT FOR requestAnimationFrame ============

  var w = window;
  requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// CANVAS =====================================================

  var canvas = document.getElementById("game");
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.height = '300px';
  var context = canvas.getContext("2d");

// GAME OBJECTS ===============================================

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

  GameObject.prototype.render = function(){ 
    if (this.ready) { 
      context.drawImage(this.image, this.x, this.y);
    }
  };

  var background = new GameObject();
  background.image("snow.jpg");

  var penguin = new GameObject();
  penguin.image("penguin.png");
  penguin.speed = 200;

  var snowball = new GameObject();
  snowball.image("snowball.gif");

  var objects = [background, penguin, snowball];

  for(var i=0; i < objects.length; i++) { 
  objects[i].onload();
  };

// KEY FUNCTIONS ==============================================

  var keysDown = {};
    addEventListener("keydown", function (event) {
      keysDown[event.keyCode] = true;
    }, false);

    addEventListener("keyup", function (event) {
      delete keysDown[event.keyCode];
    }, false);

// BIND PENGUIN TO KEYS =======================================

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

// COLLISION DETECTION =======================================

    if (
      penguin.x <= (snowball.x + 32)
      && snowball.x <= (penguin.x + 32)
      && penguin.y <= (snowball.y + 32)
      && snowball.y <= (penguin.y + 32)
      ) {
        newSnowball();
      }
  };

// CREATE NEW SNOWBALL ======================================

  var newSnowball = function() {
    snowball.x = 32 + (Math.random() * (canvas.width - 64));
    snowball.y = 32 + (Math.random() * (canvas.height - 64));
  };

// NEW GAME, RESET PENGUIN ==================================
  
  var reset = function() {
    penguin.x = canvas.width / 2;
    penguin.y = canvas.height / 2;
    newSnowball();
  };

// LOOP GAME ================================================

  var main = function() {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);

    for(var i=0; i < objects.length; i++) { 
      objects[i].render();
    };

    then = now;
    requestAnimationFrame(main);
  };

  var then = Date.now();
  reset();
  main();

});