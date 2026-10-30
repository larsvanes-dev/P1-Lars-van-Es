const PET_MENU = 0;
const MINIGAME = 1;

let minigameKnop;
let slaapKnop;
let koopKnop;
let koopMedicijnKnop;
let saveKnop;
let clearKnop;
let stoelKnop;
let muurKnop;

const BEER = 0;
const HAPPINESS = 4;
const SLEEP = 5;
const LIVER = 3;
const MONEY = 6;

let bieren = {
  x: 5,
  y: 5,
  sizeVar: 35,
  amount: 2,
  selected: false
}
let paracetamollen = {
  x: 45,
  y: 5,
  sizeVar: 35,
  amount: 0,
  selected: false
}

let bierenAantalOpslaan;
let paracetamollenAantalOpslaan;

let bierBar = 20;
let gelukBar = 60;
let slaapBar = 0;
let leverBar = 80;

let money = 0;

let sleeping = false;
let sleepMultiplier = 1;

let activeScene = PET_MENU;
let activeAnimation = 0;
let actionsActiveTime = 0;

let activeMinigameAnimation = 0;
let activeMinigameAnimationTime = 0;

let miniGameBottles = [];
let miniGameTargets = [];
let miniGameTargetDelayTimer = 0;

let roomDecoration1 = 0;
let roomDecoration2 = 0;

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
    loadImage('zZ.png'),
    loadImage('money.png'),
    loadImage('paracetamol.png')
  ];
  MinigameDadAnimations = [
    loadImage('minigamePose1.png'),
    loadImage('minigamePose2.png')
  ];
  RoomSprites = [
    loadImage('livingroom.png'),
    loadImage('livingroom-chair.png'),
    loadImage('livingroom-comfychair.png'),
    loadImage('livingroom-darts.png'),
    loadImage('livingroom-window.png')
  ]
}

// Niet belangrijk meer!! Is voor testen!
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

// Alle buttons maken en dataopslag laden
function setup() {
  createCanvas(400, 400);
  minigameKnop = createButton('Minigame');
  minigameKnop.position(0,400);
  minigameKnop.mousePressed(switchScene);

  slaapKnop = createButton('Slapen');
  slaapKnop.position(80,400);
  slaapKnop.mousePressed(goToSleep);

  stoelKnop = createButton('Verander stoel');
  stoelKnop.position(0,420);
  stoelKnop.mousePressed(changeChair);

  muurKnop = createButton('Verander muurdecoratie');
  muurKnop.position(0,440);
  muurKnop.mousePressed(changeWall);

  saveKnop = createButton('Opslaan');
  saveKnop.position(0,460);
  saveKnop.mousePressed(saveAll);

  saveKnop = createButton('Reset opslagdata');
  saveKnop.position(0,490);
  saveKnop.mousePressed(clearAll);

  koopKnop = createButton('Koop bier (15 muntjes)');
  koopKnop.position(160,400);
  koopKnop.mousePressed(buyBeer);

  koopMedicijnKnop = createButton('Koop paracetamol (25 muntjes)');
  koopMedicijnKnop.position(160,440);
  koopMedicijnKnop.mousePressed(buyMedicine);

  bierBar = getItem("bierBar");
  if(bierBar == null) {
    bierBar = 20;
  }
  gelukBar = getItem("gelukBar");
  if(gelukBar == null) {
    gelukBar = 40;
  }
  slaapBar = getItem("slaapBar");
  if(slaapBar == null) {
    slaapBar = 0;
  }
  leverBar = getItem("leverBar");
  if(leverBar == null) {
    leverBar = 80;
  }
  money = getItem("money");
  if(money == null) {
    money = 0;
  }
  bieren.amount = getItem("bieren");
  if(bieren.amount == null) {
    bieren.amount = 2;
  }
  paracetamollen.amount = getItem("paracetamollen");
  if(paracetamollen.amount == null) {
    paracetamollen.amount = 0;
  }
  roomDecoration1 = getItem("roomDecoration1");
  if(roomDecoration1 == null) {
    roomDecoration1 = 0;
  }
  roomDecoration2 = getItem("roomDecoration2");
  if(roomDecoration2 == null) {
    roomDecoration2 = 0;
  }
}

function mousePressed() {
  // Als op bier geklikt wordt dragt hij met de cursor mee
  if (
    mouseX > bieren.x &&
    mouseX < bieren.x + bieren.sizeVar &&
    mouseY > bieren.y &&
    mouseY < bieren.y + bieren.sizeVar &&
    bieren.amount > 0
  ) {
    bieren.selected = true;
  }

  // Zelfde voor paracetamollen
  if (
    mouseX > paracetamollen.x &&
    mouseX < paracetamollen.x + paracetamollen.sizeVar &&
    mouseY > paracetamollen.y &&
    mouseY <  paracetamollen.y + paracetamollen.sizeVar &&
    paracetamollen.amount > 0
  ) {
    paracetamollen.selected = true;
  }
}

function mouseReleased() {
  // Voor minigame: Gooi een fles
  if (activeScene == MINIGAME && activeMinigameAnimationTime <= 0 && mouseY < 400) {
    activeMinigameAnimationTime = 15;
    slaapBar += 0.3
    let bottle = {
      x: mouseX - 20,
      y: 300
    }
    miniGameBottles.push(bottle);
  }

  // Voor bieren en paracetamollen: Laat los
  if (bieren.selected == true) {
    bieren.selected = false;
  }
  if (paracetamollen.selected) {
    paracetamollen.selected = false;
  }
}

function draw() {
  fill(0);
  text(miniGameTargetDelayTimer, 10, 200);
  background(255);

  // Verander animaties van Deadbeat Dad
  if (sleeping == false) {
    minigameKnop.show();
    if (actionsActiveTime <= 0) {
      activeAnimation = 0;
    } else {
      activeAnimation = 1;
    }

    if (actionsActiveTime > 0) {
      actionsActiveTime -= 1;
    }
  } else {
    minigameKnop.hide();
    activeAnimation = 2;
  }

  // Pet Menu
  if (activeScene == PET_MENU) {
    slaapKnop.show();

    // De kamer zelf
    image(RoomSprites[0],0,0,width,height);

    // Stoel en muurdecoratie (Gedaan met modulo)
    image(RoomSprites[1 + (roomDecoration1 % 2)],0,0,width,height);
    image(RoomSprites[3 + (roomDecoration2 % 2)],0,0,width,height);

    // Sprite van Dad
    image(Animations[activeAnimation], 200, 200, 200, 200);
  }

  // Minigame
  if (activeScene == MINIGAME) {
    slaapKnop.hide();

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
            money += 1;
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

      // Verwijder doelwit als de lifespan voorbij is (Geen punten!)
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
  if (bierBar >= 0) {
    bierBar -= deltaTime * 0.001 * sleepMultiplier;
  }
  if (bierBar > 100) {
    bierBar = 100;
  }

  // Gelukbar
  if (gelukBar >= 0) {
    if (bierBar < 60 && sleeping == false) {
      gelukBar -= (deltaTime * 0.0007) + (deltaTime * 0.00001 * slaapBar);
    } else if (sleeping == false) {
      gelukBar += deltaTime * 0.000016 * bierBar;
    }
    if (bierBar <= 0) {
      gelukBar -= deltaTime * 0.007;
    }
  }
  if (gelukBar > 100) {
    gelukBar = 100;
  }

  // Slaapbar
  if (slaapBar <= 100) {
    if (sleeping == false) {
      slaapBar += deltaTime * 0.0006;
    } else {
      slaapBar -= deltaTime * 0.00225;
    }
    if (slaapBar < 0) {
      slaapBar = 0;
    }
  }
  if (slaapBar > 100) {
    slaapBar = 100;
  }

  // Leverbar
  if (leverBar >= 0) {
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

  if (activeScene == PET_MENU) {
    // Voedsel (Bier slepen)

    // Volg muis
    if (bieren.selected == true) {
      bieren.x = mouseX - (bieren.sizeVar / 2);
      bieren.y = mouseY - (bieren.sizeVar / 2);

    // Detecteer of bier op de sprite van Deadbeat Dad zit en geef uitkomst
    } else if (
      bieren.x + (bieren.sizeVar / 2) > 250 &&
      bieren.x + (bieren.sizeVar / 2) < 340 &&
      bieren.y + (bieren.sizeVar / 2) > 210 &&
      bieren.y + (bieren.sizeVar / 2) < 390) {
      drinkBeer();
      bieren.x = 5;
      bieren.y = 5;
      bieren.amount -= 1;
    } else {
      bieren.x = 5;
      bieren.y = 5;
    }

    // Sprite is zichtbaar als er bier is
    if (bieren.amount > 0) {
    image(ObjectSprites[0], bieren.x, bieren.y, bieren.sizeVar, bieren.sizeVar);
    }

    // Nummer als er meer dan één bier is
    if (bieren.amount > 1) {
      fill(255);
      strokeWeight(2);
      stroke(0);
      textSize(12);
      text(bieren.amount + "x", bieren.x + 10, bieren.y + 20);
    }

    // Medicijn (Paracetamol slepen) (Alle comments voor de bieren geldt ook voor paracetamollen)
    if (paracetamollen.selected == true) {
      paracetamollen.x = mouseX - (paracetamollen.sizeVar / 2);
      paracetamollen.y = mouseY - (paracetamollen.sizeVar / 2);
    } else if (
      paracetamollen.x + (paracetamollen.sizeVar / 2) > 250 &&
      paracetamollen.x + (paracetamollen.sizeVar / 2) < 340 &&
      paracetamollen.y + (paracetamollen.sizeVar / 2) > 210 &&
      paracetamollen.y + (paracetamollen.sizeVar / 2) < 390) {
      takeMeds();
      paracetamollen.x = 45;
      paracetamollen.y = 5;
      paracetamollen.amount -= 1;
    } else {
      paracetamollen.x = 45;
      paracetamollen.y = 5;
    }

    if (paracetamollen.amount > 0) {
    image(ObjectSprites[7], paracetamollen.x, paracetamollen.y, paracetamollen.sizeVar, paracetamollen.sizeVar);
    }
    if (paracetamollen.amount > 1) {
      fill(255);
      strokeWeight(2);
      stroke(0);
      textSize(12);
      text(paracetamollen.amount + "x", paracetamollen.x + 10, paracetamollen.y + 20);
    }
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
  statusBar(MONEY, 5, 360, 30, 20, 5, 22);
}

// Alle functies (Vanzelfsprekend)
function saveAll() {
  storeItem("bierBar", bierBar);
  storeItem("gelukBar", gelukBar);
  storeItem("slaapBar", slaapBar);
  storeItem("leverBar", leverBar);
  storeItem("money", money);
  bierenAantalOpslaan = bieren.amount;
  paracetamollenAantalOpslaan = paracetamollen.amount;
  storeItem("bieren", bierenAantalOpslaan);
  storeItem("paracetamollen", paracetamollenAantalOpslaan);
  storeItem("roomDecoration1", roomDecoration1);
  storeItem("roomDecoration2", roomDecoration2);
}

function clearAll() {
  clearStorage();
  bierBar = 20;
  gelukBar = 60;
  slaapBar = 0;
  leverBar = 80;
  bieren.amount = 2;
  paracetamollen.amount = 0;
  money = 0;
  roomDecoration1 = 0;
  roomDecoration2 = 0;
}

function drinkBeer() {
  bierBar += 30;
  actionsActiveTime = 120;
}

function takeMeds() {
  leverBar += 50;
}

function buyBeer() {
  if (money >= 15) {
    bieren.amount += 1;
    money -= 15
  }
}

function buyMedicine() {
  if (money >= 25) {
    paracetamollen.amount += 1;
    money -= 25
  }
}

function switchScene() {
  if (activeScene == PET_MENU) {
    activeScene = MINIGAME;
  } else {
    activeScene = PET_MENU
    miniGameBottles.splice(0,miniGameBottles.length);
    miniGameTargets.splice(0,miniGameTargets.length);
  }
}

function goToSleep() {
  if (sleeping == false) {
    sleeping = true;
    sleepMultiplier = 0.5;
  } else {
    sleeping = false;
    sleepMultiplier = 1;
  }
}

function changeWall() {
  roomDecoration2 += 1;
}

function changeChair() {
  roomDecoration1 += 1;
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

    case MONEY:
      barVar = money;
      barIcon = MONEY;
      break;
  }
  image(ObjectSprites[barIcon], x, y, iconSize, iconSize);
  fill(0);
  stroke(255);
  strokeWeight(1);
  textSize(textVarSize);
  text(round(barVar), x + textMarginX + iconSize, y + textMarginY);
}