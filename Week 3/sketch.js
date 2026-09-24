// Variabelen
const GEEN_SPELER = 0;
const SPELER_1 = 1;
const SPELER_2 = 2;
const COLOR_ON = 180;
const COLOR_OFF = 0;

let vakjes = [
0, 0, 0,
0, 0, 0,
0, 0, 0
];
let vakjesPositieX = [];
let vakjesPositieY = [];
let beurt = SPELER_1;
let gekozenvakje = 0;
let winningPlayer = 0;
let wintext = " ";
let debug = false;
let bgR = 0;
let bgB = 0;
let effect1;
let effect1x1 = 0;
let effect1x2;
let hoverSquare = [false, false, false, false, false, false, false, false, false];
let hover;
let click;
let lijn1 = -10;
let lijn2 = -10;
let lijn3 = -10;
let lijn4 = -10;
let barfin;
let barfinIsPlaying = false;
let barfinTimer = 0;
let thingsThatBarfinSays = [
  "I miss my wife.",
  "I think I'm gonna win for sure.",
  "I get flashbacks from the war.",
  "I can't see the board.",
  "Which color was me again?",
  "Red reminds me of the commies.",
  "Fancy some rock, paper, scissors instead?",
  "I know you're cheating.",
  "I'm not bad, I'm going easy on you.",
  "Better being an old fart than being you.",
  "I want to nap.",
  "I think this is a great move.",
  "Time for my unbested strategy.",
  "Did you know I have 300 confirmed kills?",
  "I've already won, you just don't know.",
  "You are 12, right? I'm referring to your IQ.",
  "Your last win did not count actually.",
  "Hm...",
  "What are you gonna do now?",
  "Checkmate, I think.",
  "UNO!",
  "Four houses on Berlin please.",
  "A tic-tac-maestro never quits.",
  "An exquisite move, by me.",
  "My wife loved these kinds of games.",
  "Think hard, you might be able to win.",
  "Rats make me crazy.",
  "I hate mondays.",
  "I roll D10.",
  "Bingo.",
  "I call dibs on this square.",
  "Might die of boredom rather than old age.",
  "Like chess, but for my grandson.",
  "I need new glasses."
];
let totalDialogueP = thingsThatBarfinSays.length;
let barfinText = "Good luck, you are never going to beat me in tic-tac-toe.";
let searchingForSquare = false;



function preload() {
  effect1 = loadImage('effect1.png');
  hover = loadSound('hover.mp3');
  click = loadSound('click.wav');
  barfin = loadImage('barfin.png')
}

function mouseReleased() {
  // Bij elk vakje op het speelveld
  for (let i = 0; i < 9; i++) {
    vakjesPositieX[i] = 70 + (i * 95) - (floor(i * 0.34) * 285);
    vakjesPositieY[i] = 70 + (floor(i * 0.34) * 95);
    if (mouseX >= vakjesPositieX[i] && mouseX <= vakjesPositieX[i] + 70 && mouseY >= vakjesPositieY[i] && mouseY <= vakjesPositieY[i] + 70) {
      // Alleen als niemand nog heeft gewonnen
      if (winningPlayer == 0){
        // Verandert waardes in de array aan de hand van de beurt variabele
        if (vakjes[i] === GEEN_SPELER) {
          click.play();
          if (beurt === SPELER_1) {
            vakjes[i] = SPELER_1;
            beurt = SPELER_2;
            if (barfinIsPlaying == true) {
              barfinTimer = 75;
            }
          } else if (barfinIsPlaying == false) {
            vakjes[i] = SPELER_2;
            beurt = SPELER_1;
          }
        }
      }
    }
  }

  RestartButton();
  CheckForWin();
}

function RestartButton() {
  if (mouseX >= 360 && mouseX <= 390 && mouseY >= 360 && mouseY <= 390) {
    for (let i = 0; i < 9; i++) {
      vakjes[i] = 0;
    }
    wintext = " ";
    winningPlayer = 0;
    lijn1 = -10;
    lijn2 = -10;
    lijn3 = -10;
    lijn4 = -10;
    if (barfinIsPlaying == true) {
      beurt = SPELER_1;
      barfinTimer = 0;
      searchingForSquare = false;
    }
  }
}

function setup() {
  createCanvas(400, 400);
  effect1x2 = width;
  beurt = round(random(1, 2));
}

function draw() {
  stroke(0);
  strokeWeight(1);
  background(bgR, 0, bgB);

  tint(255, 70);

  image(effect1, effect1x1, 0, width, height);
  image(effect1, effect1x2, 0, width, height);

  if (beurt === SPELER_1) {
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

  if (barfinIsPlaying == true) {
    tint(255,255);
    image(barfin,355,5,40,40);
    textAlign(RIGHT);
    text(barfinText,350,30);
    textAlign(LEFT);
    strokeWeight(3);
    stroke(0,70,150);
    fill(0,170,255);
    text("Barfin",360,50);
    strokeWeight(1);
    stroke(0);

    if (barfinTimer > 0) {
      barfinTimer -= 1;
    }
    if (barfinTimer > 40) {
      barfinText = "Hm...";
    }

    if (barfinTimer == 1) {
    searchingForSquare = true;
    }

    if (searchingForSquare == true) {
      let findTimer = 0;
      while (findTimer < 6000) {
        let squarePicker = round(random(0, 8));
        if (vakjes[squarePicker] === 0) {
          vakjes[squarePicker] = 2;
          beurt = SPELER_1;
          findTimer = 7000;
          searchingForSquare = false;
          barfinText = thingsThatBarfinSays[round(random(totalDialogueP - 1))];
          CheckForWin();
        }
        if (findTimer > 300) {
          findTimer = 7000;
          console.log("Spel breekt af.")
        }
      }
    }
  }
    
    if (winningPlayer !== GEEN_SPELER) {
    searchingForSquare = false;
    barfinTimer = 0;
    if (winningPlayer == SPELER_1) {
      barfinText = "You got lucky.";
    } else {
      barfinText = "Another win for me!";
    }
  }
  
  fill(67);
  rect(50, 50, 300, 300);

  text(barfinTimer,20,20);

  if (beurt === SPELER_1) {
    bgR = lerp(bgR, COLOR_ON, 0.05);
    bgB = lerp(bgB, COLOR_OFF, 0.05);
  } else {
    bgR = lerp(bgR, COLOR_OFF, 0.05);
    bgB = lerp(bgB, COLOR_ON, 0.05);
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
      fill(255, 0, 0);
    } else if (vakjes[i] === 2) {
      fill(0, 0, 255);
    }

    rect(70 + (i * 95) - (floor(i * 0.34) * 285), 70 + (floor(i * 0.34) * 95), 70, 70);
  }

  // Debug mode voor dingen proberen
  if (debug === true) {
    fill(0);
    textSize(30);
    textWrap(CHAR);
    text(vakjes, 50, 50, 80);
    text(wintext, 50, 200)
    text(beurt + " is aan de beurt.", 50, 240)
    text("Gekozen vakje: " + gekozenvakje, 50, 300);
  }

  // Laat visueel zien wie heeft gewonnen of er een gelijkspel is
  fill(255);
  text(wintext, 50, 380);

  text("Reset", 359, 355);
  fill(255, 255, 0);
  rect(360, 360, 30, 30);
  stroke(255);
  strokeWeight(7);
  line(lijn1, lijn2, lijn3, lijn4);
}

function CheckForWin() {
  
  // ternary operator om de win te checken van de vorige speler
  // omdat de beurt wordt veranderd VOORDAT de win wordt gechecked.
  let playerToCheck = beurt == SPELER_1 ? SPELER_2 : SPELER_1;

    // Rij 1 vol
    if (vakjes[0] === playerToCheck && vakjes[1] === playerToCheck && vakjes[2] === playerToCheck) {
      lijn1 = vakjesPositieX[0] + 35;
      lijn2 = vakjesPositieY[0] + 35;
      lijn3 = vakjesPositieX[2] + 35;
      lijn4 = vakjesPositieY[2] + 35;
      winningPlayer = playerToCheck;

      // Rij 2 vol
    } else if (vakjes[3] === playerToCheck && vakjes[4] === playerToCheck && vakjes[5] === playerToCheck) {
      lijn1 = vakjesPositieX[3] + 35;
      lijn2 = vakjesPositieY[3] + 35;
      lijn3 = vakjesPositieX[5] + 35;
      lijn4 = vakjesPositieY[5] + 35;
      winningPlayer = playerToCheck;

      // Rij 3 vol
    } else if (vakjes[6] === playerToCheck && vakjes[7] === playerToCheck && vakjes[8] === playerToCheck) {
      lijn1 = vakjesPositieX[6] + 35;
      lijn2 = vakjesPositieY[6] + 35;
      lijn3 = vakjesPositieX[8] + 35;
      lijn4 = vakjesPositieY[8] + 35;
      winningPlayer = playerToCheck;

      // Kolom 1 vol
    } else if (vakjes[0] === playerToCheck && vakjes[3] === playerToCheck && vakjes[6] === playerToCheck) {
      lijn1 = vakjesPositieX[0] + 35;
      lijn2 = vakjesPositieY[0] + 35;
      lijn3 = vakjesPositieX[6] + 35;
      lijn4 = vakjesPositieY[6] + 35;
      winningPlayer = playerToCheck;

      // Kolom 2 vol
    } else if (vakjes[1] === playerToCheck && vakjes[4] === playerToCheck && vakjes[7] === playerToCheck) {
      lijn1 = vakjesPositieX[1] + 35;
      lijn2 = vakjesPositieY[1] + 35;
      lijn3 = vakjesPositieX[7] + 35;
      lijn4 = vakjesPositieY[7] + 35;
      winningPlayer = playerToCheck;

      // Kolom 3 vol
    } else if (vakjes[2] === playerToCheck && vakjes[5] === playerToCheck && vakjes[8] === playerToCheck) {
      lijn1 = vakjesPositieX[2] + 35;
      lijn2 = vakjesPositieY[2] + 35;
      lijn3 = vakjesPositieX[8] + 35;
      lijn4 = vakjesPositieY[8] + 35;
      winningPlayer = playerToCheck;

      // Diagonaal 1 vol
    } else if (vakjes[0] === playerToCheck && vakjes[4] === playerToCheck && vakjes[8] === playerToCheck) {
      lijn1 = vakjesPositieX[0] + 35;
      lijn2 = vakjesPositieY[0] + 35;
      lijn3 = vakjesPositieX[8] + 35;
      lijn4 = vakjesPositieY[8] + 35;
      winningPlayer = playerToCheck;

      // Diagonaal 2 vol
    } else if (vakjes[6] === playerToCheck && vakjes[4] === playerToCheck && vakjes[2] === playerToCheck) {
      lijn1 = vakjesPositieX[6] + 35;
      lijn2 = vakjesPositieY[6] + 35;
      lijn3 = vakjesPositieX[2] + 35;
      lijn4 = vakjesPositieY[2] + 35;
      winningPlayer = playerToCheck;

      // Gelijkspel als van de bovenste de if-statement false is en er geen 0 in de array meer is
    } else if (min(vakjes) > 0) {
      wintext = "Gelijkspel!";
      winningPlayer = 0;
      if (barfinIsPlaying == true) {
        barfinTimer = 0;
        barfinText = "A tie! My son used to wear one.";
        searchingForSquare = false;
      }
    }

    if (winningPlayer != 0){
      wintext = "Speler " + playerToCheck + " heeft gewonnen!";
    }
  
}
