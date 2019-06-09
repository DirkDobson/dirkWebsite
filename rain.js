var canvas = document.getElementById("rain");
var can = canvas.getContext("2d");
var x0 = canvas.width/2;
var y0 = 0;
var x1 = canvas.width/2 + Math.floor(Math.random() * 100)
var y1 = 0
var x2 = canvas.width/3 + Math.floor(Math.random() * 100)
var y2 = 0
var x3 = canvas.width/4 + Math.floor(Math.random() * 100)
var y3 = 0
var x4 = canvas.width/5 + Math.floor(Math.random() * 100)
var y4 = 0
var x5 = canvas.width/2 - Math.floor(Math.random() * 100)
var y5 = 0
var x6 = canvas.width/3 - Math.floor(Math.random() * 100)
var y6 = 0
var x7 = canvas.width/10 + Math.floor(Math.random() * 100)
var y7 = 0
var x8 = canvas.width * .7 + Math.floor(Math.random() * 100)
var y8 = 0
var x9 = canvas.width/11 + Math.floor(Math.random() * 100)
var y9 = 0 
var x10 = canvas.width *.75 + Math.floor(Math.random() * 100)
var y10 = 0
var x11 = canvas.width/12 + Math.floor(Math.random() * 100)
var y11 = 0
var x12 = canvas.width * .65 + Math.floor(Math.random() * 100) 
var y12 = 0
var x13 = canvas.width/13 + Math.floor(Math.random() * 100)
var y13 = 0
var x14 = canvas.width/2 + Math.floor(Math.random() * 100)
var y14 = 0
var x15 = canvas.width/5 + Math.floor(Math.random() * 100)
var y15 = 0
var x16 = canvas.width/3 - Math.floor(Math.random() * 100)
var y16 = 0
var x17 = canvas.width * .6 + Math.floor(Math.random() * 100)
var y17 = 0
var x18 = canvas.width/13 + Math.floor(Math.random() * 100)
var y18 = 0
var x19 = canvas.width/11 + Math.floor(Math.random() * 100)
var y19 = 0 
var x20 = canvas.width *.75 + Math.floor(Math.random() * 100)
var y20 = 0


function drawRain() { 
  can.clearRect(0, 0, canvas.width, canvas.height);
  rainDrop0();
  if( y0 > 20) {
    rainDrop1();
  };
  if ( y1 > 20){
    rainDrop2();
  };
  if (y2 > 20) {
    rainDrop3();
  };
  if (y3 > 20) {
    rainDrop4();
  }
  if (y4 > 20) {
    rainDrop5();
  }
  if (y5 > 20) {
    rainDrop6();
  }
  if (y6 > 20) {
    rainDrop7();
  }
  if (y7 > 20) {
    rainDrop8();
  }
  if (y8 > 20) {
    rainDrop9();
  }
  if (y9 > 20) {
    rainDrop10();
  }
  if (y10 > 20) {
    rainDrop11();
  }
  if (y11 > 20) {
    rainDrop12();
  }
  if (y12 > 20) {
    rainDrop13();
  }
  if (y13 > 20) {
    rainDrop14();
  }
  if (y14 > 20) {
    rainDrop15();
  }
  if (y15 > 20) {
    rainDrop16();
  }
  if (y16 > 20) {
    rainDrop17();
  }
  if (y17 > 20) {
    rainDrop18();
  }
  if (y18 > 20) {
    rainDrop19();
  }
  if (y19 > 20) {
    rainDrop20();
  }
  requestAnimationFrame(drawRain);
}

function rainDrop0() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x0, y0, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x0 + 3, y0, x0, y0 - 10);
  can.moveTo(x0 - 4.3, y0 - 2.69);
  can.quadraticCurveTo(x0 + 3, y0, x0, y0 - 10);
  can.fill();
  can.closePath();
  y0 = y0 + 6;
  if ( y0 === canvas.width) {
    y0 = 0
    x0 = canvas.width/1.5 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop1() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x1, y1, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x1 + 3, y1, x1, y1 - 10);
  can.moveTo(x1 - 4.3, y1 - 2.69);
  can.quadraticCurveTo(x1 + 3, y1, x1, y1 - 10);
  can.fill();
  can.closePath();
  y1 = y1 + 6;
  if ( y1 === canvas.width) {
    y1 = 0
    x1 = canvas.width/2 + Math.floor(Math.random() * 100)
  }
}

function rainDrop2() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x2, y2, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x2 + 3, y2, x2, y2 - 10);
  can.moveTo(x2 - 4.3, y2 - 2.69);
  can.quadraticCurveTo(x2 + 3, y2, x2, y2 - 10);
  can.fill();
  can.closePath();
  y2 = y2 + 6;
  if ( y2 === canvas.width) {
    y2 = 0
    x2 = canvas.width/3 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop3() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x3, y3, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x3 + 3, y3, x3, y3 - 10);
  can.moveTo(x3 - 4.3, y3 - 2.69);
  can.quadraticCurveTo(x3 + 3, y3, x3, y3 - 10);
  can.fill();
  can.closePath();
  y3 = y3 + 6;
  if ( y3 === canvas.width) {
    y3 = 0
    x3 = canvas.width/4 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop4() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x4, y4, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x4 + 3, y4, x4, y4 - 10);
  can.moveTo(x4 - 4.3, y4 - 2.69);
  can.quadraticCurveTo(x4 + 3, y4, x4, y4 - 10);
  can.fill();
  can.closePath();
  y4 = y4 + 6;
  if ( y4 === canvas.width) {
    y4 = 0
    x4 = canvas.width/5 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop5() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x5, y5, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x5 + 3, y5, x5, y5 - 10);
  can.moveTo(x5 - 4.3, y5 - 2.69);
  can.quadraticCurveTo(x5 + 3, y5, x5, y5 - 10);
  can.fill();
  can.closePath();
  y5 = y5 + 6;
  if ( y5 === canvas.width) {
    y5 = 0
    x5 = canvas.width/2 - Math.floor(Math.random() * 100) 
  }
}

function rainDrop6() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x6, y6, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x6 + 3, y6, x6, y6 - 10);
  can.moveTo(x6 - 4.3, y6 - 2.69);
  can.quadraticCurveTo(x6 + 3, y6, x6, y6 - 10);
  can.fill();
  can.closePath();
  y6 = y6 + 6;
  if ( y6 === canvas.width) {
    y6 = 0
    x6 = canvas.width/2 - Math.floor(Math.random() * 100) 
  }
}

function rainDrop7() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x7, y7, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x7 + 3, y7, x7, y7 - 10);
  can.moveTo(x7 - 4.3, y7 - 2.69);
  can.quadraticCurveTo(x7 + 3, y7, x7, y7 - 10);
  can.fill();
  can.closePath();
  y7 = y7 + 6;
  if ( y7 === canvas.width) {
    y7 = 0
    x7 = canvas.width/10 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop8() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x8, y8, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x8 + 3, y8, x8, y8 - 10);
  can.moveTo(x8 - 4.3, y8 - 2.69);
  can.quadraticCurveTo(x8 + 3, y8, x8, y8 - 10);
  can.fill();
  can.closePath();
  y8 = y8 + 6;
  if ( y8 === canvas.width) {
    y8 = 0
    x8 = canvas.width * .7 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop9() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x9, y9, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x9 + 3, y9, x9, y9 - 10);
  can.moveTo(x9 - 4.3, y9 - 2.69);
  can.quadraticCurveTo(x9 + 3, y9, x9, y9 - 10);
  can.fill();
  can.closePath();
  y9 = y9 + 6;
  if ( y9 === canvas.width) {
    y9 = 0
    x9 = canvas.width/11 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop10() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x10, y10, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x10 + 3, y10, x10, y10 - 10);
  can.moveTo(x10 - 4.3, y10 - 2.69);
  can.quadraticCurveTo(x10 + 3, y10, x10, y10 - 10);
  can.fill();
  can.closePath();
  y10 = y10 + 6;
  if ( y10 === canvas.width) {
    y10 = 0
    x10 = canvas.width *.75 + Math.floor(Math.random() * 100)
  }
}

function rainDrop11() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x11, y11, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x11 + 3, y11, x11, y11 - 10);
  can.moveTo(x11 - 4.3, y11 - 2.69);
  can.quadraticCurveTo(x11 + 3, y11, x11, y11 - 10);
  can.fill();
  can.closePath();
  y11 = y11 + 6;
  if ( y11 === canvas.width) {
    y11 = 0
    x11 = canvas.width/12 + Math.floor(Math.random() * 100)
  }
}

function rainDrop12() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x12, y12, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x12 + 3, y12, x12, y12 - 10);
  can.moveTo(x12 - 4.3, y12 - 2.69);
  can.quadraticCurveTo(x12 + 3, y12, x12, y12 - 10);
  can.fill();
  can.closePath();
  y12 = y12 + 6;
  if ( y12 === canvas.width) {
    y12 = 0
    x12 = canvas.width * .65 + Math.floor(Math.random() * 100)
  }
}

function rainDrop13() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x13, y13, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x13 + 3, y13, x13, y13 - 10);
  can.moveTo(x13 - 4.3, y13 - 2.69);
  can.quadraticCurveTo(x13 + 3, y13, x13, y13 - 10);
  can.fill();
  can.closePath();
  y13 = y13 + 6;
  if ( y13 === canvas.width) {
    y13 = 0
    x13 = canvas.width/13 + Math.floor(Math.random() * 100)
  }
}

function rainDrop14() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x14, y14, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x14 + 3, y14, x14, y14 - 10);
  can.moveTo(x14 - 4.3, y14 - 2.69);
  can.quadraticCurveTo(x14 + 3, y14, x14, y14 - 10);
  can.fill();
  can.closePath();
  y14 = y14 + 6;
  if ( y14 === canvas.width) {
    y14 = 0
    x14 = canvas.width/2 + Math.floor(Math.random() * 100)
  }
}

function rainDrop15() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x15, y15, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x15 + 3, y15, x15, y15 - 10);
  can.moveTo(x15 - 4.3, y15 - 2.69);
  can.quadraticCurveTo(x15 + 3, y15, x15, y15 - 10);
  can.fill();
  can.closePath();
  y15 = y15 + 6;
  if ( y15 === canvas.width) {
    y15 = 0
    x15 = canvas.width/5 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop16() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x16, y16, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x16 + 3, y16, x16, y16 - 10);
  can.moveTo(x16 - 4.3, y16 - 2.69);
  can.quadraticCurveTo(x16 + 3, y16, x16, y16 - 10);
  can.fill();
  can.closePath();
  y16 = y16 + 6;
  if ( y16 === canvas.width) {
    y16 = 0
    x16 = canvas.width/2 - Math.floor(Math.random() * 100) 
  }
}

function rainDrop17() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x17, y17, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x17 + 3, y17, x17, y17 - 10);
  can.moveTo(x17 - 4.3, y17 - 2.69);
  can.quadraticCurveTo(x17 + 3, y17, x17, y17 - 10);
  can.fill();
  can.closePath();
  y17 = y17 + 6;
  if ( y17 === canvas.width) {
    y17 = 0
    x17 = canvas.width * .6 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop18() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x18, y18, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x18 + 3, y18, x18, y18 - 10);
  can.moveTo(x18 - 4.3, y18 - 2.69);
  can.quadraticCurveTo(x18 + 3, y18, x18, y18 - 10);
  can.fill();
  can.closePath();
  y18 = y18 + 6;
  if ( y18 === canvas.width) {
    y18 = 0
    x18 = canvas.width/13 + Math.floor(Math.random() * 100)
  }
}

function rainDrop19() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x19, y19, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x19 + 3, y19, x19, y19 - 10);
  can.moveTo(x19 - 4.3, y19 - 2.69);
  can.quadraticCurveTo(x19 + 3, y19, x19, y19 - 10);
  can.fill();
  can.closePath();
  y19 = y19 + 6;
  if ( y19 === canvas.width) {
    y19 = 0
    x19 = canvas.width/11 + Math.floor(Math.random() * 100) 
  }
}

function rainDrop20() {
  can.beginPath();
  can.fillStyle = "lightblue";
  can.arc(x20, y20, 5, 5.75, 3.66, false);
  can.quadraticCurveTo(x20 + 3, y20, x20, y20 - 10);
  can.moveTo(x20 - 4.3, y20 - 2.69);
  can.quadraticCurveTo(x20 + 3, y20, x20, y20 - 10);
  can.fill();
  can.closePath();
  y20 = y20 + 6;
  if ( y20 === canvas.width) {
    y20 = 0
    x20 = canvas.width *.75 + Math.floor(Math.random() * 100)
  }
}


// function rainHit(x,y) {
  
// }

drawRain();
  
