// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 400;
var canvasY = 400;

// END Varaibles ~~~~~~~~~~~~~~~~~

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  background(255);

  pattern(0);
  pattern(frameCount/5);
}

function pattern(angle) {
  push();                   // make a copy of the current drawing "settings" (transformations etc)
  fill(0);
  translate(200, 200);      // step 1: move the coordinate origin
  rotate(radians(angle));   // step 2: rotate the coordinate grid
  for (var x=-300; x < 300; x=x+40) {
    for (var y=-300; y < 300; y=y+40) {
      triangle(x, y,10, 30);    // step 3: draw
    }
  }
  pop();                    // restore the drawing settings (so that changes between push and pop don't affect anything afterwards)
}
