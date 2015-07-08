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
  context.fillStyle = "#B2EBF2";
   // // fillRect - draws a preset rectangle onto the canvas
 // // Format ==> variable.fillRect(x, y, width, height)
 // // the fillRect will be filled with the color defined in fillStyle
// x & y are the coordinates for what part of the box do you
// want your rectangle positioned
// width, height are the actual dimensions of the rectangle you're trying to create

  context.fillRect(0,0,150,75);
};

var drawLine = function() {
  // moveTo defines the starting point of the line
  context.moveTo(0, 0);
  // lineTo defines the ending point of the line
  context.lineTo(80, 40);
  // stroke actually draws the line with the coordinates specified
  // by moveTo and lineTo
  context.stroke();
};
// END FUNCTIONS

  createBox();
  drawLine();

});

