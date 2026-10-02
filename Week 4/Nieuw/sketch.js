// Array slaat op hoeveel 'dots' er zijn
let dots = [];

// Geeft aan hoe transparent de tekst links bovenin moet zijn
let instructionTextAlpha = 255;

function setup() {
  createCanvas(800, 600);
}

// Als er op backspace wordt gedrukt worden 4 tot 12 nieuwe dots aangemaakt
function keyReleased() {
  if (keyCode === 8) {
    for (let i = 0; i < round(random(4,12)); i++) {
      // In deze variabele zit alle gegevens van elke dot, onder andere posities en de kleur
      let dot = {
        x: -10,
        y: round(random(0, height)),
        r: round(random(180, 255)),
        g: round(random(180, 255)),
        b: round(random(180, 255)),

        // Deze variabele wijst een willekeurige snelheid aan per bal
        xConstVelo : random(0.5, 1.8),

        // De y-positie verandert met deze
        yEndpoint : 0,

        // De kleur van de stroke()
        stkCol: 0
      }
      dots.push(dot);
    }
  }
}

function draw() {
  background(40);
  // Voor alle dots die actief zijn
  for (i = 0; i < dots.length; i++) {

    // Willekeurige y-positie waar een dot naar toe moet schuiven, verandert elke frame dus geeft een wiebel-effect
    dots[i].yEndpoint = random(-150,height + 150);

    // y verandert met een lerp afhankelijk van de .yEndpoint variabele
    dots[i].y = lerp(dots[i].y, dots[i].yEndpoint, 0.002);

    // De kleur van de stroke() verandert afhankelijk van de afstand tussen een dot en de positie van de muis
    dots[i].stkCol = lerp(dots[i].stkCol, 6400 / (dist(dots[i].x, dots[i].y, mouseX, mouseY)), 0.05);

    // Als de dots ver genoeg buiten het scherm gaan worden ze verwijderd
    if (dots[i].x > width + 10) {
      dots.splice(i,1);
      continue;
    }

    // Tekent een 'dot'
    strokeWeight(5);
    stroke(dots[i].stkCol);
    fill(dots[i].r,dots[i].g,dots[i].b);
    circle(dots[i].x,dots[i].y,20);

    // Dots bewegen constant aan de .xConstVelo variabele
    dots[i].x += dots[i].xConstVelo;

    let newVeloX = 0;
    let newVeloY = 0;

    // Verandering in positie als de muiswijzer dichtbij komt
    if (dist(dots[i].x, dots[i].y, mouseX, mouseY) < 120) {
      newVeloX = (140 / (dist(dots[i].x, dots[i].y, mouseX, mouseY))) * 0.1;
      newVeloY = (140 / (dist(dots[i].x, dots[i].y, mouseX, mouseY))) * 0.1;
      if (mouseX > dots[i].x) {
        newVeloX = newVeloX * -1;
      }
      if (mouseY > dots[i].y) {
        newVeloY = newVeloY * -1;
      }
    }
    dots[i].x += newVeloX;
    dots[i].y += newVeloY;
  }

  // Laat instructie zien als er geen dots zijn
  if (dots.length > 0) {
    instructionTextAlpha = lerp(instructionTextAlpha, 0, 0.1);
  } else {
    instructionTextAlpha = lerp(instructionTextAlpha, 255, 0.1);
  }

  // Teken instructie
  noStroke();
  fill(255,255,255,instructionTextAlpha);
  text("Backspace to spawn dots.", 30, 30);
}
