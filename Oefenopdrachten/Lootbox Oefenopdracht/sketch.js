let box1;
let box2;

let boxX = 100;
let boxY = 180;
let lidX = 100;
let lidY = 180;

let cardX = [0,0,0,0];
let cardY = [0,0,0,0];
let cardItemID = [0,0,0,0];

// Kaarten
let card_back;
let card_67;
let card_tuff;

function preload() {
  box1 = loadImage('box1.png');
  box2 = loadImage('box2.png');
  card_back = loadImage('cardback.png');
  card_67 = loadImage('card_67.png');
  card_tuff = loadImage('card_tuff.png');
  card_druif = loadImage('card_druif');
  card_peace = loadImage('card_peace.png');
  card_dababy = loadImage('card_dababy.png');
}

function keyReleased() {
  if (keyCode === ENTER) {
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 1; i < 5; i++) {
    cardItemID[i] = round(random(1,2));
  }
}

function draw() {
  background(220);
  let cardImage = [card_back,card_tuff,card_67,card_druif,card_peace,card_dababy];
  image(box1, boxX,boxY,200,200);
  image(box2, lidX,lidY,200,200);
  lidY = lerp(lidY, -300, 0.018);
  boxY = lerp(boxY, 350, 0.018);

  for (let i = 1; i < 5; i++) {

    image(cardImage[cardItemID[i]], -90 + i * 100, 100, 80, 120);
  }
}
