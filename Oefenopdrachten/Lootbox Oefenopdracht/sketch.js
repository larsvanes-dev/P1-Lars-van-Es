let box1;
let box2;

let boxX = 100;
let boxY = 180;
let lidX = 100;
let lidY = 180;

let cardX = [160,160,160,160];
let cardY = [240,240,240,240];
let cardXsize = [80,80,80,80];
let cardItemID = [0,0,0,0];
let cardRevealed = [false,false,false,false];
let cardRevealTimer = 0;

// Kaarten
let card_back;
let card_67;
let card_tuff;

let mango;
let sixseven;
let lapeace;
let druif;
let lesgooo;

function preload() {
  box1 = loadImage('box1.png');
  box2 = loadImage('box2.png');
  card_back = loadImage('cardback.png');
  card_67 = loadImage('card_67.png');
  card_tuff = loadImage('card_tuff.png');
  card_druif = loadImage('card_druif.png');
  card_peace = loadImage('card_peace.png');
  card_dababy = loadImage('card_dababy.png');
  mango = loadSound('mango.mp3');
  sixseven = loadSound('67.mp3');
  lapeace = loadSound('lapeace.mp3');
  druif = loadSound('druif.mp3');
  lesgooo = loadSound('lesgooo.mp3');
}

function keyReleased() {
  if (keyCode === ENTER) {
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4; i++) {
    cardItemID[i] = round(random(1,5));
  }
}

function draw() {
  background(220);
  cardRevealTimer += 1;
  let cardImage = [card_back,card_tuff,card_67,card_druif,card_peace,card_dababy];
  image(box1, boxX,boxY,200,200);
  image(box2, lidX,lidY,200,200);
  lidY = lerp(lidY, -300, 0.018);
  boxY = lerp(boxY, 350, 0.018);

  for (let i = 0; i < 4; i++) {
    let cardImageID = card_back;
    if (cardRevealTimer > 110 + i * 100) {
      cardRevealed[i] = true;
    }
    if (cardRevealTimer > 90 + i * 100 && cardRevealTimer < 110 + i * 100) {
      cardXsize[i] = lerp(cardXsize[i], 0, 0.3);
    } else {
      cardXsize[i] = lerp(cardXsize[i], 80, 0.1);
    }
    if (cardRevealed[i] === true) {
      cardImageID = cardImage[cardItemID[i]];
    } 

    if (cardRevealTimer === 110 + i * 100) {
      if (cardItemID[i] === 1) {
        mango.play();
      }
      if (cardItemID[i] === 2) {
        sixseven.play();
      }

      if (cardItemID[i] === 3) {
          druif.play();
      }
      if (cardItemID[i] === 4) {
            lapeace.play();
          }
          if (cardItemID[i] === 5) {
              lesgooo.play();
            }
          }
        
      
    
  

    image(cardImageID, cardX[i] - 40 + (80 - cardXsize[i] / 2), cardY[i], cardXsize[i], 120);
    cardX[i] = lerp(cardX[i], 10 + i * 100, 0.05);
    cardY[i] = lerp(cardY[i], 100, 0.05);
  }
}
