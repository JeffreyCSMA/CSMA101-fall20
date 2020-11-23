// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 400;
var canvasY = 400;

//Direction of our moving circle/ also where our circle starts
var directionX = canvasX/2; // its devided by 2 to always be centered in the middle
var directionY = canvasY/2;

//The direction of the circles
var directionChangeX = 1;
var directionChangeY = 1;
// END Varaibles ~~~~~~~~~~~~~~~~~

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  
  //Border Check and direction change
  if (directionX > canvasX || directionY > canvasY ) {
    directionChangeX = round(random(-20,0));
    directionChangeY = round(random(-20,0));
  }
  if (directionX < 0 || directionY < 0) {
    directionChangeX = round(random(0,20));
    directionChangeY = round(random(0,20));
  }
  
  //This will move our ball
  directionX = directionX + directionChangeX;
  directionY = directionY + directionChangeY;
  
  //Our circle
  fill (random(0,250), random(0,250), random(0,250))
  ellipse(directionX, directionY, 50, 50);
}