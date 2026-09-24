const PERMANENT_VELOCITY = 1; 

let kutvogel;
let vogelX = [];
let vogelY = [];
let vogelVelocityX = [];
let vogelVelocityY = [];

function preload() {
  kutvogel = loadImage('meeuw.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let vogel = 0; vogel < 30; vogel++) {
    if (vogelX[vogel] == undefined && vogelY[vogel] == undefined) {
      vogelX[vogel] = random(50,350);
      vogelY[vogel] = random(50,350);
      vogelVelocityX[vogel] = random(1,4);
    } 
    image(kutvogel, vogelX[vogel] - 15, vogelY[vogel] - 15, 30, 30);
    vogelX[vogel] += PERMANENT_VELOCITY + vogelVelocityX[vogel];
  }
}
