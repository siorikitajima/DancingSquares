var sketchNumber = 0;
var paused = true;
var sketchList = [
  { id:0,
    trackName: 'Prism',
    sketchName: 'Number Zero'
  },
  { id:1,
    trackName: 'Untitled Existential',
    sketchName: 'Number One'
  },
  { id:2,
    trackName: 'Geodesic',
    sketchName: 'Number Two'
  }
]
changeSketch();

var theTrack = [
  new Howl({ 
    src: ['sound/NumberZero-Prism.mp3'],
    loop: true}),
  new Howl({ 
    src: ['sound/UntitledExistential.mp3'],
    loop: true}),
  new Howl({ 
    src: ['sound/NumberZero-Geodesic.mp3'],
    loop: true}), ];

$('.btnZero').on('click', function(){
  if(!paused){
    if (sketchNumber !== 0) {
      theTrack[sketchNumber].stop();
      sketchNumber = 0;
      theTrack[sketchNumber].play();
    } else { null }}
  sketchNumber = 0;
  changeSketch();
});

$('.btnOne').on('click', function(){
  if(!paused){
    if (sketchNumber !== 1) {
      theTrack[sketchNumber].stop();
      sketchNumber = 1;
      theTrack[sketchNumber].play();
    } else { null }}
  sketchNumber = 1;
  changeSketch();
});
$('.btnTwo').on('click', function(){
  if(!paused){
    if (sketchNumber !== 2) {
      theTrack[sketchNumber].stop();
      sketchNumber = 2;
      theTrack[sketchNumber].play();
    } else { null }}
  sketchNumber = 2;
  changeSketch();
});

/* ========== Play button ========== */

$('.startBtn').on('click',function(){
  theTrack[sketchNumber].play();
  paused = false;
  $(this).hide();
  $('.pauseBtn').css('display','inline-block');
});

$('.pauseBtn').on('click',function(){
  theTrack[sketchNumber].pause();
  paused = true;
  $(this).css('display','none');
  $('.startBtn').show();
});

function changeSketch() {
  var theName = sketchList[sketchNumber].sketchName;
  var theCredit = "Code by Siori Kitajima<br/> Music by Joseph Minadeo '" + sketchList[sketchNumber].trackName + "'";
  $('.sketchName').html(theName);
  $('.sketchCredit').html(theCredit);
}
      
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    }
      
function draw() {
    if(sketchNumber == 0) {
          numberZero();
        } else if (sketchNumber == 1) {
          numberOne();
        }
        else {
          numberTwo();
        }
      }

// function mouseClicked() {
//   if (sketchNumber == 2) {
//     sketchNumber = 0;
//   } else {
//     sketchNumber = sketchNumber +1;
//   }
// }

function numberZero() {
  var angle = 1;

  background(255, 53, 98);

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

function numberOne() {
  var angle = 1;

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

function numberTwo() {
  var angle = 1;

  background(49, 10, 49);

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