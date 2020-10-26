var inc = 0.002;
var start = 0;

function setup() {
 
  createCanvas(windowWidth, windowHeight * 0.9);
}

function draw() {
  var fillColor1 = color(125, 21, 29, 200);
  var fillColor2 = color(237, 184, 100, 255);
  background(fillColor2);

  // Black Lines
  var mesh = height;
  var y;
  for (var hori = 0; hori < mesh; hori = hori + 10) {
    stroke(50);
    noFill();
    beginShape();
    var xoff = start;
    var horioff = noise(xoff * hori * 0.005);
    for (var x = 0; x < width; x++) {
      y = noise(xoff) * height * horioff;
      vertex(x, y);
      xoff += inc;
    }
    endShape();
    horioff += (mesh / 10);
  }

  // Black Filled
  fill(50);
  beginShape();
  var xoffBF = start + 200;
  var horioffBF = noise(xoffBF * 2 * 0.005);
  for (var xBF = 0; xBF < width; xBF++) {
    noStroke();
    yBF = noise(xoffBF) * height * horioffBF + height/3;
    vertex(xBF, yBF);
    xoffBF += inc;
  }
  vertex(width, yBF);
  vertex(width, height);
  vertex(0, height);
  endShape();

  // Red Floating
  fill(fillColor1);
  noStroke();
  beginShape();
  var yoffRF = start + noise(0, 0.01);
  for (var yRF = 0; yRF < height; yRF++) {
    var xRF = noise(yoffRF) * width * 1.5;
    vertex(xRF, yRF);
    yoffRF += inc * 0.5;
  }
  endShape(CLOSE);

  // Yellow Floating
  translate(width / 2, 0);
  rotate(45);

  fill(fillColor2);
  beginShape();
  var yoffYF = start + noise(0.04, 0.05);
  for (var yYF = 0; yYF < height; yYF++) {
    var xYF = noise(yoffYF) * width * 1.3;
    vertex(xYF, yYF);
    yoffYF -= inc * 0.3;
  }
  endShape(CLOSE);

  start += inc;

}