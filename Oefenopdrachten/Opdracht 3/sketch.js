let score = 0;
let textVar = "blank";
let textColor = '#000000';

function setup() {
  createCanvas(400, 200);
  score = ceil(random(0,100));
}

function draw() {
  background(220);

  if (score >= 90) {
    textColor = '#029400';
    textVar = "uitstekend!";
  } else if (score >= 70 && score < 90) {
    textColor = '#d4cd00';
    textVar = "goed gedaan!";
  } else if (score >= 50 && score < 70) {
    textColor = '#ff9d00';
    textVar = "voldoende.";
  } else {
    textColor = '#ff0000';
    textVar = "onvoldoende.";
  }
  
  fill(textColor);
  text("Je score is " + score + ", " + textVar, 50, 50);
}
