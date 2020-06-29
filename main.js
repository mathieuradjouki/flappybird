var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//load images

var goku = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

goku.src ="images/goku.png";
bg.src ="images/background.jpg";
fg.src ="images/footground.png";
pipeNorth.src ="images/pipeNorth.png";
pipeSouth.src ="images/pipeSouth.png";

// variables

var gap = 150;
var constant = pipeNorth.height+gap;
var bX = 10;
var bY = 350;
var gravity = 1;

// When key push

document.addEventListener("keydown",moveUp);

function moveUp(){
  bY -= 50;
}


// pipe coordinates

//draw images

function draw(){
  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeNorth,300,0);
  ctx.drawImage(pipeSouth,300,0+constant);
  ctx.drawImage(fg,-20,canvas.height - fg.height,700,fg.height);
  ctx.drawImage(goku,bX,bY,50,50);

  bY += gravity;

  requestAnimationFrame(draw);
}

draw();
