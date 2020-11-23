// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 400;
var canvasY = 400;

// END Varaibles ~~~~~~~~~~~~~~~~~

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  if (mouseIsPressed) {
    //left
    bezier(0, 0, mouseX, canvasX / 4, canvasY / 4, mouseY,0, canvasY);
    
    //right
    bezier(canvasX, 0, mouseX, canvasX / 4, canvasY / 4, mouseY,canvasX, canvasY);
  }
  
}

