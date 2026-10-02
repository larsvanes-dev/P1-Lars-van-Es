function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Kleurt alle cirkels in de juiste volgorde
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      fill(255,0,0);
    } else if (i == 1) {
      fill(255,220,0);
    } else {
      fill(0,200,0);
    }
    
    // Tekent alle cirkels, elke steeds 35 pixels lager
    circle(30,30 + i * 35,30)
  }
}