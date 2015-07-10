$(document).ready(function() {
  var canvas = document.getElementById("games");
  var context = canvas.getContext("2d");

////////////////////// DEFINE FUNCTION STEPS FOR DRAWING HERE
///////////// CANVAS BACKGROUND //////////
var backgroundReady = false;
var backgroundImage = new Image();
backgroundImage.onload = function() {
  backgroundReady = true;
};
backgroundImage.src = "../auroraback.jpg";


////////////////////////////////////// END FUNCTIONS




//////////////////////////////// NOTES //////////////////////

// var createBox = function() {
//  // What color are you drawing with the Canvas?
//  // // the fillStyle property can be a CSS color, gradient, or pattern
//  // // the default-style is black
//  // // Format ==> variable.fillStyle = 'hextag'
//   context.fillStyle = "#B2EBF2";
//    // // fillRect - draws a preset rectangle onto the canvas
//  // // Format ==> variable.fillRect(x, y, width, height)
//  // // the fillRect will be filled with the color defined in fillStyle
// // x & y are the coordinates for what part of the box do you
// // want your rectangle positioned
// // width, height are the actual dimensions of the rectangle you're trying to create

//   context.fillRect(0,0,150,75);
// };

// var drawLine = function() {
//   // moveTo defines the starting point of the line
//   context.moveTo(0, 0);
//   // lineTo defines the ending point of the line
//   context.lineTo(80, 40);
//   // stroke actually draws the line with the coordinates specified
//   // by moveTo and lineTo
//   context.strokeStyle="#009688";
//   context.stroke();
// };

// var drawCircle = function() {
//   // This method initializes the circle
//   context.beginPath();
//   // beginPath() seperates lines from each other
//   // context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
//   // first two numbers are the coordinates
//   context.arc(95,50,40,0,2*Math.PI);
//   context.stroke();
// };

// var createHalfGradient = function() {
//   // createLinearGradient(x,y,x1,y1)
//   var grid = context.createLinearGradient(0, 0, 200, 0);
//   // addColorStop specifies where along the gradient the colors
//   // should start and stop, the integer can only be between 0 and 1
//   grid.addColorStop(0, '#FFA000');
//   grid.addColorStop(1, '#FFECB3');

//   context.fillStyle = grid;
//   context.fillRect(80, 80, 150, 80);
// };

// var createCircleGradient = function() {
//   // createRadialGradient(x,y,r,x1,y1,r1)
//   var grid = context.createRadialGradient(75,50,5,90,60,100);

//   grid.addColorStop(0, '#FFA000');
//   grid.addColorStop(1, '#FFECB3');

//   context.fillStyle = grid;
//   context.fillRect(10,10,150,80);
// };

// var showFont = function() {
//   context.font = "10px Helvetica";
//   // fillText ==> 'Fills the specified text with color'
//   context.fillText("Pantheon", 10, 10);
// };
