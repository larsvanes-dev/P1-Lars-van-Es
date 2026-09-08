let timer = 0;
let trafficNum = 0;
let rood = 150
let oranje = 150;
let groen = 150;
let ballX = 250;
let ballY = 250;

function setup() {
  createCanvas(400, 400);
}

function keyReleased() {
  if (keyCode === 32) {
    timer = 0;
  }
  if (keyCode === ENTER) {
    trafficNum = trafficNum + 1;
    if (trafficNum >= 3) {
      trafficNum = 0;
    }
  }
}

function draw() {
  background(220);
  fill(255);
  stroke(0);

  // Timer
  timer = timer + 1;
  if (timer >= 500) {
    timer = 0;
  }

  // Vierkantje
  if (keyIsPressed === true) {
    if (keyCode === ENTER) {
      rect(20,20,60,60);
    }
  }

  // Verkeerslicht
  fill(0);
  textSize(48);
  text(timer, 20, 100);
  fill(150);
  noStroke();
  rect(20, 140, 60, 200);
  rect(30, 340, 40, 50);
  fill(rood,0,0);
  circle(50, 180, 40);
  fill(oranje,80,0);
  circle(50, 240, 40);
  fill(0,groen,0);
  circle(50, 300, 40);

  if (trafficNum === 0) {
    rood = 255;
    } else {
      rood = 150;
    }
  if (trafficNum === 1) {
    oranje = 255;
    } else {
      oranje = 150;
    }
  if (trafficNum === 2) {
    groen = 255;
    } else {
      groen = 150;
  }

  // 8-bal
  fill(0);
  circle(ballX,ballY,90);
  fill(255);
  circle(ballX,ballY,60);
  fill(0);
  text("8",ballX - 14,ballY + 14);
  if (keyIsPressed === true) {
    if (keyCode === 38 || keyCode === 87) {
      ballY = ballY - 1;
    }
    if (keyCode === 39 || keyCode === 68) {
      ballX = ballX + 1;
    }
    if (keyCode === 40 || keyCode === 83) {
      ballY = ballY + 1;
    }
    if (keyCode === 37 || keyCode === 65) {
      ballX = ballX - 1;
    }
  }

}