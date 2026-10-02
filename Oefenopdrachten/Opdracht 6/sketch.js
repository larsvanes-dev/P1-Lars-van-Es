let getallen;
let optellen1 = [3, 55, 93, 20, 102, 6];
let optellen2 = [14, 22, 80, 5];
let squares = ['#', '#', '#', '#', '#', ];
let squareOpties = '0123456789ABCDEF';

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 5; i++) {
    for (r = 0; r < 6; r++) {
      squares[i] += random(squareOpties.split(''));
    }
  }
}

function draw() {
  background(220);
  textSize(12);

  let kleuren = ["red", "green", "blue", "purple", "yellow"];

  // Tekstkleuren
  for (let i = 0; i < 5; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 30, 30 + i * 15);
  }

  // Tekstkleuren 2
  kleuren.shift();
  kleuren.push("red");
  for (let i = 0; i < 5; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 30, 120 + i * 15);
  }

  // Tekstkleuren 3
  kleuren.splice(1,2);
  for (let i = 0; i < 3; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 30, 210 + i * 15);
  }

  // Getallen 1
  getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  for (let i = getallen.length; i > -1; i--) {
    if (getallen[i] >= 300) {
      getallen.splice(i,1);
    }
  }

  fill(0);
  for (let i = 0; i < getallen.length; i++) {
    text(getallen[i], 100, 30 + 15 * i);
  }

  // Getallen 2
  let optellenTotaal = 0;
  let optellenLength = 0;

  for (let r = 1; r < 3; r++) {
    if (r == 1) {
      optellenLength = optellen1.length;
    } else {
      optellenLength = optellen2.length;
    }
    for (let i = 0; i < optellenLength; i++) {
      if (r == 1) {
        optellenTotaal += optellen1[i];
      } else if (r = 2) {
        optellenTotaal += optellen2[i];
      }
    }
  }

  textSize(26);
  text(optellenTotaal,100,120);

  // Letters tellen
  let tekst = "Overheidsfinancieringstekort";
  let tekstTellen = 0;
  for (i = 0; i < tekst.length; i++) {
    if (tekst.charAt(i) == "e") {
      tekstTellen += 1;
    }
  }
  text(tekstTellen + "x",100,150);

  // Tekstkleuren 4
  kleuren.push("blue");
  kleuren.push("purple");
  kleuren.sort();
  textSize(12);
  for (i = 0; i < 5; i++) {
    fill(kleuren[i]);
    text(kleuren[i], 100, 180 + i * 15);
  }

  // Vormen
  for (i = 0; i < 5; i++) {
    fill(squares[i]);
    rect(100 + i * 30,260,30,30);
  }
  
  // Delen

}
