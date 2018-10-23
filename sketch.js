var myImage;
var mysecImage;
var mySound;
var analyzer;

function preload() {
  // put preload code here
  myImage = loadImage('./assets/mood.jpg');
  mysecImage = loadImage('./assets/volume.png');
  mySound = loadSound("./assets/waves.mp3");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();


}

function draw() {
  background(lerpColor(color('#B2EBF2'), color('#FFCCBC'), frameCount / 100));

  var a = fft.analyze();

  var b = map(a[256], 50, 500, 1, 40);

  imageMode(CENTER);
  image(myImage, width / 2, height / 2, myImage.width, myImage.height);

  push();
  imageMode(CENTER);
  image(mysecImage, width / 2, height / 2, 80 * 0.4 * b, 40 * 0.4 * b);
  pop();
}
