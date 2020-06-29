var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//load images

var goku = new Image();
var background = new Image();
var footbackground = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

goku.src ="images/goku.png";
background.src ="images/background.jpg";
footbackground.src ="images/footbackground.png";
pipeNorth.src ="images/pipeNorth.png";
pipeSouth.src ="images/pipeSouth.png";

//draw images

function draw(){
  ctx.drawImage(background,0,0);
  ctx.drawImage(goku,10,350,50,50);
  ctx.drawImage(pipeNorth,100,0);
  ctx.drawImage(footbackground,0,0);

}

draw();
