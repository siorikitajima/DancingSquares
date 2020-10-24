var angle = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(217, 3, 104);

  camera(70, 70, 20 + sin(frameCount * 0.002) * 400, 0, 0, 0, 0, 1, 0);

  rotateX(angle * 0.02);
  rotateY(angle * 0.01);

  for (let petals = 0; petals < 30; petals++) {

    let zAngle = 1;
    rotateZ(zAngle);

    push();

    let a = 0.0;
    let inc = TWO_PI / 25.0;
    fill(100);
    noStroke();
    for (let i = 0; i < 30; i++) {
      translate(i * 2, i * sin(a));
      noStroke();
      fill(41, 47, 54);
      cylinder(1, sin(a) * 150);
      a = a + inc;
    }
    pop();

    rotateX(angle * 0.01);
    //  rotateY(angle*3);

    fill(217, 3, 104);
    stroke(41, 47, 54);
    box(50);

    angle = angle + 0.002;
    //zAngle = zAngle + 0.02;


  }
  translate(150, 180);
  noStroke();
  fill(41, 47, 54);
  sphere(100);

  translate(300, 200);
  noStroke();
  fill(255, 212, 0);
  sphere(150);
  
  translate(-500, -500);
  noStroke();
  fill(255, 212, 0);
  sphere(50);
}