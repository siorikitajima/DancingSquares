var angle = 1;
      
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(30, 85, 92);

  if(windowWidth>600){
    camera(130, 130, 20 + sin(frameCount * 0.001) * 400, 0, 0, 0, 0, 1, 0);
    } else {
    camera(80, 80, 20 + sin(frameCount * 0.001) * 400, 0, 0, 0, 0, 1, 0);
    }

    rotateX(angle * 0.01);
    rotateY(angle * 0.005);

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
            fill(34, 34, 34);
            cylinder(1, sin(a) * 150);
            a = a + inc;
            }
        pop();
        rotateX(angle * 0.01);
        fill(255, 53, 98);
        stroke(34, 34, 34);
        box(50);
        angle = angle + 0.002;
      }
      translate(150, 180);
      noStroke();
      fill(34, 34, 34);
      sphere(100);
    
      translate(300, 200);
      noStroke();
      fill(239, 160, 11);
      sphere(150);
      
      translate(-500, -500);
      noStroke();
      fill(239, 160, 11);
      sphere(50);
}