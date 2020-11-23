//INSTRUCTION
//Click Mouse will spawn a ball that chase
// pressing and holding any keyboard key will pause the balls
//Letting go they will continue.
//Pressing 'c' key will clear the trail od lines the balls have made

var x = [];
var y = [];
var speed = [];
var colorRandom =[]; 

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(220);

  
  for (var i=0; i < x.length; i=i+1) {
    
    colorRandom.push(color (random(0,250),random(0,250),random(0,250)));
    fill(colorRandom[i]);
    ellipse(x[i], y[i], 40, 40);

    var dx = mouseX-x[i];
    var dy = mouseY-y[i];
    
    var dist = abs(dx)+abs(dy);
    
    if (dist > 0) {
      dx = dx/dist * speed[i];
      dy = dy/dist * speed[i];
    }
      
    x[i] = x[i] + dx;
    y[i] = y[i] + dy;
  }
}

function mouseClicked() {
  print("mouseClicked frame " + frameCount);
  x.push(mouseX);
  y.push(mouseY);
  speed.push(random(2, 10));
}

function keyPressed() {
  if(key === 'c'){
    clear();
  }
  noLoop();
}

function keyReleased() {
  loop();
}