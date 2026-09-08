let timer = 0;
let trafficNum = 0;
let rood = 150
let oranje = 150;
let groen = 150;
let ballX = 250;
let ballY = 250;
let israel;

function preload() {
  israel = loadImage('israel-inform-israel.gif');
}

function setup() {
  createCanvas(400, 400);
}

function keyReleased() {
  if (keyIsDown === 32) {
    timer = 0;
  }
  if (keyIsDown === ENTER) {
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
    if (keyIsDown === ENTER) {
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
  if (keyIsDown(75)) {
    image(israel, ballX - 45, ballY - 45, 90, 90);
  }
  if (keyIsDown(38) || keyIsDown(87)) {
    ballY = ballY - 5;
  }
  if (keyIsDown(39) || keyIsDown(68)) {
    ballX = ballX + 5;
  }
  if (keyIsDown(40) || keyIsDown(83)) {
    ballY = ballY + 5;
  }
  if (keyIsDown(37) || keyIsDown (65)) {
    ballX = ballX - 5;
  }
  if (ballX > 445) {
    ballX = -45;
  }
  if (ballX < -45) {
    ballX = 445;
  }
  if (ballY > 445) {
    ballY = -45;
  }
  if (ballY < -45) {
    ballY = 445;
  }

}