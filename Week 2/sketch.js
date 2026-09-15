let carPrevPos = [0,100,170,20];
let stopLicht = "groen"
let zonX = 50;
let zonY = 70;
let zonEffect = 0;
let zonGrootte = 0;
let boomEffect = 0;
let boomVerplaatsing = 0;
let wolkX = 400;
let honk;
let tijd = "dag";
let nachtA = 180;
let nachtB = 255;
let nachtC = 0;

function preload() {
  honk = loadSound('honk.wav');
}

function keyReleased() {
  // Besturing stoplicht
  if (keyCode === 13) {
    if (stopLicht === "rood") {
      stopLicht = "geel";
    } else {
      if (stopLicht === "geel") {
        stopLicht = "groen";
      } else {
        if (stopLicht === "groen") {
          stopLicht = "rood";
        }
      }
    }
  }
}

function mouseReleased() {
  for (let i = 1; i < 4; i++) {
    // Geluid afspelen als er op een auto wordt geklikt
    if (mouseX >= carPrevPos[i] && mouseX <= carPrevPos[i] + 80 && mouseY >= 320 && mouseY <= 385) {
      honk.play();
    }
  }
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  strokeWeight(1);
  noStroke();

  // Achtergrond verandert bij dag- en nachtcyclus
  background(0,nachtA,nachtB);
  if (tijd === "nacht") {
    if (nachtA > 0) {
      nachtA -= 2;
    }
    if (nachtB > 80) {
      nachtB -= 2;
    } 
  } else {
    if (nachtA < 180) {
      nachtA += 2;
    }
    if (nachtB < 255) {
      nachtB += 2;
    }
  }

  // De zon
  fill(220,180,0);
  if (tijd === "dag") {
    circle(zonX,zonY,zonGrootte);
  }
  if (tijd === "nacht") {
    fill(90);
  } else {
    fill(255,255,0);
  }
  circle(zonX,zonY,45);

    // Beweging zon
    zonEffect += 0.05
    zonGrootte = 55 - 10 * sin(zonEffect);
    zonX += 0.5;
    if (zonX > 560) {
      zonX = -60;
      if (tijd === "dag") {
        tijd = "nacht";
      } else {
        tijd = "dag";
      }
    }

  // Wolk
  fill(190);
  circle(wolkX,90 - 5,60);
  circle(wolkX + 30,100 - 5,40);
  circle(wolkX - 30,95 - 5,40);

  fill(255);
  circle(wolkX,90,60);
  circle(wolkX + 30,100,40);
  circle(wolkX - 30,95,40);

    // Wolk beweging
    wolkX -= 0.7
    if (wolkX < -60) {
      wolkX = 560;
    }

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

  // Variabelen animatie voor bomen
  boomVerplaatsing += 0.08
  boomEffect = 1 - 3.5 * sin(boomVerplaatsing);

  // Kloont bomen meerdere keren
  for (let i = 0; i < 8; i++) {
    noStroke();
    fill(190,70,0);
    rect(20 + i * 60, 280, 15,60);
    stroke(0,255,0);
    fill(0,170,0);
    circle((14.5 + i * 60) + boomEffect, 284, 25);
    fill(0,190,0);
    circle((40.5 + i * 60) + 1.1 * boomEffect, 284, 25);
    fill(0,120,0);
    circle(27.5 + i * 60, 280, 40);
  }

  // Verkeerslicht
  stroke(255);
  fill(100);
  rect(400,170,50,160);
  fill(130);
  rect(410,330,30,10);
  
    // Lichtjes, if-statements veranderen kleur
    if (stopLicht === "rood") {
      fill(250,0,0);
    } else {
      fill(150,0,0);
    }
    circle(425, 205, 40);
    if (stopLicht === "geel") {
      fill(250,180,0);
    } else {
      fill(150,40,0);
    }
    circle(425, 250, 40);
    if (stopLicht === "groen") {
      fill(0,255,0);
    } else {
      fill(0,150,0)
    }
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
    
    // Voor auto's 1 en 3: Dit zorgt ervoor dat ze niet tegen elkaar kunnen botsen
    if (i === 3 && carPrevPos[3] > carPrevPos[2] - 100 && carPrevPos[3] < carPrevPos[2]) {
    } else {
      if (i === 2 && carPrevPos[2] > carPrevPos[3] - 100 && carPrevPos[2] < carPrevPos[3]) {
    } else {
      // Als ze nog niet bij het verkeerslicht staan of als het stoplicht groen is blijven de auto's doorrijden
      // de x van elke auto verandert met de waarde van hun stap-variabele
      if (carPos < 300 || stopLicht === "groen") {
        carPos = carPrevPos[i] + stap;
      } else {
        // Anders, als het stoplicht geel is halveert de snelheid
        if (stopLicht === "geel") {
          carPos = carPrevPos[i] + 0.5 * stap;
        } else {
          // In alle andere situaties mogen de auto's alleen nog rijden als de x hoger is dan 340
          if (carPos > 340) {
            carPos = carPrevPos[i] + 0.5 * stap;
          }
        }
      }
      
      // Beweging loopt
      if (carPos > 500) {
        carPos = -80;
      }
      }
    }
      
      // Werk arrays bij
      carPrevPos[i] = carPos;

      // Auto tekenen
      fill(clrR,clrG,clrB);
      rect(carPos,350 - carOffset,60,35);
      rect(carPos+60,370 - carOffset,20,15);
      fill(255,255,0,nachtC * 1.2);
      triangle(carPos+80, 377.5 - carOffset, carPos+125, 365 - carOffset, carPos+125, 395 - carOffset);
      fill(0);
      stroke(130);
      strokeWeight(3);
      circle(carPos+10,385 - carOffset,20);
      circle(carPos+60,385 - carOffset,20);
    }


  // Fade-effect voor koplampen en de voorgrond
  if (tijd === "nacht") {
    if (nachtC < 80) {
      nachtC += 1;
    }
  
  } else {
    if(nachtC > 0) {
      nachtC -= 1;
    }
  }  
  fill(0,0,190,nachtC);
  rect(0,0,500,400);
}