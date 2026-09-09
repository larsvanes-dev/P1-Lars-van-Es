let x = 100;
let greeting = "Hello world!"
let a = 20;
let b = 10;
let optellen;
let aftrekken;
let vermenigvuldigen;
let delen;
let ypos = 80;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Variabelen veranderen
  optellen = a + b;
  aftrekken = a - b;
  vermenigvuldigen = a * b;
  delen = a / b;

  // Alle teksten
  text(x, 20, 20);
  text(greeting, 20, 60);

  // Tekst + waarde van variabele
  text("Optellen: " + optellen, 20, ypos);
  text("Aftrekken: " + aftrekken, 20, ypos + 20);
  text("Vermenigvuldigen: " + vermenigvuldigen, 20, ypos + 40);
  text("Delen: " + delen, 20, ypos + 60);
}
