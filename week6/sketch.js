// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 400;
var canvasY = 400;

//earases circles
var deleteCircle;
//draws circle
var drawCircle;

//size of circle
var size = 10;

//color of Image
var imageFill;
// END Varaibles ~~~~~~~~~~~~~~~~~

function preload() {
  img1 = loadImage("sunset.jpg");
}

function setup() {
  createCanvas(img1.width, img1.height);
  frameRate(20);
  deleteCircle = 0;
  drawCircle = 200;
}

function draw() {
  background(0);


  for (var i=deleteCircle; i < drawCircle; i++) {
    var x = size + i * size * 1.666;  // calculate x not taking width into account
    var y = size + floor(x/width) * size * 1.666;  // see how many times x is outside of the canvas, and modify y instead
    x = x % width;  // modify x to no longer be outside the canvas (if it is)
    
    //This will color the circle basted of the location of color in the image
    imageFill = img1.get(x, y);
    fill(imageFill);
    
    ellipse(x, y, size, size);
  }

  drawCircle = drawCircle + 1;
  
  deleteCircle = deleteCircle +1;

}