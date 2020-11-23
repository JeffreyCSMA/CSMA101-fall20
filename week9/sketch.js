// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 600;
var canvasY = 400;

//Amo
var amoArry =[];

//Bullet count
//var bulletArry= [1,1,1,1,1];
var bulletCount = 5;
//var bulletSpace = 6;


// END Varaibles ~~~~~~~~~~~~~~~~~

function setup() {
  createCanvas(canvasX, canvasY);
  frameRate(1);
}

function draw() {
  background('green');
  
  //stroke();
  //This draws our toy
  lazerGun();
  
  //Amo
  Amo();
  
  //pushing S key will fire gun OR r will reload the gun

}

function keyPressed() {
  //shoot gun
  if(key === 's'){
    if(bulletCount > 0) { 
      //print("s pressed frame " + frameCount);
      shooting();
      print("Bullet Count = " + bulletCount);
    } else {
      reloading();
    }
    }
  if(key === 'r'){
     reloading();
  }
}
//This will shoot the lazer gun
function shooting(){
  Bullet();
  //Amo();
  bulletCount--;
}

//this will reload our lazer gun
function reloading(){
  print("Reloading...");
  bulletCount = 5;
  print("Bullet Count = " + bulletCount);
  var count = 5 - bulletCount;
  /*for (let i=0; i == 5; i++){
    bulletCount++;
    
  }*/
}

//This is our lazer gun
function lazerGun(){
  //Lazer Gun~~~~~~~~~~~~~
  //barrel
  fill("black");
  rect(100,200,95,20);
  fill("grey");
  let spacing = 5;
  for (let i=0; i <= 8; i++){
    rect(100 + spacing ,205, 5,10);
    spacing = spacing + 10;
  }
  fill("black");
  rect(110, 198, 75, 2);
  rect(160,220,10,20);
  
  //muzzle 
  ellipse(195,210,10);
  
  //body
  rect(50,200,50,25);
  rect(55,198,4);
  rect (80,225,18, 30);
  ellipse(60, 225, 15);
  rect(50,225,10,20);
  fill("grey");
  rect(55,205, 40, 5);
  rect(55,210, 40, 5);
  
  //STOCK
  fill("black");
  rect(10,205, 40,15);
  // end Lazer Gun~~~~~~~~
}
  
function Amo(){
  let spacing = 0;
  //var countAmo = 5 - bulletCount;
  for (let i =0;i<bulletCount;i++){
    fill("green")
    amoArry[i] = rect(82,225+ spacing,14,4);
    spacing = spacing + 6;
  //bulletCount = 5;
  }
}

function Bullet() {
  
  var bulletX = 195;
  var bulletSpeed = 1;
  
  fill("red");
  noStroke();
  while (bulletX < canvasX){
    bulletX =bulletX + bulletSpeed;
    rect(bulletX,205,30,10) 
  }
  //roke();
  
}