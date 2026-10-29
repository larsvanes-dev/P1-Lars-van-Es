const PET_MENU = 0;
const MINIGAME = 1;

const BEER = 0;
const HAPPINESS = 4;
const SLEEP = 5;
const LIVER = 3;

let bierBar = 20;
let gelukBar = 60;
let slaapBar = 0;
let leverBar = 80;

let interactibles = []
let selectedInteractibleCount = 0;

let sleeping = false;
let sleepMultiplier = 1;

let activeScene = MINIGAME;
let activeAnimation = 0;
let actionsActiveTime = 0;

let activeMinigameAnimation = 0;
let activeMinigameAnimationTime = 0;

let miniGameBottles = [];
let miniGameTargets = [];
let miniGameTargetDelayTimer = 0;

function preload() {
  Animations = [
    loadImage('staticPose.png'),
    loadImage('drinkPose.png'),
    loadImage('sleepPose.gif')
  ];
  ObjectSprites = [
    loadImage('bottle.png'),
    loadImage('thrownbottle.gif'),
    loadImage('target.png'),
    loadImage('liver.png'),
    loadImage('smileyTotallyNotVerity.png'),
    loadImage('zZ.png')
  ];
  MinigameDadAnimations = [
    loadImage('minigamePose1.png'),
    loadImage('minigamePose2.png')
  ];
}

function keyReleased() {
  if (keyCode == 49) {
    drinkBeer();
  }
  if (keyCode == 50) {
    gelukBar += 10
  }
  if (keyCode == 51) {
    slaapBar -= 27
  }
  if (keyCode == 52) {
    leverBar += 2
  }
  if (keyCode == 32 && sleeping == false) {
    sleeping = true;
    sleepMultiplier = 0.5;
  } else {
    sleeping = false;
    sleepMultiplier = 1;
  }
  if (keyCode == 77) {
    if (activeScene == PET_MENU) {
      activeScene = MINIGAME;
    } else {
      activeScene = PET_MENU;
    }
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 200; i++) {
    let bottle = {
      spriteIndex: 0,
      x: 0,
      y: 0,
      selectedByMouse: false
    };
    interactibles.push(bottle);
  }
}

function mouseReleased() {
  if (activeScene == MINIGAME && activeMinigameAnimationTime <= 0) {
    activeMinigameAnimationTime = 15;
    let bottle = {
      x: mouseX - 20,
      y: 300
    }
    miniGameBottles.push(bottle);
  }
}

function draw() {
  fill(0);
  text(miniGameTargetDelayTimer, 10, 200);
  background(220);

  // Verander animaties van Deadbeat Dad
  if (sleeping == false) {
    if (actionsActiveTime <= 0) {
      activeAnimation = 0;
    } else {
      activeAnimation = 1;
    }

    if (actionsActiveTime > 0) {
      actionsActiveTime -= 1;
    }
  } else {
    activeAnimation = 2;
  }

  // Pet Menu
  if (activeScene == PET_MENU) {
    image(Animations[activeAnimation], 200, 200, 200, 200);
  }

  // Minigame
  if (activeScene == MINIGAME) {

    // Timer
    miniGameTargetDelayTimer += 1;
    if (miniGameTargetDelayTimer > 200) {
      miniGameTargetDelayTimer = 0;
    }

    // Dad sprites en animaties
    if (activeMinigameAnimationTime > 0) {
      activeMinigameAnimationTime -= 1;
      activeMinigameAnimation = 1;
    } else {
      activeMinigameAnimation = 0;
    }
    stroke(255, 0, 0);
    line(mouseX, 340, mouseX, 100);
    image(MinigameDadAnimations[activeMinigameAnimation], mouseX - 100, 260, 160, 160);

    // Doelwitten maken
    for (let i = 0; i < 3; i++) {
      if (miniGameTargetDelayTimer == 80 + i * 25) {
        let target = {
          x: random(40, width - 40),
          y: 40,
          lifespan: 150
        }
        miniGameTargets.push(target);
      }
    }

    // De gegooide flessen (Fles-objecten worden in de mouseReleased functie gemaakt)
    for (let i = miniGameBottles.length - 1; i > -1; i--) {
      console.log(miniGameBottles[i]);
      // Flessen gaan omhoog
      miniGameBottles[i].y -= 8;
      image(ObjectSprites[1], miniGameBottles[i].x, miniGameBottles[i].y, 50, 50);
      // Verwijder fles als deze buiten het scherm zit
      if (miniGameBottles[i].y < - 50) {
        miniGameBottles.splice(i, 1);
      }
      // Als er targets zijn en de fles onder y = 40 zit
      else if (miniGameBottles[i].y < 40 && miniGameTargets.length > 0) {
        // Voor elk doelwit checken of het midden van de fles object binnen de width en height van een target zit
        for (let b = miniGameTargets.length - 1; b > -1; b--) {
          if (miniGameBottles[i].x + 25 > miniGameTargets[b].x - 30 &&
            miniGameBottles[i].x + 25 < miniGameTargets[b].x + 30) {
            // Beloning + verwijderen
            gelukBar += 1.40;
            miniGameBottles.splice(i, 1);
            miniGameTargets.splice(b, 1);
            // Break de for-loop
            break;
          }
        }
      }
    }

    // De doelwitten
    for (let i = 0; i < miniGameTargets.length; i++) {
      image(ObjectSprites[2], miniGameTargets[i].x - 30, miniGameTargets[i].y - 30, 60, 60);
      miniGameTargets[i].lifespan -= 1;
      if (miniGameTargets[i].lifespan < 0) {
        miniGameTargets.splice(i, 1);
      }
    }
  } else {
    if (miniGameBottles.length > 0) {
      miniGameBottles.splice(0, miniGameBottles.length);
    }
  }

  // Status variabelen (Veranderen elke frame)

  // Bierbar
  if (bierBar > 0) {
    bierBar -= deltaTime * 0.001 * sleepMultiplier;
  }
  if (bierBar > 100) {
    bierBar = 100;
  }

  // Gelukbar
  if (gelukBar > 0) {
    if (bierBar < 60 && sleeping == false) {
      gelukBar -= (deltaTime * 0.0007) + (deltaTime * 0.00001 * slaapBar);
    } else if (sleeping == false) {
      gelukBar += deltaTime * 0.000016 * bierBar;
    }
  }
  if (gelukBar > 100) {
    gelukBar = 100;
  }

  // Slaapbar
  if (slaapBar < 100) {
    if (sleeping == false) {
      slaapBar += deltaTime * 0.0006;
    } else {
      slaapBar -= deltaTime * 0.00075;
    }
    if (slaapBar < 0) {
      slaapBar = 0;
    }
  }
  if (slaapBar > 100) {
    slaapBar = 100;
  }

  if (leverBar > 0) {
    if (bierBar > 80) {
      leverBar -= (deltaTime * 0.00199);
    }
    if (sleeping == false) {
      leverBar -= deltaTime * 0.03 * ((slaapBar * 0.001) * 0.5)
    } else {
      leverBar += deltaTime * 0.0025
    }
  }
  if (leverBar > 100) {
    leverBar = 100;
  }

  // Voedsel
  selectedInteractibleCount = 0;
  if (activeScene == PET_MENU) {
    for (let i = 0; i < interactibles.length; i++) {
      if (mouseIsPressed == true && mouseX > interactibles[i].x - 10 && mouseX < interactibles[i].x + 50 && mouseY > interactibles[i].y - 10 && mouseY < interactibles[i].y + 50 && sleeping == false) {
        interactibles[i].x = mouseX - 20;
        interactibles[i].y = mouseY - 20;
        selectedInteractibleCount += 1;
      } else {
        if (interactibles[i].x + 20 > 250 && interactibles[i].x + 20 < 340 && interactibles[i].y + 20 > 210 && interactibles[i].y + 20 < 390 && actionsActiveTime <= 0) {
          drinkBeer();
          interactibles.splice(i, 1);
          break;
        } else {
          interactibles[i].x = 0 + (i * 50);
          interactibles[i].y = 0;
        }
      }
      image(ObjectSprites[interactibles[i].spriteIndex], interactibles[i].x, interactibles[i].y, 40, 40);
    }
  }

  if (selectedInteractibleCount > 1) {
    fill(0);
    text("x" + selectedInteractibleCount, mouseX + 8, mouseY + 14);
  }

  // Status-bars getekend
  for (let i = 0; i < 4; i++) {
      let a = 0;
      switch (i) {
        case 0:
          a = BEER;
          break;
        case 1:
          a = HAPPINESS;
          break;
        case 2:
          a = SLEEP;
          break;
        case 3:
          a = LIVER;
          break;
      }
      statusBar(a, 20, 40 + i * 45, 30, 20, 5, 20);
    }
}

function drinkBeer() {
  bierBar += 30;
  actionsActiveTime = 120;
}

function statusBar(barType, x, y, iconSize, textVarSize, textMarginX, textMarginY) {
  let barVar = 0;
  let barIcon = 0;
  switch(barType) {
    case BEER:
      barVar = bierBar;
      barIcon = BEER;
      break;
    
    case HAPPINESS:
      barVar = gelukBar;
      barIcon = HAPPINESS;
      break;
    
    case SLEEP:
      barVar = slaapBar;
      barIcon = SLEEP;
      break;
    
    case LIVER:
      barVar = leverBar;
      barIcon = LIVER;
      break;
  }
  image(ObjectSprites[barIcon], x, y, iconSize, iconSize);
  fill(0);
  stroke(255);
  textSize(textVarSize);
  text(round(barVar), x + textMarginX + iconSize, y + textMarginY);
}