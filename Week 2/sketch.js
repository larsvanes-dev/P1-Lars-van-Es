let carPrevPos = [0,100,170,20];
let stopLicht = "groen"

function setup() {
  createCanvas(500, 400);
}

function draw() {
  strokeWeight(1);
  background(0,190,255);
  noStroke();

  // De zon
  fill(255,180,0);
  circle(random(49,51),70,60);
  fill(255,255,0);
  circle(random(49,51),70,45);

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
  for (let i = 1; i < 4; i++) {
      
      // Variabelen auto's
      let carPos;
      let clrR = 0;
      let clrG = 0;
      let clrB = 0;
      let carOffset = 0;
      let stap;

      // Configuratie auto's
      noStroke();

      // Auto 1
      if (i === 1) {
        carPos = carPrevPos[1];
        stap = 1.2;
        clrR = 255;
        carOffset = 30;
      } else {
        carOffset = 0;

      // Auto 2
        if (i === 2) {
          carPos = carPrevPos[2];
          stap = 1;
          clrB = 255;
        } else {

            // Auto 3
            if (i === 3) {
              carPos = carPrevPos[3];
              stap = 1;
              clrG = 255;
            }
          }
        }

      // Beweging en stoppen
      if (carPos < 300 || stopLicht === "groen") {
        carPos = carPrevPos[i] + stap;
      } else {
        if (stopLicht === "geel") {
          carPos = carPrevPos[i] + 0.5 * stap;
        }
      }
      
      // Beweging loopt
      if (carPos > 500) {
        carPos = -80;
      }
      
      // Werk arrays bij
      carPrevPos[i] = carPos;

      // Auto tekenen
      fill(clrR,clrG,clrB);
      rect(carPos,350 - carOffset,60,35);
      rect(carPos+60,370 - carOffset,20,15);
      fill(0);
      stroke(130);
      strokeWeight(3);
      circle(carPos+10,385 - carOffset,20);
      circle(carPos+60,385 - carOffset,20);
    }
}