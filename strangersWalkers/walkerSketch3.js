var spriteframeData, sprSht;
var playListR = []; var playListL = [];
var pauseSwitch = true;
var infoSwitch = false;
var colorSwitch = 7;
var mainFont, bodyFont;
var topRowR, topRowL, secondRowR, secondRowL, thirdRowR, thirdRowL, fourthRowR, fourthRowL, fifthRowR, fifthRowL;

// Info popup data
var groundImg = [
  {id:0, name:'numbers_pink'},
  {id:1, name:'numbers_green'},
  {id:2, name:'numbers_yellow'},
  {id:3, name:'numbers_purple'},
  {id:4, name:'numbers_orange'},
  {id:5, name:'numbers_teal'},
  {id:6, name:'numbers_red'},
  {id:7, name:'numbers_gray'}];
var infoText = [
  {h1:'Depression / MDD', body:'Persistently depressed mood or loss of interest in activities causing significant impairment in daily life.'},
  {h1:'Bipolar', body:'Episodes of mood swings ranging from depressive lows to manic highs.'},
  {h1:'Anxiety / GAD', 'body':"Feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities."},
  {h1:'Obsessive-Compulsive Disorder / OCD', body:'Excessive thoughts and fears (obsessions) that lead to repetitive behaviors.'},
  {h1:'Alcohol Abuse', body:'Uncontrolled drinking and preoccupation with alcohol.'},
  {h1:'Alcohol Dependence', body:'Uncontrolled drinking and dependence with alcohol.'},
  {h1:'Multiple issues', body:'Symptoms often overlap and can be additive.'},
  {h1:'Mental health issues', body:'A wide range of conditions that affect mood, thinking, and behavior.'}
]
var icons = [
  {name:'learn', img:'images/infoIcons_learn.png'}, 
  {name:'help', img:'images/infoIcons_help.png'}, 
  {name:'voices', img:'images/infoIcons_voices.png'}];

// Charactor Data
var charactorList = [
  { name:'tiny', id:'0',
    imageR: ['tinyR_pink', 'tinyR_green', 'tinyR_yellow', 'tinyR_purple', 'tinyR_orange', 'tinyR_teal', 'tinyR_red', 'tinyR_gray'],
    imageL: ['tinyL_pink', 'tinyL_green', 'tinyL_yellow', 'tinyL_purple', 'tinyL_orange', 'tinyL_teal', 'tinyL_red', 'tinyL_gray']}, 
  { name:'peter', id:'1',
    imageR: ['peterR_pink', 'peterR_green', 'peterR_yellow', 'peterR_purple', 'peterR_orange', 'peterR_teal', 'peterR_red', 'peterR_gray'],
    imageL: ['peterL_pink', 'peterL_green', 'peterL_yellow', 'peterL_purple', 'peterL_orange', 'peterL_teal', 'peterL_red', 'peterL_gray']},
  { name:'granola', id:'2',
    imageR: ['granolaR_pink', 'granolaR_green', 'granolaR_yellow', 'granolaR_purple', 'granolaR_orange', 'granolaR_teal', 'granolaR_red', 'granolaR_gray'],
    imageL: ['granolaL_pink', 'granolaL_green', 'granolaL_yellow', 'granolaL_purple', 'granolaL_orange', 'granolaL_teal', 'granolaL_red', 'granolaL_gray']},  
  { name:'uncle', id:'3',
    imageR: ['uncleR_pink', 'uncleR_green', 'uncleR_yellow', 'uncleR_purple', 'uncleR_orange', 'uncleR_teal', 'uncleR_red', 'uncleR_gray'],
    imageL: ['uncleL_pink', 'uncleL_green', 'uncleL_yellow', 'uncleL_purple', 'uncleL_orange', 'uncleL_teal', 'uncleL_red', 'uncleL_gray']},
  { name:'puffy', id:'4',
    imageR: ['tinyR_pink', 'tinyR_green', 'tinyR_yellow', 'tinyR_purple', 'tinyR_orange', 'tinyR_teal', 'tinyR_red', 'tinyR_gray'],
    imageL: ['tinyL_pink', 'tinyL_green', 'tinyL_yellow', 'tinyL_purple', 'tinyL_orange', 'tinyL_teal', 'tinyL_red', 'tinyL_gray']}, 
  { name:'booknerd', id:'5',
    imageR: ['peterR_pink', 'peterR_green', 'peterR_yellow', 'peterR_purple', 'peterR_orange', 'peterR_teal', 'peterR_red', 'peterR_gray'],
    imageL: ['peterL_pink', 'peterL_green', 'peterL_yellow', 'peterL_purple', 'peterL_orange', 'peterL_teal', 'peterL_red', 'peterL_gray']},
    { name:'yuki', id:'6',
    imageR: ['granolaR_pink', 'granolaR_green', 'granolaR_yellow', 'granolaR_purple', 'granolaR_orange', 'granolaR_teal', 'granolaR_red', 'granolaR_gray'],
    imageL: ['granolaL_pink', 'granolaL_green', 'granolaL_yellow', 'granolaL_purple', 'granolaL_orange', 'granolaL_teal', 'granolaL_red', 'granolaL_gray']},  
  { name:'notsure', id:'7',
    imageR: ['uncleR_pink', 'uncleR_green', 'uncleR_yellow', 'uncleR_purple', 'uncleR_orange', 'uncleR_teal', 'uncleR_red', 'uncleR_gray'],
    imageL: ['uncleL_pink', 'uncleL_green', 'uncleL_yellow', 'uncleL_purple', 'uncleL_orange', 'uncleL_teal', 'uncleL_red', 'uncleL_gray']}];

// Color Array : Total 400
var colorList = [
    {'id':0, 'name':'_pink', 'number':21, 'r':255, 'g': 53, 'b':98},
    {'id':1, 'name':'_green', 'number':5, 'r':30, 'g': 85, 'b':92},
    {'id':2, 'name':'_yellow', 'number':5, 'r':239, 'g': 160, 'b':11},
    {'id':3, 'name':'_purple', 'number':11, 'r':86, 'g': 16, 'b':86},
    {'id':4, 'name':'_orange', 'number':11, 'r':220, 'g': 96, 'b':46},
    {'id':5, 'name':'_teal', 'number':2, 'r':0, 'g': 175, 'b':185},
    {'id':6, 'name':'_red', 'number':4, 'r':145, 'g': 39, 'b':55},
    {'id':7, 'name':'_gray', 'number':341, 'r':55, 'g': 55, 'b':55}];
var colorArray = [];

function preload() {
    //Push 400 colors into the array
    for(var c=0; c<colorList.length;c++){
      for(var cn=0; cn<colorList[c].number;cn++){
        colorArray.push(colorList[c].id);
    }}
    //Number images on the floor
    for(var im=0; im<groundImg.length;im++){
      groundImg[im] = loadImage('images/' + groundImg[im].name + '.png');
    }
    for(var ic=0; ic<icons.length;ic++){
      icons[ic] = loadImage(icons[ic].img);
    }

    //Prepare all charactor animations x 8 Colors each side
    for(var ch=0; ch<charactorList.length;ch++){
      for(var c=0; c<colorList.length;c++){
        animNameR = charactorList[ch].imageR[c] + '_anim';
        animNameL = charactorList[ch].imageL[c] + '_anim';
        animImgR = 'walkers/' + charactorList[ch].imageR[c] + '.png';
        animImgL = 'walkers/' + charactorList[ch].imageL[c] + '.png';
        animNameR = loadSpriteSheet(animImgR, 200, 300, 6);
        animNameL = loadSpriteSheet(animImgL, 200, 300, 6);
        charactorList[ch].imageR[c] = loadAnimation(animNameR);
        charactorList[ch].imageL[c] = loadAnimation(animNameL);
      }
    }

    //Fonts
    mainFont = loadFont('assets/PlayfairDisplay-BoldItalic.otf');
    bodyFont = loadFont('assets/Montserrat-Regular.otf');
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  topRowR = new Group(); secondRowR = new Group(); thirdRowR = new Group(); fourthRowR = new Group(); fifthRowR = new Group();
  topRowL = new Group(); secondRowL = new Group(); thirdRowL = new Group(); fourthRowL = new Group(); fifthRowL = new Group();

// Setup size, speed and position of each row group
playListR = (width < 600) ? [
    {"rowID": topRowR, "x": width*4, "y":100, "scale":0.55, "speed": -1.8},
    {"rowID": secondRowR, "x": width*6, "y":height/5, "scale":0.72, "speed": -3},
    {"rowID": thirdRowR, "x": width*8, "y":height/3, "scale":1.08, "speed": -4},
    {"rowID": fourthRowR, "x": width*12, "y":height/2, "scale":1.5, "speed": -5},
    {"rowID": fifthRowR, "x": width*16, "y":height-100, "scale":2.08, "speed": -6}
    ]:[
    {"rowID": topRowR, "x": width*2, "y":height/7, "scale":0.52, "speed": -1.8},
    {"rowID": secondRowR, "x": width*3, "y":height/5, "scale":0.72, "speed": -3},
    {"rowID": thirdRowR, "x": width*4, "y":height/3, "scale":1.08, "speed": -4},
    {"rowID": fourthRowR, "x": width*5, "y":height/2, "scale":1.5, "speed": -5},
    {"rowID": fifthRowR, "x": width*7, "y":height-200, "scale":2.08, "speed": -6}];
playListL = (width < 600) ? [
    {"rowID": topRowL, "x": -(width*4), "y":120, "scale":0.6, "speed": 0.7},
    {"rowID": secondRowL, "x": -(width*6), "y":height/5 + 15, "scale":0.76, "speed": 1.3},
    {"rowID": thirdRowL, "x": -(width*8), "y":height/3 + 20, "scale":1.12, "speed": 2.5},
    {"rowID": fourthRowL, "x": -(width*16), "y":height/2 + 25, "scale":1.54, "speed": 3.5},
    {"rowID": fifthRowL, "x": -(width*16), "y":height-100 + 30, "scale":2.12, "speed": 4.5}
    ]:[
    {"rowID": topRowL, "x": -(width*1.2), "y":height/7 + 20, "scale":0.56, "speed": 0.7},
    {"rowID": secondRowL, "x": -(width*2.5), "y":height/5 + 30, "scale":0.76, "speed": 1.3},
    {"rowID": thirdRowL, "x": -(width*4), "y":height/3 + 40, "scale":1.12, "speed": 2.5},
    {"rowID": fourthRowL, "x": -(width*5), "y":height/2 + 50, "scale":1.54, "speed": 3.5},
    {"rowID": fifthRowL, "x": -(width*7), "y":height-200 + 60, "scale":2.12, "speed": 4.5}];

//assign sprites to Right Rows
    for(var r=0; r<playListR.length;r++){
      for(var ch=0; ch<charactorList.length;ch++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].imageR[coId] + '_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'R' + coId);
        charactorList[ch].imageR[coId].frameDelay = floor(random(6,9.9));
        animSpr = createSprite(playListR[r].x * randomX, playListR[r].y, 200, 300);
        animSpr.scale = playListR[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].imageR[coId]);
        //Get color ID when clicked and hover
        animSpr.setCollider("rectangle", 35, 0, 130, 230);
        animSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
        animSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };        
        animSpr.addToGroup(playListR[r].rowID);
        }
    }

//assign sprites to Left Rows
    for(var r=0; r<playListL.length;r++){
      for(var ch=0; ch<charactorList.length;ch++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].imageL[coId] + '_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'L' + coId);
        charactorList[ch].imageL[coId].frameDelay = floor(random(6,9.9));
        animSpr = createSprite(playListL[r].x * randomX, playListL[r].y, 200, 300);
        animSpr.scale = playListL[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].imageL[coId]);
        //Get color ID
        animSpr.setCollider("rectangle", 35, 0, 130, 230);
        animSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
        animSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };         
        animSpr.addToGroup(playListL[r].rowID);
        }
    }
 };

function draw() {
  clear();
  background(224, 224, 224);

////// Horizontal Animation from the Right
for(var row=0; row < playListR.length; row++){
    var rowID = playListR[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListR[row].speed + i/3;
     if (thisSpr.position.x < - 300) {
        var oldLabel = thisSpr.getAnimationLabel();
        thisSpr.remove();
        var separateLabel = split(oldLabel, 'R');
        for(var ch=0; ch<charactorList.length; ch++){
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var charaId = separateLabel[0];
        var newR_label = charaId + 'R' + coId;
        var newSpr = createSprite(playListR[row].x, playListR[row].y, 200, 300);
        newSpr.scale = playListR[row].scale;
        newSpr.addAnimation(newR_label, charactorList[charaId].imageR[coId]);
        }
        //Get color ID
        newSpr.setCollider("rectangle", 35, 0, 130, 230);
        newSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
        newSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
         newSpr.addToGroup(rowID);
        }
     }
  }

////// Horizontal Animation from the Left
for(var row=0; row < playListL.length; row++){
    var rowID = playListL[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListL[row].speed + i/3;
     if (thisSpr.position.x > width + 200) {
        var oldLabel = thisSpr.getAnimationLabel();
        thisSpr.remove();
        var separateLabel = split(oldLabel, 'L');
        for(var ch=0; ch<charactorList.length; ch++){
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var charaId = separateLabel[0];
        var newL_label = charaId + 'L' + coId;
        var newSpr = createSprite(playListL[row].x, playListL[row].y, 200, 300);
        newSpr.scale = playListL[row].scale;
        newSpr.addAnimation(newL_label, charactorList[charaId].imageL[coId]);
        }
        //Get color ID
        newSpr.setCollider("rectangle", 35, 0, 130, 230);
        newSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
        newSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
        };
        newSpr.addToGroup(rowID);
         }
  }}

//Number images for the floor
  imageMode(CENTER);
  for(var im=0; im<groundImg.length;im++){
    var c = colorSwitch;
    (width < 900) ? [
      image(groundImg[c], width/2, (height/2) - 50, width, width*0.7)
    ]:[
      image(groundImg[c], width/2, height/2)
    ]
  }

//Top info popup
if(infoSwitch) {
  var c = colorSwitch;
  noStroke();
  fill(colorList[c].r, colorList[c].g, colorList[c].b, 180);
  rect(0,0, width, 100);
  noFill();
  stroke(224);
  for(ic=0;ic<icons.length;ic++){
    ellipse((width/2-80) + (80*ic), 50, 50, 50);
    image(icons[ic],(width/2-80) + (80*ic), 50, 50, 50);
    }
}

// Draw sprite in the Z-index order
noStroke();
fill(255,255,255,20);
rect(0,0,width, height);
drawSprites(topRowR);
drawSprites(topRowL);
rect(0,0,width, height);
drawSprites(secondRowR);
drawSprites(secondRowL);
rect(0,0,width, height);
drawSprites(thirdRowR);
drawSprites(thirdRowL);
rect(0,0,width, height);
drawSprites(fourthRowR);
drawSprites(fourthRowL);
rect(0,0,width, height);
drawSprites(fifthRowR);
drawSprites(fifthRowL);

//Bottom info popup
if(infoSwitch) {
  var c = colorSwitch;
  var h = infoText[c].h1;
  var t = infoText[c].body;
  noStroke();
  fill(colorList[c].r, colorList[c].g, colorList[c].b);
  (width < 900) ? [
    rect(0, (height - 40 - 190), width, 200)]:[
    rect(0, (height - 40 - 100), width, 100)]
  rect(0, (height - 100), width, 100);
  fill(224);
  textFont(mainFont);
  textAlign(CENTER);
  (width < 900) ? [textSize(20)]:[textSize(24)];
  (width < 900) ? [
    text(h, width/16, (height - 40 - 160), (width - width/8), 100)]:[
    text(h, width/8, (height - 40 - 80), (width - width/4), 100)];
  textFont(bodyFont);
  textSize(16);
  (width < 900) ? [
    text(t, width/16, (height - 40 - 120), (width - width/8), 100)]:[
    text(t, width/8, (height - 40 - 40), (width - width/4), 100)];
}
};

function mouseClicked() {
// Paused + resumed when clicked
    if(pauseSwitch) {  
      noLoop();
    } else {
      loop();}
    pauseSwitch = !pauseSwitch;
    infoSwitch = !infoSwitch;
};