let randomPos = [];
let verityFace;
let verities = [];
let getallen = [];

function optellen(getal1, getal2) {
  return getal1 + getal2;
}

function aftrekken(getal1, getal2) {
  return getal1 - getal2;
}

function vermenigvuldigen(getal1, getal2) {
  return getal1 * getal2;
}

function delen(getal1, getal2) {
  return getal1 / getal2;
}

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
  for (let i = 0; i < 5; i++) {
    let dat = {
      x: round(random(10, 790)),
      y: round(random(10, 390)),
      straal: round(random(15,90))
    }
    verities.push(dat);
  }

  let rekenen = 0;
  rekenen = optellen(8,4);
  getallen.push(rekenen);
  rekenen = aftrekken(8,4);
  getallen.push(rekenen);
  rekenen = vermenigvuldigen(8,4);
  getallen.push(rekenen);
  rekenen = delen(8,4);
  getallen.push(rekenen);
}

function draw() {
  background(220);

  for (let i = 0; i < 3; i++) {
    tekenHuis(randomPos[i].x,randomPos[i].y);
  }

  for (let i = 0; i < verities.length; i++) {
    verity(verities[i].x, verities[i].y, verities[i].straal);
  }

  rechthoek(720,20,60,40);

  lijn(30, 380, 290, 250);

  mouseText("Hey, it\'s me, it\'s Verity!", 30, 255, 220, 0)

  for (let i = 0; i < 4; i++) {
    let tekst = "Optellen: ";
    if (i == 1) {
      tekst = "Aftrekken: ";
    } else if (i == 2) {
      tekst = "Vermenigvuldigen: ";
    } else if (i == 3) {
      tekst = "Delen: ";
    }
    fill(0);
    textSize(14);
    text(tekst + getallen[i],30,30 + 20 * i);
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

function rechthoek(x, y, breedte, hoogte) {
  fill(255,190,255);
  rect(x, y, breedte, hoogte);
}

function lijn(x, y, x2, y2) {
  line(x, y, x2, y2);
}

function mouseText(tekst, tekstGrootte, tekstKleur1, tekstKleur2, tekstKleur3) {
  fill(tekstKleur1, tekstKleur2, tekstKleur3);
  textSize(tekstGrootte);
  text(tekst, mouseX, mouseY);
}


