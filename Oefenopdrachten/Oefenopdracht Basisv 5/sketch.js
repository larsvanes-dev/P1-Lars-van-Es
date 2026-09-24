let x = 200;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(30);

  fill(120, 255, 0);
  fill(255, 100, 0);
  ellipse(x, 120, 160);



  ellipse(x, 320, 160);

  x = x + 1;
  x = x + 1;
}