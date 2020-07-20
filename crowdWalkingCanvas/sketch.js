var topRowR, topRowL;
var secondRowR, secondRowL;
var thirdRowR, thirdRowL;
var fourthRowR, fourthRowL;
var fifthRowR, fifthRowL;
var newGirl1R, newGirl2R, newGirl3R, newGirl4R, newGirl5R;
var newGirl1L, newGirl2L, newGirl3L, newGirl4L, newGirl5L;

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

function moveToRight() {
  this.x = this.x + 200;
};

function moveToLeft() {
  this.x = this.x - 200;
};

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

  girlWalk1R.frameDelay = 6 - 1;
  girlWalk1L.frameDelay = 5 - 1;
  girlWalk2R.frameDelay = 7 - 1;
  girlWalk2L.frameDelay = 6 - 1;
  girlWalk3R.frameDelay = 5 - 1;
  girlWalk3L.frameDelay = 7 - 1;
  girlWalk4R.frameDelay = 8 - 1;
  girlWalk4L.frameDelay = 6 - 1;
  girlWalk5R.frameDelay = 7 - 1;
  girlWalk5L.frameDelay = 8 - 1;

  var playListR = (width < 600) ? [
    {"rowID": topRowR , "x": width*2*2, "y":100, "scale":0.65},
    {"rowID": secondRowR , "x": width*2.5*2, "y":height/5, "scale":0.95 *0.8},
    {"rowID": thirdRowR , "x": width*3.5*2, "y":height/3, "scale":1.35 *0.8},
    {"rowID": fourthRowR , "x": width*4*2, "y":height/2, "scale":1.75 *0.8},
    {"rowID": fifthRowR , "x": width*5*2, "y":height-100, "scale":2.35 *0.8}
    ]:[
    {"rowID": topRowR , "x": width*2, "y":height/7, "scale":0.65 *0.8},
    {"rowID": secondRowR , "x": width*2.5, "y":height/5, "scale":0.95 *0.8},
    {"rowID": thirdRowR , "x": width*3.5, "y":height/3, "scale":1.35 *0.8},
    {"rowID": fourthRowR , "x": width*4, "y":height/2, "scale":1.75 *0.8},
    {"rowID": fifthRowR , "x": width*5, "y":height-200, "scale":2.35 *0.8}
    ];
  var playListL = (width < 600) ? [
    {"rowID": topRowL , "x": -(width*2*2), "y":120, "scale":0.7},
    {"rowID": secondRowL , "x": -(width*2.5*2), "y":height/5 + 15, "scale":1 *0.8},
    {"rowID": thirdRowL , "x": -(width*3.5*2), "y":height/3 + 20, "scale":1.4 *0.8},
    {"rowID": fourthRowL , "x": -(width*4*2), "y":height/2 + 25, "scale":1.8 *0.8},
    {"rowID": fifthRowL , "x": -(width*5*2), "y":height-100 + 30, "scale":2.4 *0.8}
    ] : [
    {"rowID": topRowL , "x": -(width*2), "y":height/7 + 20, "scale":0.7 *0.8},
    {"rowID": secondRowL , "x": -(width*2.5), "y":height/5 + 30, "scale":1 *0.8},
    {"rowID": thirdRowL , "x": -(width*3.5), "y":height/3 + 40, "scale":1.4 *0.8},
    {"rowID": fourthRowL , "x": -(width*4), "y":height/2 + 50, "scale":1.8 *0.8},
    {"rowID": fifthRowL , "x": -(width*5), "y":height-200 + 60, "scale":2.4 *0.8}
    ];

  //assign new sprites to Rows

  for(var i = 0; i<5; i++) {
    //var randomFrame = random(10,11);
    var newGirl5R = createSprite(random(width, playListR[i].x), playListR[i].y); 
    newGirl5R.scale = playListR[i].scale;
    newGirl5R.addAnimation('floating', girlWalk5R);
    //newGirl5R.frameDelay = randomFrame +1.6;
    newGirl5R.addToGroup(playListR[i].rowID);
    var newGirl1R = createSprite(random(width, playListR[i].x), playListR[i].y); 
    newGirl1R.scale = playListR[i].scale; 
    newGirl1R.addAnimation('floating', girlWalk1R);
    //newGirl1R.frameDelay = randomFrame +1.2;
    newGirl1R.addToGroup(playListR[i].rowID);
    var newGirl4R = createSprite(random(width, playListR[i].x), playListR[i].y); 
    newGirl4R.scale = playListR[i].scale; 
    newGirl4R.addAnimation('floating', girlWalk4R);
    //newGirl4R.frameDelay = randomFrame +0.8;
    newGirl4R.addToGroup(playListR[i].rowID);
    var newGirl2R = createSprite(random(width, playListR[i].x), playListR[i].y); 
    newGirl2R.scale = playListR[i].scale; 
    newGirl2R.addAnimation('floating', girlWalk2R);
    //newGirl2R.frameDelay = randomFrame +0.4;
    newGirl2R.addToGroup(playListR[i].rowID);
    var newGirl3R = createSprite(random(width, playListR[i].x), playListR[i].y); 
    newGirl3R.scale = playListR[i].scale; 
    newGirl3R.addAnimation('floating', girlWalk3R);
    //newGirl3R.frameDelay = randomFrame +2;
    newGirl3R.addToGroup(playListR[i].rowID);
  }

  for(var i = 0; i<5; i++) {
    //var randomFrame = random(10,11);
    var newGirl1L = createSprite(random(0,playListL[i].x), playListL[i].y); 
    newGirl1L.scale = playListL[i].scale;
    newGirl1L.addAnimation('floating', girlWalk1L);
    //newGirl1L.frameDelay = randomFrame +1.4;
    newGirl1L.addToGroup(playListL[i].rowID);
    var newGirl2L = createSprite(random(0,playListL[i].x), playListL[i].y); 
    newGirl2L.scale = playListL[i].scale;
    newGirl2L.addAnimation('floating', girlWalk2L);
    //newGirl2L.frameDelay = randomFrame +1;
    newGirl2L.addToGroup(playListL[i].rowID);
    var newGirl3L = createSprite(random(0,playListL[i].x), playListL[i].y); 
    newGirl3L.scale = playListL[i].scale;
    newGirl3L.addAnimation('floating', girlWalk3L);
    //newGirl3L.frameDelay = randomFrame +1.8;
    newGirl3L.addToGroup(playListL[i].rowID);
    var newGirl4L = createSprite(random(0,playListL[i].x), playListL[i].y); 
    newGirl4L.scale = playListL[i].scale;
    newGirl4L.addAnimation('floating', girlWalk4L);
    //newGirl4L.frameDelay = randomFrame +1.2;
    newGirl4L.addToGroup(playListL[i].rowID);
    var newGirl5L = createSprite(random(0,playListL[i].x), playListL[i].y); 
    newGirl5L.scale = playListL[i].scale;
    newGirl5L.addAnimation('floating', girlWalk5L);
    //newGirl5L.frameDelay = randomFrame +1.6;
    newGirl5L.addToGroup(playListL[i].rowID);
  }

  var allRows = [topRowR,topRowL];
  for (var al=0; al<allRows.length; al++) {
    var theGroup = allRows[al];

  for(var i = 0; i<theGroup.length; i++) {
    var t = theGroup[i];
    var cloneGroup = theGroup.slice();
    cloneGroup.splice(i,1);

  // for(var oc = 0; oc<cloneGroup.length; oc++) {
  //   t.bounce(cloneGroup[oc]);
  //   }
  }
  }
}

function draw() {
  background(224, 224, 216);


////// Horizontal Animation for Top Row

  for(var i = 0; i<topRowR.length; i++) {
    var t = topRowR[i];
    var cloneRow = topRowR.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x -= 1.5;

    if (t.position.x < -100) {
        t.position.x = (width < 600) ? random(width, width*1.3 *4): random(width, width*1.3*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    // t.bounce(cloneRow[oc], moveToRight);
    // }
  }
  for(var i = 0; i<topRowL.length; i++) {
    var t = topRowL[i];
    var cloneRow = topRowL.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x += 1.5;
    if (t.position.x > width+100) {
        t.position.x = (width < 600) ? random(-(width), -(width*0.5 *4)): random(0, -width*0.5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    // t.bounce(cloneRow[oc], moveToRight);
    // }
  }

//Second Row
  for(var i = 0; i<secondRowR.length; i++) {
    var t = secondRowR[i];
    var cloneRow = secondRowR.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x -= 2;
    if (t.position.x < -100) {
        t.position.x = (width < 600) ? random(width, width*2 *4): random(width, width*2*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
  for(var i = 0; i<secondRowL.length; i++) {
    var t = secondRowL[i];
    var cloneRow = secondRowL.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x += 2;
    if (t.position.x > width+100) {
        t.position.x = (width < 600) ? random(-(width), -(width*1.5 *4)): random(0, -width*1.5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
//Third Row
  for(var i = 0; i<thirdRowR.length; i++) {
    var t = thirdRowR[i];
    var cloneRow = thirdRowR.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x -= 3;
    if (t.position.x < -100) {
        t.position.x = (width < 600) ? random(width, width*3 *4): random(width, width*3*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
  for(var i = 0; i<thirdRowL.length; i++) {
    var t = thirdRowL[i];
    var cloneRow = thirdRowL.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x += 3;
    if (t.position.x > width+100) {
        t.position.x = (width < 600) ? random(-(width), -(width*2.5 *4)): random(0, -width*2.5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
//Fourth Row
  for(var i = 0; i<fourthRowR.length; i++) {
    var t = fourthRowR[i];
    var cloneRow = fourthRowR.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x -= 4;
    if (t.position.x < -100) {
        t.position.x = (width < 600) ? random(width, width*4 *4): random(width, width*4*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
  for(var i = 0; i<fourthRowL.length; i++) {
    var t = fourthRowL[i];
    var cloneRow = fourthRowL.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x += 4;
    if (t.position.x > width+100) {
        t.position.x = (width < 600) ? random(-(width), -(width*3.5 *4)): random(0, -width*3.5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
//Fifth Row
for(var i = 0; i<fifthRowR.length; i++) {
    var t = fifthRowR[i];
    var cloneRow = fifthRowR.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x -= 5;
    if (t.position.x < -100) {
        t.position.x = (width < 600) ? random(width, width*5 *4): random(width, width*5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }
  for(var i = 0; i<fifthRowL.length; i++) {
    var t = fifthRowL[i];
    var cloneRow = fifthRowL.slice();
    cloneRow.splice(i,1);
    //otherCharacters = cloneRow.join;
    t.position.x += 5;
    if (t.position.x > width+100) {
        t.position.x = (width < 600) ? random(-(width), -(width*4.5 *4)): random(0, -width*4.5*2);
    }
    // for(var oc = 0; oc<cloneRow.length; oc++) {
    //   t.bounce(cloneRow[oc], moveToRight);
    //   }
  }

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
