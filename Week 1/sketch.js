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
  fill(0);
  text("Super Mario", 225, 320)
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

    // Knopen
    fill(255,150,0);
    rect(254,290,1,1);
    rect(257,290,1,1);

  // Megaman
  noStroke();

    // Blauw
    fill(80,80,230);

      // Schoen links
      rect(251,363,7,1);
      rect(253,362,5,1);
      rect(255,361,3,1);
      rect(255,360,2,1);

      // Schoen rechts
      rect(263,363,7,1);
      rect(263,362,5,1);
      rect(263,361,3,1);
      rect(265,360,1,1);

      // Broek
      rect(257,357,7,2);
      rect(258,359,4,1);

      // Arm links
      rect(252,352,3,6);

      // Arm rechts
      rect(266,352,3,6);

      // Hoofd
      rect(257,345,9,7);
      rect(257,344,8,6);
      rect(258,343,6,6);

    // Cyaan
    fill(0,255,255);

      // Helm
      rect(263,345,2,1);
      rect(262,343,2,1);
      rect(261,342,2,1);
      rect(256,346,1,3);

      // Lijf
      rect(254,351,4,2);
      rect(255,353,11,4);
      rect(265,352,1,1);
      rect(261,360,4,2);
      rect(262,359,3,1);
      rect(256,359,2,1);
      rect(257,360,3,1);
      rect(258,361,1,1);

    // Roze
    fill(255, 190, 170);
    rect(258,348,9,3);
    rect(259,351,6,2);
    rect(259,347,1,1);

    // Wit
    fill(255);
    rect(260,347,3,4);
    rect(259,348,1,2);
    rect(264,348,1,3);
    rect(265,347,1,3);

    // Zwart
    fill(0);
    rect(264,348,1,2);
    rect(261,348,2,2);
    rect(260,351,4,1);
    text("Megaman", 235, 390)


    // Zwart (Outline)
    fill(0);
    rect(250,364,9,1);
    rect(250,363,1,1);
    rect(251,362,2,1);
    rect(253,361,2,1);
    rect(254,360,1,1);
    rect(255,359,1,1);
    rect(255,355,2,4);
    rect(254,355,1,1);
    rect(256,354,1,1);
    rect(252,358,3,1);
    rect(251,354,1,4);
    rect(252,352,1,2);
    rect(253,351,2,1);
    rect(255,350,2,1);
    rect(256,349,1,1);
    rect(255,346,1,3);
    rect(256,344,1,2);
    rect(257,343,1,1);
    rect(258,342,3,1);
    rect(260,341,3,1);
    rect(263,342,1,1);
    rect(264,343,1,1);
    rect(265,344,1,1);
    rect(266,345,1,7);
    rect(267,351,1,1);
    rect(268,352,1,2);
    rect(269,354,1,4);
    rect(266,358,3,1);
    rect(264,355,2,4);
    rect(264,354,1,1);
    rect(266,355,1,1);
    rect(265,359,1,1);
    rect(266,360,1,2);
    rect(267,361,1,1);
    rect(268,362,2,1);
    rect(270,363,1,1);
    rect(262,364,9,1);
    rect(262,362,1,2);
    rect(261,361,1,1);
    rect(260,360,1,1);
    rect(259,361,1,1);
    rect(258,362,1,2);
    rect(257,351,1,1);
    rect(258,352,1,1);
    rect(259,353,5,1);
    rect(264,352,1,1);
    rect(265,351,1,1);
    rect(261,343,1,1);
    rect(262,344,3,1);
    rect(262,345,1,1);
    rect(263,346,2,1);
}
