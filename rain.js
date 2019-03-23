var canvas = document.getElementById("rain");
var can = canvas.getContext("2d");
var x0 = canvas.width/2;
var y0 = 0;
var x1 = canvas.width/2 + Math.floor(Math.random() * 100)
var y1 = 0
var x2 = canvas.width/3 + Math.floor(Math.random() * 100)
var y2 = 0

function drawRain() {
  can.clearRect(0, 0, canvas.width, canvas.height);
  rainDrop0();
  // rainDrop1();
  // rainDrop2();
  requestAnimationFrame(drawRain);
}

function rainDrop0() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x0, y0, 5, 5.75, 3.66, false);
  can.bezierCurveTo(x0, x0 - 5, y0 + 5, y0 + 5, x0, y0)
  can.bezierCurveTo(x0 - 5, y0, x0, y0 - 5, x0 -5, y0)
  can.fill();
  can.closePath();
  y0 = y0 + 6;
  if ( y0 === canvas.width) {
    y0 = 0
  }
}

// function rainDrop1() {
//   can.beginPath();
//   can.fillStyle = "lightblue";
//   can.arc(x1, y1, 5, 5.75, 3.66, false);
//   can.bezierCurveTo(x1, y1, x1, y1, x1 + 5, y1 - 5)
//   can.bezierCurveTo(x1 - 5, y1 - 5, x1, y1, x1 -5, y1 - 5)
//   can.fill();
//   can.closePath();
//   y1 = y1 + 6;
//   if ( y1 === canvas.width) {
//     y1 = 0
//     x1 = canvas.width/2 + Math.floor(Math.random() * 100)
//   }
// }

// function rainDrop2() {
//   can.beginPath();
//   can.fillStyle = "lightblue";
//   can.arc(x2, y2, 5, 5.75, 3.66, false);
//   can.bezierCurveTo(x2, y2, x2, y2, x2 + 5, y2 - 5)
//   can.bezierCurveTo(x2 - 5, y2, x2, y2, x2 -5, y2 - 5)
//   can.fill();
//   can.closePath();
//   y2 += 6;
//   if ( y2 === canvas.width) {
//     y2 = 0
//     x2 = canvas.width/3 + Math.floor(Math.random() * 100)
//   }
// }

// function rainHit(x,y) {
  
// }

drawRain();