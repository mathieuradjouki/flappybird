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
var gravity = 1.5;
var score = 0;

//audio file

// When key push

document.addEventListener("keydown",moveUp);

function moveUp(){
  bY -= 50;
}

// pipe coordinates

var pipe = [];
pipe[0] = {
  x : canvas.width,
  y : 0
};
//draw images

function draw(){

  ctx.drawImage(bg,0,0);

  for(var i = 0; i < pipe.length; i++){

  ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
  ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
  pipe[i].x--;
  if( pipe[i].x == 200 ){
      pipe.push({
        x : canvas.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
      });
  }
//detect colision
  if (bX + goku.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+goku.height >= pipe[i].y+constant) || bY + goku.height >= canvas.height - fg.height){

  location.reload();
  }
  if(pipe[i].x == 1){
    score++;
  }
}
  ctx.drawImage(fg,-20,canvas.height - fg.height,700,fg.height);
  ctx.drawImage(goku,bX,bY,50,50);

  bY += gravity;

   ctx.fillStyle = "#000";
   ctx.font = "20px Verdana";
   ctx.fillText("Score : "+score,10,canvas.height-20);

  requestAnimationFrame(draw);
}

draw();
