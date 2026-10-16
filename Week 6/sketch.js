let bierBar = 20;
let gelukBar = 60;
let slaapBar = 0;
let leverBar = 80;

let sleeping = false;
let sleepMultiplier = 1;

let staticPose;

function preload() {
  staticPose = loadImage('staticPose.png');
}

function keyReleased() {
  if (keyCode == 49) {
    bierBar += 20
  }
  if (keyCode == 50) {
    gelukBar += 10
  }
  if (keyCode == 51) {
    slaapBar -= 27
  }
  if (keyCode == 52) {
    leverBar += 2
  }
  if (keyCode == 32 && sleeping == false) {
    sleeping = true;
    sleepMultiplier = 0.5;
  } else {
    sleeping = false;
    sleepMultiplier = 1;
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(0);
  text("Bier: " + round(bierBar), 50, 50);
  text("Geluk: " + round(gelukBar), 50, 100);
  text("Slaap: " + round(slaapBar), 50, 150);
  text("Lever: " + round(leverBar), 50, 200);
  text("Slaapt: " + sleeping, 50, 250);

  image(staticPose, 200, 200, 200, 200);

  if (bierBar > 0) {
    bierBar -= deltaTime * 0.001 * sleepMultiplier;
  }
  if (gelukBar > 0) {
    if (bierBar < 60 && sleeping == false) {
      gelukBar -= (deltaTime * 0.0007) + (deltaTime * 0.00001 * slaapBar);
    } else if (sleeping == false) {
      gelukBar += deltaTime * 0.000016 * bierBar;
    }
  }
  if (slaapBar < 100) {
    if (sleeping == false) {
      slaapBar += deltaTime * 0.0006;
    } else {
      slaapBar -= deltaTime * 0.00075;
    }
    if (slaapBar < 0) {
      slaapBar = 0;
    }
  }
  if (leverBar > 0) {
    if (bierBar > 80) {
      leverBar -= (deltaTime * 0.00199);
    }
    if (sleeping == false) {
      leverBar -= deltaTime * 0.03 * ((slaapBar * 0.001) * 0.5)
    } else {
      leverBar += deltaTime * 0.0006
    }
  }
}