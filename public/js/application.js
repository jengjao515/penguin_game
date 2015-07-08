$(document).ready(function() {
 // Step One: Bind to the canvas element
  var canvas = document.getElementById("testcanvas");
// // Step Two: Create what will draw on the canvas ( the drawing object)
 // // You will draw in 2D
  var context = canvas.getContext("2d");


// DEFINE FUNCTION STEPS FOR DRAWING HERE
var createBox = function() {
 // What color are you drawing with the Canvas?
 // // the fillStyle property can be a CSS color, gradient, or pattern
 // // the default-style is black
 // // Format ==> variable.fillStyle = 'hextag'
  context.fillStyle = "#FF0000";
   // // fillRect - draws a preset rectangle onto the canvas
 // // Format ==> variable.fillRect(x, y, width, height)
 // // the fillRect will be filled with the color defined in fillStyle


  context.fillRect(0,0,150,75);
};
// END FUNCTIONS

  createBox();

});

