const STARTMENU = 0;
const GAMEMENU = 1;
const ENDMENU = 2;

let menuIndex = STARTMENU;
let bgColor = '053bff';
let spinniLogo;
let marlon;
let coverart;
let orbofdreamers;
let correct;
let wrong;
let vraag;
let progress = 1;
let punten = 0;

let BlockPos = [0, 0, 0, 0];

function mouseReleased() {
  // Voor het start menu
  if (menuIndex == STARTMENU) {
    if (mouseX > 310 && mouseX < 490 && mouseY > 420 && mouseY < 520) {
      changeQuestion(1);
      menuIndex = GAMEMENU;
      changeBgColor();
    }
  }
  

  // Voor het eindscherm
  if (menuIndex == ENDMENU) {
    menuIndex = STARTMENU;
    progress = 1;
    punten = 0;
  }
  
  // Tijdens de quiz
  if (menuIndex == GAMEMENU) {
    for (let i = 0; i < 4; i++) {

      // Voor elk antwoordblok, als er op wordt geklikt...
      if (mouseX > BlockPos[i].x && mouseX < BlockPos[i].x + 260 && mouseY > BlockPos[i].y && mouseY < BlockPos[i].y + 140) {
        console.log("Geklikt! Knop is " + i);

        // Als de vraag muziek heeft en speler klikt door stopt de gekozen muziek
        if (vraag.music != undefined) {
          if (vraag.music.isPlaying()) {
            vraag.music.stop();
          }
        }

        // Wijs punten toe als de speler het correct heeft, speelt een geluidje af gebaseerd op of het antwoord goed is of juist niet
        if (i == vraag.correct) {
          punten += 1
          correct.play();
        } else {
          wrong.play();
        }

        // Gaat door met de quiz en verandert de vraag
        progress += 1
        changeQuestion(progress);
        
        // Als de quiz klaar is laat dan het eindscherm zien
        if (progress > 10) {
          menuIndex = ENDMENU;
        }
      }
    }
  }
}

function preload() {
  spinniLogo = loadImage('assets/spinnilogo.gif');
  marlon = loadImage('assets/marlon.png');
  coverart = loadImage('assets/coverart.jpg');
  orbofdreamers = loadSound('assets/orbofdreamers.mp3');
  correct = loadSound('assets/correct.mp3');
  wrong = loadSound('assets/wrong.mp3');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  // Achtergrond verandert met een functie
  background('#' + bgColor);
  changeBgColor();

  // Voor het start menu
  if (menuIndex == STARTMENU) {
    // Logo
    image(spinniLogo,200,-30,400,400);

    // Tekst
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Press the button to start", 400, 375);
    text("Interactive Quiz", 400, 325);

    // Knop
    fill(0, 190, 0);
    rect(400 - 90, 420, 180, 100, 15);
  }

  // Voor het spelscherm
  if (menuIndex == GAMEMENU) {
    // Vraag
    fill(0);
    textAlign(CENTER);
    textSize(25);
    text(vraag.question, 400, 70);

    // Extra Text
    if (vraag.extraText == true) {
      // ^ Variabele hierboven is eigenlijk overbodig, ik heb een snellere manier gevonden die je onder deze if-statement ziet
      textSize(20);
      text(vraag.extraTextVar,400,120);
    }

    // Afbeelding (Waar toepasselijk)
    if (vraag.img != undefined) {
      image(vraag.img, 325 ,120, 150, 150);
    }
    // Muziek (Waar toepasselijk)
    if (vraag.music != undefined) {
      if (vraag.music.isPlaying()) {
      } else {
      vraag.music.play();
      }
    }

    // Antwoordblokken
    createAnswerBoxes(90, 290);
  }
  
  // Voor het eindscherm
  if (menuIndex == ENDMENU) {
    fill(255);
    textSize(30);
    text("You have scored...", 400, 100);
    textSize(70);
    text(punten, 400, 200);
    textSize(50);
    text("Points!", 400, 280);
    textSize(30);
    text("Click anywhere to go back to the start menu.", 400, 450)
  }
}

// Verandert de kleur van de achtergrond
function changeBgColor() {
  if (menuIndex == STARTMENU) {
    bgColor = '053bff';
  } else if (menuIndex == GAMEMENU) {
    bgColor = '92f0f7';
  } else if (menuIndex == ENDMENU) {
    bgColor = '31186a';
  }
}

// Maakt antwoordvakjes aan
function createAnswerBoxes(x, y) {
  for (let i = 0; i < 4; i++) {
    // Deze variabelen zijn margins
    let extraDistanceX = 0;
    let extraDistanceY = 0;
    fill(0, 0, 230);

    // Wijs waardes voor de margins toe aan de hand van welk vakje het is
    if (i == 1) {
      extraDistanceX = 360;
    } else if (i == 2) {
      extraDistanceY = 160;
    } else if (i == 3) {
      extraDistanceX = 360;
      extraDistanceY = 160;
    }
    rect(x + extraDistanceX, y + extraDistanceY, 260, 140);
    fill(255);
    textSize(20);

    // Zet antwoorden neer
    text(vraag.answers[i], 223 + extraDistanceX, 370 + extraDistanceY)

    // Slaat waardes voor positie op in de BlockPos variabele zodat erop geklikt kan worden met de muis
    let myPos = {
      x: 90 + extraDistanceX,
      y: 290 + extraDistanceY
    }
    BlockPos[i] = myPos;
  }
}

// Verander vraag
function changeQuestion(x) {
  // Origineel wou ik switch() gebruiken, maar vanwege krappe tijd ben ik hier niet aan toe gekomen

  // Vraag 1
  if (x == 1) {
    vraag = {
      question : "In which year was the first LittleBigPlanet game released?",
      answers : ["2011", "2014", "2008", "2009"],
      correct : 2,
      
      // Deze variabele hierondig is onnodig, zie regel 119, te laat om te veranderen!
      extraText : false
    }
  }

  // Vraag 2
  if (x == 2) {
    vraag = {
      question : "What name was used at the beginning of the game\'s development?",
      answers : ["Craftworld", "LittleBigLand", "Dreams", "PS Level Creator"],
      correct : 0,
      extraText : false
    }
  }

  // Vraag 3
  if (x == 3) {
    vraag = {
      question : "Which of these locations does not exist in any of the games?",
      answers : ["Da Vinci\'s Hideout", "La Marionetta", "The Gardens", "Jacob\'s Well"],
      correct : 3,
      extraText : false
    }
  }

  // Vraag 4
  if (x == 4) {
    vraag = {
      question : "What character said this line?",
      answers : ["Avalon Centrifuge", "Colonel Flounder", "The Collector", "Clide Handforth"],
      correct : 1,
      extraText : true,
      extraTextVar : "\"A true Carnivalian is never truly lost, just misplaced.\""
    }
  }

  // Vraag 5
  if (x == 5) {
    vraag = {
      question : "Which celebrity voiced a character in the game?",
      answers : ["Stephen Fry", "Rick May", "Jack Black", "Justin Bieber"],
      correct : 0,
      extraText : false
    }
  }

  // Vraag 6
  if (x == 6) {
    vraag = {
      question : "What character is shown in this image?",
      answers : ["Toggle", "Marlon Random", "The King", "Pinky"],
      correct : 1,
      extraText : false,
      img : marlon
    }
  }

  // Vraag 7
  if (x == 7) {
    vraag = {
      question : "Who composed this song from the game soundtrack?",
      answers : ["Nina Humphreys", "Jim Noir", "Kenneth Young", "Daniel Pemberton"],
      correct : 3,
      extraText : false,
      img : coverart,
      music : orbofdreamers
    }
  }

  // Vraag 8
  if (x == 8) {
    vraag = {
      question : "What other thing did Daniel Pemberton compose music for?",
      answers : ["Coraline", "Uncharted", "Spiderverse", "Terrifier"],
      correct : 2,
      extraText : false
    }
  }

  // Vraag 9
  if (x == 9) {
    vraag = {
      question : "What is the name of the game\'s hub level?",
      answers : ["The Infomoon", "The Puter", "The Pod", "The Imagisphere"],
      correct : 2,
      extraText : false
    }
  }

  // Vraag 10
  if (x == 10) {
    vraag = {
      question : "Which studio made LittleBigPlanet?",
      answers : ["Fatshark", "Media Molecule", "Ubisoft", "United Front Games"],
      correct : 1,
      extraText : false
    }
  }
}