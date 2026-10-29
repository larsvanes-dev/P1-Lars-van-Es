let music;
let musicIsPlaying = false;
let lamps;

function preload() {
  music = loadSound('essentials/peak-music.mp3');
  lamps = loadImage('essentials/absolute-peak.gif');
}

function setup() {
  createCanvas(600, 400);
}

function keyReleased() {
  if (keyCode == 32) {
    if (musicIsPlaying == false) {
      music.play();
      musicIsPlaying = true;
    } else {
      music.stop();
      musicIsPlaying = false;
    }
  }
}

function draw() {
  background(220);
  if (musicIsPlaying == true) {
    image(lamps, 0, 0, width, height);
  }
}
