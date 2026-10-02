let shapesX = [];
let shapesY = [];
let shapesDiameter = [];
let shapesR = [];
let shapesG = [];
let shapesB = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    shapesX.push(random(10,390));
    shapesY.push(random(10,390));
    shapesDiameter.push(random(8,30));
    shapesR.push(random(255));
    shapesG.push(random(255));
    shapesB.push(random(255));
  }
}

function mousePressed() {
  for (let i = 0; i < shapesX.length; i++) {
    if (mouseX > (shapesX[i] - (0.4 * shapesDiameter[i])) && mouseX < (shapesX[i] + (0.4 * shapesDiameter[i])) && mouseY > (shapesY[i] - (0.4 * shapesDiameter[i])) && mouseY < (shapesY[i] + (0.4 * shapesDiameter[i]))) {
      shapesX.splice(i, 1);
      shapesY.splice(i, 1);
      shapesDiameter.splice(i, 1);
      shapesR.splice(i, 1);
      shapesG.splice(i, 1);
      shapesB.splice(i, 1);
    }
  }
}

function keyReleased() {
  let shapesInstance = round(random(shapesX.length)) - 2;
  shapesX.splice(shapesInstance,1);
  shapesY.splice(shapesInstance,1);
  shapesDiameter.splice(shapesInstance,1);
  shapesR.splice(shapesInstance,1);
  shapesG.splice(shapesInstance,1);
  shapesB.splice(shapesInstance,1);
}

function draw() {
  background(220);

  for (let i = 0; i < shapesX.length; i++) {
    fill(shapesR[i],shapesG[i],shapesB[i])
    circle(shapesX[i], shapesY[i], shapesDiameter[i]);
  }
}
