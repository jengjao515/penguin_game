$(document).ready(function() {
  var canvas = document.getElementById("game");
  canvas.width = 800;
  canvas.height = 600;
  // canvas.style.width = '800px';
  // canvas.style.height = '600px';
  var context = canvas.getContext("2d");

// defines the sprite object properties
  var sprite = function(options) {
    var that = {};
    that.context = options.context;
    that.width   = options.width;
    that.height  = options.height;
    that.image   = options.image;

    that.render = function () {
      that.context.drawImage(
        that.image, //source image object
        0, // frame index times frames width, source x
        0, // 0 -- source y
        that.width, // frame width
        that.height, // frame height
        0, // 0 -- destination x
        0, // 0 -- destination y
        that.width, // destination width
        that.height); // destination height
    };
    return that;
};

// http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
var penguinImage = new Image();
penguinImage.src = "penguin_sheet.png";
var penguin = sprite({
  context: context,
  width: 100,
  height: 100,
  image: penguinImage
});
  penguin.render();
});












// penguinImage.onload = function() {
//   penguinReady = true;
// };



// var penguin = {
//   speed: 400, // movement in pixels per second
//   x: 0, // canvas functions in coordinates when placing objects, not pixels
//   y: 0
// }



////////// PLAYER MOVES PENGUIN VIA THIS //////////
// var keysDown = {};
// addEventListener("keydown", function(event) {
//   keysDown[event.keyCode] = true;
// }, false);

// addEventListener("keyup", function(event){
//   delete keysDown[event.keyCode];
// }, false);

///////// Checking for what keys player is pressing ////
// var update = function(modifier) {
//   if (38 in keysDown) {
//     penguin.y -= penguin.speed * modifier;
//   }
//   if (40 in keysDown) {
//     penguin.y += penguin.speed * modifier;
//   }
//   if (37 in keysDown) {
//     penguin.x -= penguin.speed * modifier;
//   }
//   if (39 in keysDown) {
//     penguin.x += penguin.speed * modifier;
//   }
// };
// var penguinReady = false;
/////// HOW TO RESET GAME ///////
// var reset = function() {
//   penguin.x = canvas.width / 2;
//   penguin.y = canvas.width / 2;
// };

//////////// JS drawing images onto the Canvas /////
// var render = function() {
//   // if (backgroundReady) {
//   //   context.drawImage(backgroundImage, 0, 0);
//   // };
//   // if (penguinReady) {
//   //   context.drawImage(penguinImage, penguin.x, penguin.y);
//   // };
// };

// The main game loop
// var main = function () {
//   var now = Date.now();
//   var delta = now - then;

//   update(delta / 1000);
//   render();

//   then = now;

//   // Request to do this again ASAP
//   requestAnimationFrame(main);
// };

// var w = window;
// requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// var then = Date.now();
// reset();
// main();

///////////// CANVAS BACKGROUND //////////
// var backgroundReady = false;
// var backgroundImage = new Image();
// backgroundImage.onload = function() {
//   backgroundReady = true;
// };
// backgroundImage.src = "../auroraback.jpg";
