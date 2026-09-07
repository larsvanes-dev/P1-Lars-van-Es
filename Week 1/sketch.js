function setup() {
  createCanvas(400, 400);
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
  
}
