//global
//let ciercleX = 400
let circleX = 150;
let circleY = 150;
let speedX = 4;
let speedY = 2;
let size = 100;
let radius = size / 1;
let passed = true;
let rightColor = 255;
let leftColor = 100;

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("sketch-holder");
}

function draw() {
  let addition = 10;
  background(30);

  // Red decreases as it moves right, Blue increases
  let r = map(circleX, 0, width, 255, 0); // from 255 (orange/red side) down to 0
  let g = map(circleY, 0, height, 120, 100); // slight green transition
  let b = map(circleX, 0, width, 0, 255); // from 0 up to 255 (blue side)

  fill(r, g, b);
  console.log(circleX); // it's going to be 10 the first
  circleX = circleX + speedX;
  circleY = circleY + speedY;
  console.log(circleX); // it's going to be 11;
  // if the x position of the circle is greater than the width of the canvas, reset it to 0

  // X bounce (you already have this)
  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
    speedY = random(-6, 6); // changes the bounce angle
  }
  //please change...
  //console.log(circlex);
  // Y bounce:
  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
    speedX = random(-6, 6); // changes the bounce angle
  }
  circle(circleX, circleY, size);
}
function mousePressed() {
  circleX = 100;
}
