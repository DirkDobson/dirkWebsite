import React from 'react'

class Game extends React.Children {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let x = this.canvas.width/2;
    let y = this.canvas.hieght-30;
    let dx = 5;
    let dy = -5;
    const ballRadius = 10;
    const paddleHeight = 10;
    const paddleWidth = 75;
    let paddleX = (this.canvas.width-paddleWidth)/2;
    let rightPressed = false;
    let leftPressed = false;
    let brickRowCount = 3;
    let brickColumnCount = 5;
    const brickWidth = 75;
    const brickHeight = 20;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;
    let ballColor = 0;
    let score = 0;
    let lives = 3;
  }
  render() {
    return (
      <canvas ref="canvas" width={300} height={300}/>
    )
  }
}

export default Game
