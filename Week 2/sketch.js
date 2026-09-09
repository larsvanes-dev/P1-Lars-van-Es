function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0,190,255);
  noStroke();

  // De zon
  fill(255,180,0);
  circle(50,70,60);
  fill(255,255,0);
  circle(50,70,45);

  // Bergen
  fill(185);
  triangle(160,340,270,80,360,340);
  fill(120);
  triangle(60,340,140,180,220,340);
  triangle(250,340,340,180,420,340);

  // Weg
  fill(50);
  rect(0, 340, 500, 60);

    // Strepen
    fill(255);
    stroke(255);
    for (let i = 0; i < 8; i++) {
    line(20 + i * 60, 370, 60 + i * 60, 370);
  }

  // Verkeerslicht
  fill(100);
  rect(400,170,50,160);
  fill(130);
  rect(410,330,30,10);
}
