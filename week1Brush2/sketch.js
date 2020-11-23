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
    //left triangle
    //triangle(0, 0, 0, canvasY, mouseX, mouseY);
    if(mouseY < 200){
      fill(0,0,250);
    }
    if(mouseY > 200){
      fill(250,0,0);
    }
    //top triangle
    triangle(0, 0, canvasX, 0, mouseX, mouseY);
    
    //right triangle
    //triangle(canvasX, 0, canvasX, canvasY, mouseX, mouseY);
    if(mouseY < 200){
      fill(250,0,0);
    }
    if(mouseY > 200){
      fill(0,0,250);
    }
    //bottom triangle
    triangle(0, canvasY, canvasX, canvasY, mouseX, mouseY);
  }
}