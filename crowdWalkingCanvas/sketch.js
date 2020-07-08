var topRowR;
var topRowL;
var secondRowR;
var secondRowL;
var thirdRowR;
var thirdRowL;
var fourthRowR;
var fourthRowL;
var fifthRowR;
var fifthRowL;

function preload() {
 girlWalk1R = loadAnimation(
     'walkers/girl-1r/girl-1r0000.png',
     'walkers/girl-1r/girl-1r0001.png',
     'walkers/girl-1r/girl-1r0002.png',
     'walkers/girl-1r/girl-1r0003.png',
     'walkers/girl-1r/girl-1r0004.png',
     'walkers/girl-1r/girl-1r0005.png',
     'walkers/girl-1r/girl-1r0006.png',
     'walkers/girl-1r/girl-1r0007.png',
     'walkers/girl-1r/girl-1r0008.png',
     'walkers/girl-1r/girl-1r0009.png',
     'walkers/girl-1r/girl-1r0010.png', 
     'walkers/girl-1r/girl-1r0011.png');
 girlWalk1L = loadAnimation(
     'walkers/girl-1l/girl-1l0000.png',
     'walkers/girl-1l/girl-1l0001.png',
     'walkers/girl-1l/girl-1l0002.png',
     'walkers/girl-1l/girl-1l0003.png',
     'walkers/girl-1l/girl-1l0004.png',
     'walkers/girl-1l/girl-1l0005.png',
     'walkers/girl-1l/girl-1l0006.png',
     'walkers/girl-1l/girl-1l0007.png',
     'walkers/girl-1l/girl-1l0008.png',
     'walkers/girl-1l/girl-1l0009.png',
     'walkers/girl-1l/girl-1l0010.png', 
     'walkers/girl-1l/girl-1l0011.png');
 girlWalk2R = loadAnimation(
     'walkers/girl-2r/girl-1r0000.png',
     'walkers/girl-2r/girl-1r0001.png',
     'walkers/girl-2r/girl-1r0002.png',
     'walkers/girl-2r/girl-1r0003.png',
     'walkers/girl-2r/girl-1r0004.png',
     'walkers/girl-2r/girl-1r0005.png',
     'walkers/girl-2r/girl-1r0006.png',
     'walkers/girl-2r/girl-1r0007.png',
     'walkers/girl-2r/girl-1r0008.png',
     'walkers/girl-2r/girl-1r0009.png',
     'walkers/girl-2r/girl-1r0010.png', 
     'walkers/girl-2r/girl-1r0011.png');
 girlWalk2L = loadAnimation(
     'walkers/girl-2l/girl-1l0000.png',
     'walkers/girl-2l/girl-1l0001.png',
     'walkers/girl-2l/girl-1l0002.png',
     'walkers/girl-2l/girl-1l0003.png',
     'walkers/girl-2l/girl-1l0004.png',
     'walkers/girl-2l/girl-1l0005.png',
     'walkers/girl-2l/girl-1l0006.png',
     'walkers/girl-2l/girl-1l0007.png',
     'walkers/girl-2l/girl-1l0008.png',
     'walkers/girl-2l/girl-1l0009.png',
     'walkers/girl-2l/girl-1l0010.png', 
     'walkers/girl-2l/girl-1l0011.png');
 girlWalk3R = loadAnimation(
     'walkers/girl-3r/girl-1r0000.png',
     'walkers/girl-3r/girl-1r0001.png',
     'walkers/girl-3r/girl-1r0002.png',
     'walkers/girl-3r/girl-1r0003.png',
     'walkers/girl-3r/girl-1r0004.png',
     'walkers/girl-3r/girl-1r0005.png',
     'walkers/girl-3r/girl-1r0006.png',
     'walkers/girl-3r/girl-1r0007.png',
     'walkers/girl-3r/girl-1r0008.png',
     'walkers/girl-3r/girl-1r0009.png',
     'walkers/girl-3r/girl-1r0010.png', 
     'walkers/girl-3r/girl-1r0011.png');
 girlWalk3L = loadAnimation(
     'walkers/girl-3l/girl-1l0000.png',
     'walkers/girl-3l/girl-1l0001.png',
     'walkers/girl-3l/girl-1l0002.png',
     'walkers/girl-3l/girl-1l0003.png',
     'walkers/girl-3l/girl-1l0004.png',
     'walkers/girl-3l/girl-1l0005.png',
     'walkers/girl-3l/girl-1l0006.png',
     'walkers/girl-3l/girl-1l0007.png',
     'walkers/girl-3l/girl-1l0008.png',
     'walkers/girl-3l/girl-1l0009.png',
     'walkers/girl-3l/girl-1l0010.png', 
     'walkers/girl-3l/girl-1l0011.png');
 girlWalk4R = loadAnimation(
     'walkers/girl-4r/girl-1r0000.png',
     'walkers/girl-4r/girl-1r0001.png',
     'walkers/girl-4r/girl-1r0002.png',
     'walkers/girl-4r/girl-1r0003.png',
     'walkers/girl-4r/girl-1r0004.png',
     'walkers/girl-4r/girl-1r0005.png',
     'walkers/girl-4r/girl-1r0006.png',
     'walkers/girl-4r/girl-1r0007.png',
     'walkers/girl-4r/girl-1r0008.png',
     'walkers/girl-4r/girl-1r0009.png',
     'walkers/girl-4r/girl-1r0010.png', 
     'walkers/girl-4r/girl-1r0011.png');
 girlWalk4L = loadAnimation(
     'walkers/girl-4l/girl-1l0000.png',
     'walkers/girl-4l/girl-1l0001.png',
     'walkers/girl-4l/girl-1l0002.png',
     'walkers/girl-4l/girl-1l0003.png',
     'walkers/girl-4l/girl-1l0004.png',
     'walkers/girl-4l/girl-1l0005.png',
     'walkers/girl-4l/girl-1l0006.png',
     'walkers/girl-4l/girl-1l0007.png',
     'walkers/girl-4l/girl-1l0008.png',
     'walkers/girl-4l/girl-1l0009.png',
     'walkers/girl-4l/girl-1l0010.png', 
     'walkers/girl-4l/girl-1l0011.png');
 girlWalk5R = loadAnimation(
     'walkers/girl-5r/girl-1r0000.png',
     'walkers/girl-5r/girl-1r0001.png',
     'walkers/girl-5r/girl-1r0002.png',
     'walkers/girl-5r/girl-1r0003.png',
     'walkers/girl-5r/girl-1r0004.png',
     'walkers/girl-5r/girl-1r0005.png',
     'walkers/girl-5r/girl-1r0006.png',
     'walkers/girl-5r/girl-1r0007.png',
     'walkers/girl-5r/girl-1r0008.png',
     'walkers/girl-5r/girl-1r0009.png',
     'walkers/girl-5r/girl-1r0010.png', 
     'walkers/girl-5r/girl-1r0011.png');
 girlWalk5L = loadAnimation(
     'walkers/girl-5l/girl-1l0000.png',
     'walkers/girl-5l/girl-1l0001.png',
     'walkers/girl-5l/girl-1l0002.png',
     'walkers/girl-5l/girl-1l0003.png',
     'walkers/girl-5l/girl-1l0004.png',
     'walkers/girl-5l/girl-1l0005.png',
     'walkers/girl-5l/girl-1l0006.png',
     'walkers/girl-5l/girl-1l0007.png',
     'walkers/girl-5l/girl-1l0008.png',
     'walkers/girl-5l/girl-1l0009.png',
     'walkers/girl-5l/girl-1l0010.png', 
     'walkers/girl-5l/girl-1l0011.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  topRowR = new Group();
  topRowL = new Group();
  secondRowR = new Group();
  secondRowL = new Group();
  thirdRowR = new Group();
  thirdRowL = new Group();
  fourthRowR = new Group();
  fourthRowL = new Group();
  fifthRowR = new Group();
  fifthRowL = new Group();

  var playListR = [
    {"rowID": topRowR , "x": random(width, width*1.3), "y":150, "scale":0.7},
    {"rowID": secondRowR , "x": random(width, width*2), "y":height/5, "scale":1},
    {"rowID": thirdRowR , "x": random(width, width*3), "y":height/3, "scale":1.5},
    {"rowID": fourthRowR , "x": random(width, width*4), "y":height/2, "scale":2},
    {"rowID": fifthRowR , "x": random(width, width*5), "y":height-300, "scale":2.8}]
  var playListL = [
    {"rowID": topRowL , "x": random(0, -width*0.5), "y":170, "scale":0.7},
    {"rowID": secondRowL , "x": random(0, -width*1.5), "y":height/5 + 30, "scale":1},
    {"rowID": thirdRowL , "x": random(0, -width*2.5), "y":height/3 + 40, "scale":1.5},
    {"rowID": fourthRowL , "x": random(0, -width*3.5), "y":height/2 + 50, "scale":2},
    {"rowID": fifthRowL , "x": random(0, -width*4.5), "y":height-300 + 60, "scale":2.8}]

  //assign new sprites to Rows

  for(var i = 0; i<5; i++) {
    var newGirl5R = createSprite(playListR[i].x, playListR[i].y); 
    newGirl5R.scale = playListR[i].scale; 
    newGirl5R.addAnimation('floating', girlWalk5R);
    newGirl5R.addToGroup(playListR[i].rowID);
    var newGirl1R = createSprite(playListR[i].x, playListR[i].y); 
    newGirl1R.scale = playListR[i].scale; 
    newGirl1R.addAnimation('floating', girlWalk1R);
    newGirl1R.addToGroup(playListR[i].rowID);
    var newGirl4R = createSprite(playListR[i].x, playListR[i].y); 
    newGirl4R.scale = playListR[i].scale; 
    newGirl4R.addAnimation('floating', girlWalk4R);
    newGirl4R.addToGroup(playListR[i].rowID);
    var newGirl2R = createSprite(playListR[i].x, playListR[i].y); 
    newGirl2R.scale = playListR[i].scale; 
    newGirl2R.addAnimation('floating', girlWalk2R);
    newGirl2R.addToGroup(playListR[i].rowID);
    var newGirl3R = createSprite(playListR[i].x, playListR[i].y); 
    newGirl3R.scale = playListR[i].scale; 
    newGirl3R.addAnimation('floating', girlWalk3R);
    newGirl3R.addToGroup(playListR[i].rowID);
  }

  for(var i = 0; i<5; i++) {
    var newGirl1L = createSprite(playListL[i].x, playListL[i].y); 
    newGirl1L.scale = playListL[i].scale; 
    newGirl1L.addAnimation('floating', girlWalk1L);
    newGirl1L.addToGroup(playListL[i].rowID);
    var newGirl2L = createSprite(playListL[i].x, playListL[i].y); 
    newGirl2L.scale = playListL[i].scale; 
    newGirl2L.addAnimation('floating', girlWalk2L);
    newGirl2L.addToGroup(playListL[i].rowID);
    var newGirl3L = createSprite(playListL[i].x, playListL[i].y); 
    newGirl3L.scale = playListL[i].scale; 
    newGirl3L.addAnimation('floating', girlWalk3L);
    newGirl3L.addToGroup(playListL[i].rowID);
    var newGirl4L = createSprite(playListL[i].x, playListL[i].y); 
    newGirl4L.scale = playListL[i].scale; 
    newGirl4L.addAnimation('floating', girlWalk4L);
    newGirl4L.addToGroup(playListL[i].rowID);
    var newGirl5L = createSprite(playListL[i].x, playListL[i].y); 
    newGirl5L.scale = playListL[i].scale; 
    newGirl5L.addAnimation('floating', girlWalk5L);
    newGirl5L.addToGroup(playListL[i].rowID);
  }
}

function draw() {
  background(224, 224, 216);

////// Horizontal Animation for Top Row

  for(var i = 0; i<topRowR.length; i++) {
    var t = topRowR[i];
    t.position.x -= 1.5;
    if (t.position.x < 0) {
        t.position.x = random(width, width*1.3);
    }}
  for(var i = 0; i<topRowL.length; i++) {
    var t = topRowL[i];
    t.position.x += 1.5;
    if (t.position.x > width) {
        t.position.x = random(0, -width*0.5);
    }}

//Second Row
  for(var i = 0; i<secondRowR.length; i++) {
    var t = secondRowR[i];
    t.position.x -= 2;
    if (t.position.x < 0) {
        t.position.x = random(width, width*2);
    }}
  for(var i = 0; i<secondRowL.length; i++) {
    var t = secondRowL[i];
    t.position.x += 2;
    if (t.position.x > width) {
        t.position.x = random(0, -width*1.5);
    }}
//Third Row
  for(var i = 0; i<thirdRowR.length; i++) {
    var t = thirdRowR[i];
    t.position.x -= 3;
    if (t.position.x < 0) {
        t.position.x = random(width, width*3);
    }}
  for(var i = 0; i<thirdRowL.length; i++) {
    var t = thirdRowL[i];
    t.position.x += 3;
    if (t.position.x > width) {
        t.position.x = random(0, -width*2.5);
    }}
//Fourth Row
  for(var i = 0; i<fourthRowR.length; i++) {
    var t = fourthRowR[i];
    t.position.x -= 4;
    if (t.position.x < 0) {
        t.position.x = random(width, width*4);
    }}
  for(var i = 0; i<fourthRowL.length; i++) {
    var t = fourthRowL[i];
    t.position.x += 4;
    if (t.position.x > width) {
        t.position.x = random(0, -width*3.5);
    }}
//Fifth Row
for(var i = 0; i<fifthRowR.length; i++) {
    var t = fifthRowR[i];
    t.position.x -= 5;
    if (t.position.x < 0) {
        t.position.x = random(width, width*5);
    }}
  for(var i = 0; i<fifthRowL.length; i++) {
    var t = fifthRowL[i];
    t.position.x += 5;
    if (t.position.x > width) {
        t.position.x = random(0, -width*4.5);
    }}

   drawSprites(topRowR);
   drawSprites(topRowL);
   drawSprites(secondRowR);
   drawSprites(secondRowL);
   drawSprites(thirdRowR);
   drawSprites(thirdRowL);
   drawSprites(fourthRowR);
   drawSprites(fourthRowL);
   drawSprites(fifthRowR);
   drawSprites(fifthRowL);
}
