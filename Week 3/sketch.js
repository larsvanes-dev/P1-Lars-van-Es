// Variabelen
let vakjes = [0, 0, 0,
              0, 0, 0,
              0, 0, 0];
let vakjesPositieX = [];
let vakjesPositieY = [];
let beurt = "Speler 1";
let gekozenvakje = 0;
let wintext = " ";
let debug = false;
let bgR = 0;
let bgB = 0;
let effect1;
let effect1x1 = 0;
let effect1x2;
let hoverSquare = [false,false,false,false,false,false,false,false,false];
let hover;
let click;
let lijn1 = -10;
let lijn2 = -10;
let lijn3 = -10;
let lijn4 = -10;

function preload() {
  effect1 = loadImage('effect1.png');
  hover = loadSound('hover.mp3');
  click = loadSound('click.wav');
}

function mouseReleased() {
  // Bij elk vakje op het speelveld
  for (let i = 0; i < 9; i++) {
    vakjesPositieX[i] = 70 + (i * 95) - (floor(i * 0.34) * 285);
    vakjesPositieY[i] = 70 + (floor(i * 0.34) * 95);
    if (mouseX >= vakjesPositieX[i] && mouseX <= vakjesPositieX[i] + 70 && mouseY >= vakjesPositieY[i] && mouseY <= vakjesPositieY[i] + 70) {
      // Alleen als niemand nog heeft gewonnen
      if (wintext !== " ") {
      } else {

      // Verandert waardes in de array aan de hand van de beurt variabele
      if (vakjes[i] === 0) {
        click.play();
      if (beurt === "Speler 1") {
        vakjes[i] = 1;
        beurt = "Speler 2";
      } else {
        vakjes[i] = 2;
        beurt = "Speler 1";
      } 
    }
    }
    }
  }

  if (mouseX >= 360 && mouseX <= 390 && mouseY >= 360 && mouseY <= 390) {
    for (let i = 0; i < 9; i++) {
      vakjes[i] = 0;
    }
    wintext = " ";
    lijn1 = -10;
    lijn2 = -10;
    lijn3 = -10;
    lijn4 = -10;
  }
}

function keyReleased() {
  // Hetzelfde als met de muis maar met de nummertoetsen
  if (wintext !== " ") {
  } else {
  gekozenvakje = keyCode - 48;
  if (vakjes[gekozenvakje - 1] === 0) {
    if (beurt === "Speler 1") {
      vakjes[gekozenvakje - 1] = 1;
      beurt = "Speler 2";
    } else {
      vakjes[gekozenvakje - 1] = 2;
      beurt = "Speler 1";
    }
  }
}
}

function setup() {
  createCanvas(400, 400);
  effect1x2 = width;
  beurt = "Speler " + round(random(1,2))
}

function draw() {
  stroke(0);
  strokeWeight(1);
  background(bgR, 0, bgB);

  tint(255, 70);

  image(effect1,effect1x1,0, width, height);
  image(effect1,effect1x2,0, width, height);

  if (beurt === "Speler 1") {
    effect1x1 -= 2
    effect1x2 -= 2
    if (effect1x1 < -width) {
    effect1x1 = width;
    }
    if (effect1x2 < -width) {
    effect1x2 = width;
    }
  } else {
    effect1x1 += 2
    effect1x2 += 2
    if (effect1x1 > 400) {
    effect1x1 = -400;
    }
    if (effect1x2 > 400) {
    effect1x2 = -400;
    }
  }

  fill(67);
  rect(50,50,300,300);

  if (beurt === "Speler 1") {
    bgR = lerp(bgR, 180, 0.05);
    bgB = lerp(bgB, 0, 0.05);
  } else {
    bgR = lerp(bgR, 0, 0.05);
    bgB = lerp(bgB, 180, 0.05);
  }

  // Checkt wins
  for (let i = 1; i < 3; i++) {

    // Rij 1 vol
    if (vakjes[0] === i && vakjes[1] === i && vakjes[2] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[0] + 35
      lijn2 = vakjesPositieY[0] + 35
      lijn3 = vakjesPositieX[2] + 35
      lijn4 = vakjesPositieY[2] + 35
      break;

    // Rij 2 vol
    } else if (vakjes[3] === i && vakjes[4] === i && vakjes[5] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[3] + 35
      lijn2 = vakjesPositieY[3] + 35
      lijn3 = vakjesPositieX[5] + 35
      lijn4 = vakjesPositieY[5] + 35
      break;

    // Rij 3 vol
    } else if (vakjes[6] === i && vakjes[7] === i && vakjes[8] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[6] + 35
      lijn2 = vakjesPositieY[6] + 35
      lijn3 = vakjesPositieX[8] + 35
      lijn4 = vakjesPositieY[8] + 35
      break;

    // Kolom 1 vol
    } else if (vakjes[0] === i && vakjes[3] === i && vakjes[6] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[0] + 35
      lijn2 = vakjesPositieY[0] + 35
      lijn3 = vakjesPositieX[6] + 35
      lijn4 = vakjesPositieY[6] + 35
      break;

    // Kolom 2 vol
    } else if (vakjes[1] === i && vakjes[4] === i && vakjes[7] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[1] + 35
      lijn2 = vakjesPositieY[1] + 35
      lijn3 = vakjesPositieX[7] + 35
      lijn4 = vakjesPositieY[7] + 35
      break;

    // Kolom 3 vol
    } else if (vakjes[2] === i && vakjes[5] === i && vakjes[8] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[2] + 35
      lijn2 = vakjesPositieY[2] + 35
      lijn3 = vakjesPositieX[8] + 35
      lijn4 = vakjesPositieY[8] + 35
      break;

    // Diagonaal 1 vol
    } else if (vakjes[0] === i && vakjes[4] === i && vakjes[8] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[0] + 35
      lijn2 = vakjesPositieY[0] + 35
      lijn3 = vakjesPositieX[8] + 35
      lijn4 = vakjesPositieY[8] + 35
      break;

    // Diagonaal 2 vol
    } else if (vakjes[6] === i && vakjes[4] === i && vakjes[2] === i) {
      wintext = "Speler " + i + " heeft gewonnen!";
      lijn1 = vakjesPositieX[6] + 35
      lijn2 = vakjesPositieY[6] + 35
      lijn3 = vakjesPositieX[2] + 35
      lijn4 = vakjesPositieY[2] + 35
      break;
      
    // Gelijkspel als van de bovenste de if-statement false is en er geen 0 in de array meer is
    } else if (min(vakjes) > 0) {
      wintext = "Gelijkspel!";
    }
  }


  // Vakjes tekenen (9 keer)
  for (let i = 0; i < 9; i++) {
    if (wintext === " " && vakjes[i] === 0 && mouseX >= vakjesPositieX[i] && mouseX <= vakjesPositieX[i] + 70 && mouseY >= vakjesPositieY[i] && mouseY <= vakjesPositieY[i] + 70) {
      fill(195);
      if (hoverSquare[i] === false) {
        hover.stop();
        hover.play();
        hoverSquare[i] = true;
      }
    } else {
      fill(140);
      hoverSquare[i] = false;
    }

    // Rood of blauw aan de hand van de speler
    if (vakjes[i] === 1) {
      fill(255,0,0);
    } else if (vakjes[i] === 2) {
      fill(0,0,255);
    }

    rect(70 + (i * 95) - (floor(i * 0.34) * 285),70 + (floor(i * 0.34) * 95),70,70);
  }

  // Debug mode voor dingen proberen
  if (debug === true) {
  fill(0);
  textSize(30);
  textWrap(CHAR);
  text(vakjes,50,50,80);
  text(wintext, 50, 200)
  text(beurt + " is aan de beurt.", 50, 240)
  text("Gekozen vakje: " + gekozenvakje,50,300);
  }

  // Laat visueel zien wie heeft gewonnen of er een gelijkspel is
  fill(255);
  text(wintext,50,380);

  text("Reset",359,355);
  fill(255,255,0);
  rect(360,360,30,30);
  stroke(255);
  strokeWeight(7);
  line(lijn1,lijn2,lijn3,lijn4);
}