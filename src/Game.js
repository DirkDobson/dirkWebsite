import React from 'react'

class Game extends React.Children {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
  }
  render() {
    return (
      <canvas ref="canvas" width={300} height={300}/>
    )
  }
}

export default Game
