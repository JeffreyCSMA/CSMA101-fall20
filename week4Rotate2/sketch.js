
function setup() {
  createCanvas(400, 400);
  //createLoop({duration:3, gif: {download: true}});
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
      bezier(x, y, x+50, y+50, -x,-y, 25, 25);    // step 3: draw
    }
  }
  pop();                    // restore the drawing settings (so that changes between push and pop don't affect anything afterwards)
}