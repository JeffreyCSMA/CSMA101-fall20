// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 400;
var canvasY = 400;

//Start of each circle
var startX = 0;      
var startX2 = 0; 
var startX3 = 0; 
var startX4 = 0;
var startX5 = 0; 
var startX6 = 0; 
var startX7 = 0; 
var startX8 = 0; 
 
var startY = 25;

//Speed of circles
var speed = 1;

// END Varaibles ~~~~~~~~~~~~~~~~~

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  

  
  //Speed of circles 
  //Cricle 1
  startX = startX + speed;
  //Cricle 2
  startX2 = startX2 + speed *2;
  //Cricle 3
  startX3 = startX3 + speed *3;
  //Cricle 4
  startX4 = startX4 + speed *4;
  //Cricle 5
  startX5 = startX5 + speed *5;
  //Cricle 6
  startX6 = startX6 + speed *6;
  //Cricle 7
  startX7 = startX7 + speed *7;
  //Cricle 8
  startX8 = startX8 + speed *8;

  //Loop around 
  //circle 1
  if (startX > canvasX) {
    startX = 0;
  }
  //circle 2
  if (startX2 > canvasX) {
    startX2 = 0;
  }
  //circle 3
  if (startX3 > canvasX) {
    startX3 = 0;
  }
  //circle 4 
  if (startX4 > canvasX) {
    startX4 = 0;
  }
  //circle 5
  if (startX5 > canvasX) {
    startX5 = 0;
  }
  //circle 6
  if (startX6 > canvasX) {
    startX6 = 0;
  }
  //circle 7
  if (startX7 > canvasX) {
    startX7 = 0;
  }
  //circle 8
  if (startX8 > canvasX) {
    startX8 = 0;
  }

  
  //Ellipse 1
  fill (250,250,250);
  ellipse(startX, startY, 50, 50);
  
  //Ellipse 2
  fill (250,0,0);
  ellipse(startX2, startY + 50, 50, 50);
  
  //Ellipse 3
  fill (255,165,0);
  ellipse(startX3, startY + 100, 50, 50);
  
  //Ellipse 4
  fill (250,250,0);
  ellipse(startX4, startY + 150, 50, 50);
  
  //Ellipse 5
  fill (0,250,0);
  ellipse(startX5, startY + 200, 50, 50);
  
  //Ellipse 6
  fill (0,0,250);
  ellipse(startX6, startY + 250, 50, 50);
  
  //Ellipse 7
  fill (0,0,169);
  ellipse(startX7, startY + 300, 50, 50);
  
  //Ellipse 8
  fill (128,0,128);
  ellipse(startX8, startY + 350, 50, 50);
  
}