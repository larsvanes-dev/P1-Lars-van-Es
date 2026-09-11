let auto1Snelheid = 2;
let auto2Snelheid = 1;
let auto3Snelheid = 1;
let auto1VorigePositie = 100;
let auto2VorigePositie = 150;
let auto3VorigePositie = 50;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0,190,255);
  noStroke();

  // De zon
  fill(255,180,0);
  circle(50,70,60);
  fill(255,255,0);
  circle(50,70,45);

  // Bergen
  fill(185);
  triangle(160,340,270,80,360,340);
  fill(120);
  triangle(60,340,140,180,220,340);
  triangle(250,340,340,180,420,340);

  // Weg
  fill(50);
  rect(0, 340, 500, 60);

    // Strepen
    fill(255);
    stroke(255);
    for (let i = 0; i < 10; i++) {
    line(20 + i * 60, 370, 60 + i * 60, 370);
  }

  // Boompjes
  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(190,70,0);
    rect(20 + i * 60, 280, 15,60);
    fill(0,120,0);
    circle(27.5 + i * 60, 280, 40);
    circle(14.5 + i * 60, 284, 25);
    circle(40.5 + i * 60, 284, 25);
  }

  // Verkeerslicht
  stroke(255);
  fill(100);
  rect(400,170,50,160);
  fill(130);
  rect(410,330,30,10);
  
    // Lichtjes
    fill(250,0,0);
    circle(425, 205, 40);
    fill(250,180,0);
    circle(425, 250, 40);
    fill(0,255,0);
    circle(425, 295, 40);

  // Auto's
  noStroke();
  for (let i = 0; i < 3; i++) {
      
      // Variabelen auto's
      let carPos;
      let clrR = 0;
      let clrG = 0;
      let clrB = 0;
      let caroffset = 0;

      // Configuratie auto's

      // Auto 1
      if (i === 0) {
        carPos = auto1VorigePositie += auto1Snelheid;
        clrR = 255;
        carOffset = 30;
        auto1VorigePositie = carPos;
        if (carPos > 500) {
          auto1VorigePositie = -80;
        }
      } else {
        carOffset = 0;

      // Auto 2
        if (i === 1) {
          carPos = auto2VorigePositie += auto2Snelheid;
          clrB = 255;
          auto2VorigePositie = carPos;
          if (carPos > 500) {
          auto2VorigePositie = -80;
          }
        } else {

      // Auto 3
          if (i === 2) {
            carPos = auto3VorigePositie += auto3Snelheid;
            clrG = 255;
            auto3VorigePositie = carPos;
            if (carPos > 500) {
              auto3VorigePositie = -80;
            }
          }
        }
      }
      
      // Auto tekenen
      fill(clrR,clrG,clrB);
      rect(carPos,350 - carOffset,60,35);
      rect(carPos+60,370 - carOffset,20,15);
      fill(0);
    }
}
