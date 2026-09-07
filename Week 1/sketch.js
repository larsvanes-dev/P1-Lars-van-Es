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
}
