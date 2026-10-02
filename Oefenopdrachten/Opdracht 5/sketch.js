let accColor = false;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(1);

  // 10 vierkanten
  for (let i = 0; i < 10; i++) {
    if (i == 6) {
      fill(0,0,255);
    } else {
      fill(255);
    }
    rect(20 + i * 30,20,30,30);
  }

  // 5 cirkels
  for (let i = 0; i < 5; i++) {
    strokeWeight(i * 2);
    circle(360 + i * 35,35,25);
  }
  strokeWeight(1);

  // Rode cirkels
  for (let i = 0; i < 5; i++) {
    fill(255);
    stroke(255,0,0);
    strokeWeight(6);
    circle(400,135,150 - i * 30)
  }
  stroke(0);
  strokeWeight(1);

  // Zwart naar witte vierkantjes
  for (let i = 0; i < 5; i++) {
    fill((255 / 4) * i);
    rect(20,60 + i * 30,30,30);
  }

  // Groene vierkantjes
  let offsetG = 0;
  for (let i = 0; i < 5; i++) {
    fill(0, (255 / 4) * i, 0);
    rect(65 + offsetG,60,15 + i * 15,30);
    offsetG += (i + 1) * 15;
  }

  // Blauwe vierkantjes
  let offset = 0;
  for (let i = 0; i < 5; i++) {
    fill(0, 0, 255 - (i * (255 / 4)));
    rect(65 + offset,105,15 + i * 15,30 + (i * 15));
    offset += (i + 1) * 15;
  }

  // Accordion
  for (let i = 0; i < 21; i++) {
    if (accColor == false) {
      fill(255);
      accColor = true;
    } else {
      fill(190);
      accColor = false;
    }

    let extraMargin = i * 15;
    if (i > 10) {
      extraMargin -= (i - 10) * 30;
    }

    rect(500, 100 + (i * 10), 20 + extraMargin, 10);
  }
  accColor = false;
}
