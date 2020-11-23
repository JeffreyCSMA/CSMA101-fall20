function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) 
  { 

    //circle
    if(mouseX > 200) {
      fill(random(0,255),random(0, 255),random(0, 255));
    }
    if(mouseX < 200) {
      fill(250,0,0);
    }
    ellipse(mouseX , mouseY , 20,20);
    
    //Rectangle
    if(mouseX < 200) {
      fill(random(0,255),random(0, 255),random(0, 255));
    }
    if(mouseX > 200) {
      fill(0,0,250);
    }
    rect(mouseX, mouseY, 20,20);
  }
  
}