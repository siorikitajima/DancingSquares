var primaryColorDark;
var primaryColorLight;
var keyColorOne;
var keyColorTwo;
var keyColorThree;
var keyColorFour;
var keyColorFive;
var sketchNumber = 0;
var paused = true;
var inc;
var start;
var stripeSpace;
var angle;
var halfWidth;
var halfHeight;
var mobile = false;
var largescreen = false;

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
  redraw();
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
  redraw();
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
  redraw();
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
    setFrameRate(30);
    inc = 0.001;
    start = 0.001;
    stripeSpace = 30;
    angle = 1;
    primaryColorDark = color(34, 34, 34);
    primaryColorLight = color(224, 224, 224);
    keyColorOne = color(255, 53, 98);
    keyColorTwo = color(30, 85, 92);
    keyColorThree = color(239, 160, 11);
    keyColorFour = color(49, 10, 49);
    keyColorFive = color(220, 96, 46);
    halfWidth = windowWidth / 2; //600-1000 in desktop
    halfHeight = windowHeight / 2; //400-600 in desktop
    if (halfWidth < halfHeight) {
      mobile = true;
    }
    if (halfWidth > 500) {
      largescreen = true;
    }
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
  background(keyColorOne);

  if(windowWidth>600){
    camera(130, 130, 20 + sin(frameCount * 0.007) * 100, 0, 0, 0, 0, 1, 0);
    } else {
    camera(80, 80, 20 + sin(frameCount * 0.007) * 100, 0, 0, 0, 0, 1, 0);
    }

    rotateX(angle * 0.01);
    rotateY(angle * 0.005);

    for (let petals = 0; petals < 30; petals++) {
        let zAngle = 1;
        rotateZ(zAngle);
        push();
            let a = 0.0;
            let inc = TWO_PI / 25.0;
            fill(primaryColorDark);
            noStroke();
            for (let i = 0; i < 30; i++) {
            translate(i * 2, i * sin(a));
            noStroke();
            fill(primaryColorDark);
            cylinder(1, sin(a) * 150);
            a = a + inc;
            }
        pop();
        rotateX(angle * 0.01);
        fill(keyColorOne);
        stroke(primaryColorDark);
        box(50);
        angle = angle + 0.002;
      }
      translate(150, 180);
      noStroke();
      fill(primaryColorDark);
      sphere(100);
    
      translate(300, 200);
      noStroke();
      fill(keyColorThree);
      sphere(150);
      
      translate(-500, -500);
      noStroke();
      fill(keyColorThree);
      sphere(50);          
}

function numberOne() {
  background(keyColorTwo);
  camera(halfWidth / 1.2, 200, 700, 0, 0, 0, 0, -1, 0);  //The Sun
  push();
  var sunShake = random(-5, 5);
  noStroke();
  fill(primaryColorLight);
  if (mobile) {
    sphere(halfHeight/2);
    stroke(primaryColorLight);
    noFill();
    sphere(halfHeight/2 + 10 + sunShake);
  } else if (largescreen){
    sphere(halfHeight/1.5);
    stroke(primaryColorLight);
    noFill();
    sphere(halfHeight/1.5 + 30 + sunShake);
  } else  {
    sphere(halfHeight);
    stroke(primaryColorLight);
    noFill();
    sphere(halfHeight + 20 + sunShake);
  }
  pop();

  //Horizon
  push();
  rotateY(90);
  rotateX(90);
  noStroke();
  //translate(0,0,35);
  var horizonColor = color('rgba(220, 96, 46, 0.9)');
 fill(horizonColor);
  // blendMode(EXCLUSION);
  plane(10000, 10000);
  pop();       
}

function numberTwo() {
    background(keyColorThree);
    camera(-80, -100, -100, 0, 150, 20, 1,0,0);
  
    // Black Lines
    var meshX = windowWidth;
    var meshY = windowHeight/2;
    var y;
    var x;
    stroke(primaryColorDark);
    noFill();
    for (var hori = -(meshX); hori < meshX; hori = hori + stripeSpace) {
      stroke(50);
      noFill();
      beginShape();
      var xoff = start;
      var horioff = noise(xoff * hori * 0.01);
      for (var x = -(meshY); x < meshY; x = x + 1.2) {
        y = noise(xoff) * meshY * horioff;
        vertex(x, y, hori * 0.2);
        xoff += inc;
      }
      endShape();
      horioff += (meshX / 10);
    }
    start += inc;
}