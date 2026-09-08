function setup() {
  createCanvas(1600, 1600);
}

function draw() {
  background(220);

  // Dit is de tekst
  fill(0,0,0);
  text("Lars van Es", 5, 10);

  // Dit is de vlag
  noStroke();
  fill(255,255,255);
  rect(5, 15, 120, 90);
  fill(255,0,0);
  rect(5, 15, 120, 30);
  fill(0,0,255);
  rect(5, 75, 120, 30);

  // Dit is het schaakbord
  stroke(0,0,0);
  fill(0,0,0);
  rect(5, 120, 90, 90);
  noStroke();
  fill(255,255,255);
  rect(35, 120, 30, 30);
  rect(65, 150, 30, 30);
  rect(5, 150, 30, 30);
  rect(35, 180, 30, 30);

  // Dit is het huisje
  stroke(0,0,0)
  noFill();
  rect(5, 240, 80, 100);
  fill(0,0,0);
  line(5, 240, 45, 210);
  line(85, 240, 45, 210);

  // Dit is het verkeerslicht
  noStroke();
  fill(50,50,50);
  rect(180,130,20,30);
  rect(170,10,40,120);
  // Cirkel 1
  fill(255,0,0);
  circle(190,35,20);
  // Cirkel 2
  fill(255,160,0);
  circle(190,70,20);
  // Cirkel 3
  fill(0,255,0);
  circle(190,105,20);

  // Dit is de dobbelsteen
  stroke(0,0,0);
  fill(190);
  rect(180,180,90,90);
  fill(0);
  circle(200,200,20);
  circle(225,225,20);
  circle(250,250,20);

  // "SO RETRO"
  noFill();
  rect(250,280,16,16);
  noStroke();

    // Oranje
    fill(255,150,0);
    rect(253,282,6,5);
    rect(251,283,10,3);
    rect(261,284,1,1);
    rect(259,286,1,1);
    rect(250,290,12,3);

    // Groen
    fill(120,120,60);
    rect(251,283,1,3);
    rect(252,285,1,1);
    rect(252,282,3,1);
    rect(253,283,1,2);
    rect(254,284,1,1);
    rect(257,282,1,2);
    rect(257,285,4,1);
    rect(258,284,1,1);
    rect(251,288,10,2);
    rect(252,287,6,1);
    rect(250,289,12,1);
    rect(252,290,8,1);
    rect(250,295,4,1);
    rect(251,294,3,1);
    rect(258,295,4,1);
    rect(258,294,3,1);

    // Rood
    fill(255,0,0);
    rect(253,280,5,1);
    rect(252,281,9,1);
    rect(253,290,6,3);
    rect(252,292,3,2);
    rect(257,292,3,2);
    rect(254,287,1,3);
    rect(257,288,1,2);
    rect(255,289,2,1);

    // Knoppen
    fill(255,150,0);
    rect(254,290,1,1);
    rect(257,290,1,1);

}
