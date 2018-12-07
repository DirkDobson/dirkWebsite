var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 5;
var dy = -5;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var ballColorSelect = 0;
var clicked = false;
var score = 0;
var tries = 3;

var bricks = []
for(var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  switch (ballColorSelect){
    case 0:
      ctx.fillStyle = "#0095DD";
      break;
    case 1:
      ctx.fillStyle = "#ff0000";
      break;
    case 2:
      ctx.fillStyle = "#E8E8E8";
      break;
    default:
      ballColorSelect = 0;
      break
  }
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  x += dx;
  y += dy;
  drawPaddle();
  drawScore();
  drawTries();
  collisionDetection();
  if(score >= 16384) {
    drawScore();
    document.getElementById("win").style.color = "#32cd32"
    document.getElementById("win").innerHTML = "YOU WIN, YOUR SCORE IS " + score;
    return;
  }
  if(x + dx > canvas.width - ballRadius || x + dx < 0) {
    ballColorSelect++;
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    ballColorSelect++;
    dy = -dy;
  } else if (y + dy > canvas.height-ballRadius) {
      if ( x > paddleX && paddleX + paddleWidth) { 
        dy = -dy;
        ballColorSelect++;
      }
      else {
        tries--;
        if(tries <= 0) {
          drawTries();
          document.getElementById("win").innerHTML = "GAME OVER"
          return;
        }
        else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 5;
            dy = -5;
            paddleX = (canvas.width-paddleWidth)/2;
        }
      }
  }
  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}
requestAnimationFrame(draw);
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for(var c = 0; c < brickColumnCount; c++) {
    for(var r = 0; r < brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = ( c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = ( r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function keyDownHandler(e) {
  if(e.keyCode == 39 || e.keyCode == 68) {
    rightPressed = true;
  } else if (e.keyCode == 37 || e.keyCode == 65) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39 || e.keyCode == 68) {
      rightPressed = false;
  }
  else if(e.keyCode == 37  || e.keyCode == 65) {
      leftPressed = false;
  }
}

function collisionDetection() {
  for ( var c = 0; c < brickColumnCount; c++ ) {
    for ( var r = 0; r < brickRowCount; r++ ) {
      var b = bricks[c][r];
      if ( b.status == 1 ) {
        if ( x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          ballColorSelect++
          if ( score > 0 ) {
          score = score * 2;
          } else { score++ }
        }
      }
    }
  }
}

function drawScore() {
  if ( score >= 16384 ) {
    ctx.clearRect(0, 0, canvas.width - 65, 20);
  }
  ctx.font = "16px Arial";
  ctx.fillStyle = "#cc0000";
  ctx.fillText("Score: " + score, 8, 20)
}

function drawTries() {
  if ( tries <= 0 ) {
    ctx.clearRect(200, 0, canvas.width - 65, 20);
  }
  ctx.font = "16px Arial";
  ctx.fillStyle = "#cc0000";
  ctx.fillText("Tries: " + tries, canvas.width - 65, 20)
}

function drawIntroduction() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#32cd32";
  ctx.fillText("Click to Start", canvas.width - canvas.width/1.5, canvas.height/2);
  document.getElementById("myCanvas").style.cursor = "pointer";
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if ( relativeX  > 0 + paddleWidth/2 && relativeX < canvas.width - paddleWidth/2 ) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function start() {
  clicked = !clicked
  if (clicked === true) {
    draw();
    document.getElementById("start").innerHTML = "Click to Reset";
  } else {
    document.getElementById("start").innerHTML = "";
    document.location.reload();
  }
}
drawIntroduction();
document.getElementById("myCanvas").addEventListener("click", start)
