import React from 'react'

class Game extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    this.ctx = this.refs.canvas.getContext('2d');
    this.x = this.canvas.width/2;
    this.y = this.canvas.hieght-30;
    this.dx = 5;
    this.dy = -5;
    this.ballRadius = 10;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width-this.paddleWidth)/2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.ballColor = 0;
    this.score = 0;
    this.lives = 3;
    this.bricks = []
    for (let i = 0; i < this.brickColumnCount; i++) {
      this.bricks[i] = [];
      for(var u = 0; u < this.brickRowCount; u++) {
        this.bricks[i][u] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  drawBall = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    if ( this.ballColor == true ) {
      this.ctx.fillStyle = "#ff0000";
    } else { this.ctx.fillStyle = "#0095DD"}
    this.ctx.fill();
    this.ctx.closePath();
  }


  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBricks();
    this.drawBall();
    this.x += this.dx;
    this.y += this.dy;
    this.drawPaddle();
    this.drawScore();
    this.drawLives();
    this.collisionDetection();
    if(this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < 0) {
      this.dx = -this.dx;
    }
    if(this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.canvas.height-this.ballRadius) {
        if ( this.x > this.paddleX && this.paddleX + this.paddleWidth) {
          this.dy = -this.dy;
          this.ballColor = !this.ballColor
        }
        else {
          this.lives--;
          if(!this.lives) {
              alert("GAME OVER");
              document.location.reload();
          }
          else {
              this.x = this.canvas.width/2;
              this.y = this.canvas.height-30;
              this.dx = 5;
              this.dy = -5;
              this.paddleX = (this.canvas.width-this.paddleWidth)/2;
          }
        }
    }
    if(this.e.key === "d" && this.paddleX < this.canvas.width-this.paddleWidth) {
      this.paddleX += 7;
  }
  else if(this.e.key === "a" && this.paddleX > 0) {
      this.paddleX -= 7;
  }
  requestAnimationFrame(this.draw());
  }
  

  drawPaddle = () => {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight)
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBricks = () => {
    for(var c = 0; c < this.brickColumnCount; c++) {
      for(var r = 0; r < this.brickRowCount; r++) {
        if(this.bricks[c][r].status == 1) {
          var brickX = ( c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
          var brickY = ( r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          this.ctx.beginPath();
          this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          this.ctx.fillStyle = "#0095DD";
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  collisionDetection = () => {
    for ( var c = 0; c < this.brickColumnCount; c++ ) {
      for ( var r = 0; r < this.brickRowCount; r++ ) {
        var b = this.bricks[c][r];
        if ( b.status == 1 ) {
          if ( this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
            this.dy = -this.dy;
            b.status = 0;
            this.ballColor = !this.ballColor
            if ( this.score > 0 ) {
            this.score = this.score * 2;
            } else { this.score++ }
            if(this.score == 16384) {
              alert("YOU WIN, YOUR SCORE IS " + this.score);
              document.location.reload();
            }
          }
        }
      }
    }
  }

  drawScore = () => {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Score: " + this.score, 8, 20)
  }

  drawLives = () => {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20)
  }

  render() {
    return (
      <>
      <canvas ref="canvas" width={300} height={300}/>
      <div>
        {this.draw()}
      </div>
      </> 
    )
  }
}

export default Game
