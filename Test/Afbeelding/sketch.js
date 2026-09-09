let israel;
let israelFrame = 0;

function preload() {
  israel = loadImage('assets/israel-inform-israel.gif');
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  israelFrame = abs(mouseX / 10);
  image(israel, mouseX - 100, mouseY - 100, 200, 200);
  israel.setFrame(israelFrame);
  //Inform israe
}
