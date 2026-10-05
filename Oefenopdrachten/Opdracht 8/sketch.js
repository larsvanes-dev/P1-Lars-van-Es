let randomPos = [];
let verityFace;
let verities = [];

function preload() {
  verityFace = loadImage('smiley.png');
}

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 3; i++) {
    let Pos = {
      x: round(random(100, 300)),
      y: round(random(100, 300))
    }
    randomPos.push(Pos);
  }
  for (let i = 0; i < 150; i++) {
    let dat = {
      x: round(random(10, 790)),
      y: round(random(10, 390)),
      straal: round(random(15,90))
    }
    verities.push(dat);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < 3; i++) {
    tekenHuis(randomPos[i].x,randomPos[i].y);
  }

  for (let i = 0; i < verities.length; i++) {
    verity(verities[i].x, verities[i].y, verities[i].straal);
  }
}

function tekenHuis(x, y) {
  fill(255);
  rect(x, y - 70, 60, 70);
  triangle(x, y - 70, x + 30, y - 100, x + 60, y - 70);

  fill(200);
  rect(x + 5, y - 35, 20, 35);

  fill(135);
  circle(x + 45, y - 30, 20);
}

function verity(x, y, straal) {
  fill(255,255,0);
  circle(x, y, straal);
  image(verityFace, x - 0.5 * straal, y - 0.5 * straal, straal, straal);
}

