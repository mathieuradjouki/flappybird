var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//load images

var goku = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var gameOver = new Image();
var getReady = new Image();

goku.src ="images/goku.png";
bg.src ="images/fond-flappy-goku.png";
fg.src ="images/footground.png";
pipeNorth.src ="images/pipeNorth.png";
pipeSouth.src ="images/pipeSouth.png";
gameOver.src ="images/gameover.png";
getReady.src= "images/getready.png";


// variables

var gap = 150;
var constant = pipeNorth.height+gap;
var bX = 10;
var bY = 350;
var gravity = 1.5;
var score = 0;


//audio file

var fly = new Audio();
var scoreSound = new Audio();

fly.src = "sound/sound2.mp3";
scoreSound.src = "sound/sound1.mp3";
// When key push

document.addEventListener("keydown",moveUp);
document.addEventListener("click",moveUp);

function moveUp(){
  bY -= 40;
  fly.play();
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
  if (bX + goku.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+goku.height >=
     pipe[i].y+constant) || bY + goku.height >= canvas.height - fg.height){

  location.reload();
  }
  if(pipe[i].x + pipeNorth.width == bX + goku.width){
    score++;
    scoreSound.play();
  }
}
  ctx.drawImage(fg,-20,canvas.height - fg.height,700,fg.height);
  ctx.drawImage(goku,bX,bY,50,50);

  bY += gravity;

   ctx.fillStyle = "#000";
   ctx.font = "20px Verdana";
   ctx.fillText("Score : "+score,10,640);

  requestAnimationFrame(draw);
}

draw();
