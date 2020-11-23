// Varaibles ~~~~~~~~~~~~~~~~~~~~
//canvas size
var canvasX = 600;
var canvasY = 400;

//ellipse size
var size = 3;

//Speed
var speed = 5;

//This is what holds my cvs data
var AQTable17;
var AQTable18;
var AQTable19;
var AQTable20;

//this array will hold my x and y values for each index
var arrayX17 = [];
var arrayY17 = [];

var arrayX18 = [];
var arrayY18 = [];

var arrayX19 = [];
var arrayY19 = [];

var arrayX20 = [];
var arrayY20 = [];


//this will help chnage directions of x and y
var arrayXChange17 = [];
var arrayYChange17 = [];

var arrayXChange18 = [];
var arrayYChange18 = [];

var arrayXChange19 = [];
var arrayYChange19 = [];

var arrayXChange20 = [];
var arrayYChange20 = [];

//This well help my xyStart function so its only called once
var xyStartCheck = true;

//This will hold my pm25 values
var index17;
var pm2517=[];

var index18;
var pm2518=[];

var index19;
var pm2519=[];

var index20;
var pm2520=[];
// END Varaibles ~~~~~~~~~~~~~~~~~

function preload() {
  AQTable17 = loadTable("AQTable17.csv","csv","header" );
  AQTable18 = loadTable("AQTable18.csv","csv","header" );
  AQTable19 = loadTable("AQTable19.csv","csv","header" );
  AQTable20 = loadTable("AQTable20.csv","csv","header" );
}
function setup() {
  createCanvas(canvasX, canvasY);
  
  index17 = AQTable17.getRows();
  for (let row =0; row < index17.length; row++ ){
    
    pm2517[row] = index17[row].getNum('pm25');
  }
  
  index18 = AQTable18.getRows();
  for (let row =0; row < index18.length; row++ ){
    
    pm2518[row] = index18[row].getNum('pm25');
  }
  
  index19 = AQTable19.getRows();
  for (let row =0; row < index19.length; row++ ){
    
    pm2519[row] = index19[row].getNum('pm25');
  }
  
  index20 = AQTable20.getRows();
  for (let row =0; row < index20.length; row++ ){
    
    pm2520[row] = index20[row].getNum('pm25');
  }
  
  
  background(173, 216, 230);
  

}


function draw() {
  //background(173, 216, 230)
  
  //this will draw my boarders and years
  noStroke();
  fill(173, 216, 230);
  rect(0,195,canvasX, 10);
  rect(295,0,10, canvasY);
  textSize(70);
  textAlign(CENTER);
  text('2017', 150, 100);
  text('2018', 450, 100);
  text('2019', 150, 300);
  text('2020', 450, 300);
  //this action will only be preformed once
  if (xyStartCheck === true){
    xyStart();
  }
  
  drawIndex17();
  movement17();
  
  drawIndex18();
  movement18();
  
  drawIndex19();
  movement19();
  
  drawIndex20();
  movement20();
}

//This will create random coordinates so our elipse can be drawn 
function xyStart() {
  
  //this will assign start values for my each index
  for (let row =0; row < index20.length; row++ ){
    
    //This will pick random x and y values for our index
    arrayX17[row] = random(0,300);
    arrayY17[row] = random(0,200);
    
    arrayX18[row] = random(300,canvasX);
    arrayY18[row] = random(0,200);
    
    arrayX19[row] = random(0,300);
    arrayY19[row] = random(200,canvasY);
    
    arrayX20[row] = random(300,canvasX);
    arrayY20[row] = random(200,canvasY);
    //print(arrayX[row] +" , "+ arrayY[row]);
  }
  xyStartCheck = false;
} 
// 2017 INDEXS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//this will draw and color in our ellipse
function drawIndex17() {
  
  for (let row =0; row < pm2517.length; row++ ){
    
    //print( row + ": " + pm25[row]);
   
    //This if statements will test our index to see what level they are at and color our ellipses said color
    if(pm2517[row] >= 0 && pm2517[row] <= 26) {
      fill(0,250,0);
    }
    else if(pm2517[row] >= 26 && pm2517[row] <= 50) {
      fill('green');
    }
    else if(pm2517[row] >= 51 && pm2517[row] <= 75) {
      fill('yellow');
    }
    else if(pm2517[row] >= 76 && pm2517[row] <= 100) {
      fill(255,204,0);
    }
    else if(pm2517[row] >= 101 && pm2517[row] <= 125) {
      fill(255,140,0);
    }
    else if(pm2517[row] >= 126 && pm2517[row] <= 150) {
      fill(255,69,0);
    }
    else if(pm2517[row] >= 151 && pm2517[row] <= 175) {
      fill('red');
    }
    else if(pm2517[row] >= 176 && pm2517[row] <= 200) {
      fill(151,21,0);
    }
    else if(pm2517[row] >= 201 && pm2517[row] <= 300) {
      fill('purple');
    }
    else if(pm2517[row] >= 301 ) {
      fill('brown');
    }
    ellipse(arrayX17[row],arrayY17[row], size )
  }
}

//this function will move my ellipse around
function movement17(){
  for (let row =0; row < index17.length; row++ ){
    
    //This will hcek to make sure our ellipse dont leave the border
    //This will assigment how much each ellipse moves
    if (arrayX17[row] > canvasX/2 -speed || arrayY17[row] > canvasY/2- speed){
      arrayXChange17[row] =  -speed;
      arrayYChange17[row] =  -speed;
    }
    else if (arrayX17[row] < 0+ speed || arrayY17[row] < 0+ speed){
      arrayXChange17[row] =  speed;
      arrayYChange17[row] =  speed;
    }
    else {
      arrayXChange17[row] =  round(random(-speed,speed));
      arrayYChange17[row] =  round(random(-speed,speed));
    }
    
    //this will change each x,y
    arrayX17[row] = arrayXChange17[row] + arrayX17[row];
    arrayY17[row] = arrayYChange17[row] + arrayY17[row];
    
    //print(arrayX[row] +" , "+ arrayY[row]);
  }
}
// 2017 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 2018 INDEXS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//this will draw and color in our ellipse
function drawIndex18() {
  
  for (let row =0; row < pm2518.length; row++ ){
    
    //print( row + ": " + pm25[row]);
   
    //This if statements will test our index to see what level they are at and color our ellipses said color
    if(pm2518[row] >= 0 && pm2518[row] <= 26) {
      fill(0,250,0);
    }
    else if(pm2518[row] >= 26 && pm2518[row] <= 50) {
      fill('green');
    }
    else if(pm2518[row] >= 51 && pm2518[row] <= 75) {
      fill('yellow');
    }
    else if(pm2518[row] >= 76 && pm2518[row] <= 100) {
      fill(255,204,0);
    }
    else if(pm2518[row] >= 101 && pm2518[row] <= 125) {
      fill(255,140,0);
    }
    else if(pm2518[row] >= 126 && pm2518[row] <= 150) {
      fill(255,69,0);
    }
    else if(pm2518[row] >= 151 && pm2518[row] <= 175) {
      fill('red');
    }
    else if(pm2518[row] >= 176 && pm2518[row] <= 200) {
      fill(151,21,0);
    }
    else if(pm2518[row] >= 201 && pm2518[row] <= 300) {
      fill('purple');
    }
    else if(pm2518[row] >= 301 ) {
      fill('brown');
    }
    ellipse(arrayX18[row],arrayY18[row], size )
  }
}

//this function will move my ellipse around
function movement18(){
  for (let row =0; row < index18.length; row++ ){
    
    //This will hcek to make sure our ellipse dont leave the border
    //This will assigment how much each ellipse moves
    if (arrayX18[row] > canvasX -speed || arrayY18[row] > canvasY/2- speed){
      arrayXChange18[row] =  -speed;
      arrayYChange18[row] =  -speed;
    }
    else if (arrayX18[row] < canvasX/2+ speed || arrayY18[row] < 0+ speed){
      arrayXChange18[row] =  speed;
      arrayYChange18[row] =  speed;
    }
    else {
      arrayXChange18[row] =  round(random(-speed,speed));
      arrayYChange18[row] =  round(random(-speed,speed));
    }
    
    //this will change each x,y
    arrayX18[row] = arrayXChange18[row] + arrayX18[row];
    arrayY18[row] = arrayYChange18[row] + arrayY18[row];
    
    //print(arrayX[row] +" , "+ arrayY[row]);
  }
}
// 2018 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 2019 INDEXS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//this will draw and color in our ellipse
function drawIndex19() {
  
  for (let row =0; row < pm2519.length; row++ ){
    
    //print( row + ": " + pm25[row]);
   
    //This if statements will test our index to see what level they are at and color our ellipses said color
    if(pm2519[row] >= 0 && pm2519[row] <= 26) {
      fill(0,250,0);
    }
    else if(pm2519[row] >= 26 && pm2519[row] <= 50) {
      fill('green');
    }
    else if(pm2519[row] >= 51 && pm2519[row] <= 75) {
      fill('yellow');
    }
    else if(pm2519[row] >= 76 && pm2519[row] <= 100) {
      fill(255,204,0);
    }
    else if(pm2519[row] >= 101 && pm2519[row] <= 125) {
      fill(255,140,0);
    }
    else if(pm2519[row] >= 126 && pm2519[row] <= 150) {
      fill(255,69,0);
    }
    else if(pm2519[row] >= 151 && pm2519[row] <= 175) {
      fill('red');
    }
    else if(pm2519[row] >= 176 && pm2519[row] <= 200) {
      fill(151,21,0);
    }
    else if(pm2519[row] >= 201 && pm2519[row] <= 300) {
      fill('purple');
    }
    else if(pm2519[row] >= 301 ) {
      fill('brown');
    }
    
    ellipse(arrayX19[row],arrayY19[row], size )
  }
}

//this function will move my ellipse around
function movement19(){
  for (let row =0; row < index19.length; row++ ){
    
    //This will hcek to make sure our ellipse dont leave the border
    //This will assigment how much each ellipse moves
    if (arrayX19[row] > 300 -speed || arrayY19[row] > canvasY- speed){
      arrayXChange19[row] =  -speed;
      arrayYChange19[row] =  -speed;
    }
    else if (arrayX19[row] < 0+ speed || arrayY19[row] < 200+ speed){
      arrayXChange19[row] =  speed;
      arrayYChange19[row] =  speed;
    }
    else {
      arrayXChange19[row] =  round(random(-speed,speed));
      arrayYChange19[row] =  round(random(-speed,speed));
    }
    
    //this will change each x,y
    arrayX19[row] = arrayXChange19[row] + arrayX19[row];
    arrayY19[row] = arrayYChange19[row] + arrayY19[row];
    
    //print(arrayX[row] +" , "+ arrayY[row]);
  }
}
// 2019 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 2020 INDEXS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//this will draw and color in our ellipse
function drawIndex20() {
  
  for (let row =0; row < pm2520.length; row++ ){
    
    //print( row + ": " + pm25[row]);
   
    //This if statements will test our index to see what level they are at and color our ellipses said color
    if(pm2520[row] >= 0 && pm2520[row] <= 26) {
      fill(0,250,0);//light green
    }
    else if(pm2520[row] >= 26 && pm2520[row] <= 50) {
      fill('green');
    }
    else if(pm2520[row] >= 51 && pm2520[row] <= 75) {
      fill('yellow');
    }
    else if(pm2520[row] >= 76 && pm2520[row] <= 100) {
      fill(255,204,0);//light orange
    }
    else if(pm2520[row] >= 101 && pm2520[row] <= 125) {
      fill(255,140,0);//oragne
    }
    else if(pm2520[row] >= 126 && pm2520[row] <= 150) {
      fill(255,69,0);//red oragne
    }
    else if(pm2520[row] >= 151 && pm2520[row] <= 175) {
      fill('red');
    }
    else if(pm2520[row] >= 176 && pm2520[row] <= 200) {
      fill(151,21,0);//dark red
    }
    else if(pm2520[row] >= 201 && pm2520[row] <= 300) {
      fill('purple');
    }
    else if(pm2520[row] >= 301 ) {
      fill('brown');
    }
    ellipse(arrayX20[row],arrayY20[row], size )
  }
}

//this function will move my ellipse around
function movement20(){
  for (let row =0; row < index20.length; row++ ){
    
    //This will hcek to make sure our ellipse dont leave the border
    //This will assigment how much each ellipse moves
    if (arrayX20[row] > canvasX-speed || arrayY20[row] > canvasY- speed){
      arrayXChange20[row] =  -speed;
      arrayYChange20[row] =  -speed;
    }
    else if (arrayX20[row] < 300+ speed || arrayY20[row] < 200+ speed){
      arrayXChange20[row] =  speed;
      arrayYChange20[row] =  speed;
    }
    else {
      arrayXChange20[row] =  round(random(-speed,speed));
      arrayYChange20[row] =  round(random(-speed,speed));
    }
    
    //this will change each x,y
    arrayX20[row] = arrayXChange20[row] + arrayX20[row];
    arrayY20[row] = arrayYChange20[row] + arrayY20[row];
    
    //print(arrayX[row] +" , "+ arrayY[row]);
  }
}
// 2020 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^