var halfWidth;
var halfHeight;
// var gridAngle = 70;
// var randomPositionW;
// var randomPositionH;
// var sphereSwitchW = true;
// var sphereSwitchH = true;
var mobile = false;
var largescreen = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // randomPositionW = random(0, halfWidth);
  // randomPositionH = random(0, halfHeight);
  halfWidth = width / 2; //600-1000 in desktop
  halfHeight = height / 2; //400-600 in desktop
  if (halfWidth < halfHeight) {
    mobile = true;
  }
  if (halfWidth > 500) {
    largescreen = true;
  }
}

function draw() {
  background(225, 206, 122);
camera(halfWidth / 1.2, 200, 700, halfWidth / 3, 0, 0, 0, -1, 0);

  //The Sun
  push();
  var sunShake = random(-5, 5);
  noStroke();
  fill(243, 238, 195);
  if (mobile) {
    sphere(halfHeight);
    stroke(243, 238, 195);
    noFill();
    sphere(halfHeight + 10 + sunShake);
  } else if (largescreen){
    sphere(halfHeight/1.3);
    stroke(243, 238, 195);
    noFill();
    sphere(halfHeight/1.3 + 30 + sunShake);
  } else  {
    sphere(halfHeight);
    stroke(243, 238, 195);
    noFill();
    sphere(halfHeight + 20 + sunShake);
  }
  pop();

  // //Bottom border
  // push();
  // noFill();
  // stroke(243, 238, 195);
  // if (mobile) {
  //   translate(0, halfHeight * 0.15, halfWidth * 1.7);
  // } else {
  //   translate(0, halfHeight * 0.15, halfWidth * 0.5);
  // }
  // rotateZ(-90);
  // cylinder(50, windowWidth * 8);
  // pop();

  //Horizon
  push();
  rotateY(90);
  rotateX(90);
  noStroke();
  //translate(0,0,35);
  var horizonColor = color('rgba(183, 168, 134, 0.5)');
  fill(horizonColor);
  blendMode(EXCLUSION);
  plane(10000, 10000);
  pop();

}