var spriteframeData, sprSht;
var playListR = []; var playListL = [];
var pauseSwitch = true;
var infoSwitch = false;
var colorSwitch = 7;
var mainFont, bodyFont;
var topRowR, topRowL, secondRowR, secondRowL, thirdRowR, thirdRowL, fourthRowR, fourthRowL, fifthRowR, fifthRowL;

// DOM elements
var bottomPanel, topPanel, topPanelContent;
var prevIssue, nextIssue;
var issueH, issueP;
var GroundImg;
// var theBody;
// var learnBtn, helpBtn, voicesBtn;

// Info popup data
var groundImg = [
  {id:0, name:'images/numbers_pink.png'},
  {id:1, name:'images/numbers_green.png'},
  {id:2, name:'images/numbers_yellow.png'},
  {id:3, name:'images/numbers_purple.png'},
  {id:4, name:'images/numbers_orange.png'},
  {id:5, name:'images/numbers_teal.png'},
  {id:6, name:'images/numbers_red.png'},
  {id:7, name:'images/numbers_gray.png'}];
var infoText = [
  {h1:'Depression / MDD', body:'Persistently depressed mood or loss of interest in activities causing significant impairment in daily life. The most common mental disorder in Singapore.'},
  {h1:'Bipolar', body:'Episodes of mood swings ranging from depressive lows to manic highs. This disorder is characterised by depressive episodes and mania.'},
  {h1:'Anxiety / GAD', 'body':"Feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities. They are often accompanied by other symptoms."},
  {h1:'OCD', body:'Obsessive-Compulsive Disorder. The occurrence of obsessions, compulsive rituals or, both recurrent and persistent thoughts, impulses, or images that are experienced as intrusive and cause great anxiety.'},
  {h1:'Alcohol Abuse', body:'Recurrent alcohol use resulting in failure to fulfill major role obligations, or recurrent use in situations in which it is physically hazardous.'},
  {h1:'Alcohol Dependence', body:'Maladaptive pattern of alcohol use, leading to clinically significant impairment or distress, and the essential feature of which is a cluster of cognitive, behavioural and physical symptoms.'},
  {h1:'Multiple issues', body:'Comorbidity, presence of two or more of the above mental disorders in the same period. Symptoms often overlap and can be additive.'},
  {h1:'Mental health issues', body:'A wide range of conditions that affect mood, thinking, and behavior. 1 in 7 people in Singapore has experienced mental issues, only 2 of them sought help.'}
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
    imageR: ['puffyR_pink', 'puffyR_green', 'puffyR_yellow', 'puffyR_purple', 'puffyR_orange', 'puffyR_teal', 'puffyR_red', 'puffyR_gray'],
    imageL: ['puffyL_pink', 'puffyL_green', 'puffyL_yellow', 'puffyL_purple', 'puffyL_orange', 'puffyL_teal', 'puffyL_red', 'puffyL_gray']}, 
  { name:'notsure', id:'5',
    imageR: ['notsureR_pink', 'notsureR_green', 'notsureR_yellow', 'notsureR_purple', 'notsureR_orange', 'notsureR_teal', 'notsureR_red', 'notsureR_gray'],
    imageL: ['notsureL_pink', 'notsureL_green', 'notsureL_yellow', 'notsureL_purple', 'notsureL_orange', 'notsureL_teal', 'notsureL_red', 'notsureL_gray']},
    { name:'yuki', id:'6',
    imageR: ['granolaR_pink', 'granolaR_green', 'granolaR_yellow', 'granolaR_purple', 'granolaR_orange', 'granolaR_teal', 'granolaR_red', 'granolaR_gray'],
    imageL: ['granolaL_pink', 'granolaL_green', 'granolaL_yellow', 'granolaL_purple', 'granolaL_orange', 'granolaL_teal', 'granolaL_red', 'granolaL_gray']},  
  { name:'potato', id:'7',
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
    {'id':7, 'name':'_gray', 'number':341, 'r':34, 'g': 34, 'b':34}];
var colorArray = [];

function preload() {
    // Push 400 colors into the array
    for(var c=0; c<colorList.length;c++){
      for(var cn=0; cn<colorList[c].number;cn++){
        colorArray.push(colorList[c].id);
    }}

    // Prepare all charactor animations x 8 Colors each side x 2
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

    //Dom elements
    bottomPanel = select('#bottomPanel');
    topPanel = select('#topPanel');
    topPanelContent = select('#topPanelContent');
    prevIssue = select('#prevIssue');
    nextIssue = select('#nextIssue');
    issueH = select('#issueH1');
    issueP = select('#issueP');
    GroundImg = select('#GroundImg');
    // learnBtn = select('#learnBtn');
    // helpBtn = select('#helpBtn');
    // voicesBtn = select('#voicesBtn');
    // thetheBody = select('#theBody');
};

function setup() {
  createCanvas(windowWidth, window.innerHeight);
  setFrameRate(30);
  topRowR = new Group(); secondRowR = new Group(); thirdRowR = new Group(); fourthRowR = new Group(); fifthRowR = new Group();
  topRowL = new Group(); secondRowL = new Group(); thirdRowL = new Group(); fourthRowL = new Group(); fifthRowL = new Group();

// Setup size, speed and position of each row group
playListR = (width < 600) ? [
    {"rowID": topRowR, "x": width*4, "y":100, "scale":0.55, "speed": -3},
    {"rowID": secondRowR, "x": width*6, "y":height/5, "scale":0.72, "speed": -4},
    {"rowID": thirdRowR, "x": width*8, "y":height/3, "scale":1.08, "speed": -5},
    {"rowID": fourthRowR, "x": width*12, "y":height/2, "scale":1.5, "speed": -6.5},
    {"rowID": fifthRowR, "x": width*16, "y":height-100, "scale":2.4, "speed": -8}
    ]:[
    {"rowID": topRowR, "x": width*3, "y":height/7, "scale":0.52, "speed": -3},
    {"rowID": secondRowR, "x": width*4, "y":height/5, "scale":0.72, "speed": -4},
    {"rowID": thirdRowR, "x": width*5, "y":height/3, "scale":1.08, "speed": -5},
    {"rowID": fourthRowR, "x": width*6, "y":height/2, "scale":1.5, "speed": -6.5},
    {"rowID": fifthRowR, "x": width*7, "y":height-220, "scale":2.4, "speed": -8}];
playListL = (width < 600) ? [
    {"rowID": topRowL, "x": -(width*3), "y":120, "scale":0.6, "speed": 3},
    {"rowID": secondRowL, "x": -(width*5), "y":height/5 + 15, "scale":0.76, "speed": 4},
    {"rowID": thirdRowL, "x": -(width*7), "y":height/3 + 20, "scale":1.12, "speed": 5},
    {"rowID": fourthRowL, "x": -(width*15), "y":height/2 + 25, "scale":1.54, "speed": 6.5},
    {"rowID": fifthRowL, "x": -(width*15), "y":height-100, "scale":2.5, "speed": 8}
    ]:[
    {"rowID": topRowL, "x": -(width*2), "y":height/7 + 20, "scale":0.56, "speed": 3},
    {"rowID": secondRowL, "x": -(width*3), "y":height/5 + 30, "scale":0.76, "speed": 4},
    {"rowID": thirdRowL, "x": -(width*4), "y":height/3 + 40, "scale":1.12, "speed": 5},
    {"rowID": fourthRowL, "x": -(width*5), "y":height/2 + 50, "scale":1.54, "speed": 6.5},
    {"rowID": fifthRowL, "x": -(width*6), "y":height-200, "scale":2.5, "speed": 8}];

// Assign sprites to Right Rows
    for(var r=0; r<playListR.length;r++){
      for(var ch=0; ch<charactorList.length;ch++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.33, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].imageR[coId] + '_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'R' + coId);
        charactorList[ch].imageR[coId].frameDelay = floor(random(3,5.9));
        animSpr = createSprite(playListR[r].x * randomX, playListR[r].y, 200, 300);
        animSpr.scale = playListR[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].imageR[coId]);
        //Get color ID when clicked and hover
        animSpr.setCollider("rectangle", 35, 0, 130, 230);
        animSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
          updateGround();
        };
        animSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'R');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
          updateGround();
        };        
        animSpr.addToGroup(playListR[r].rowID);
        }
    }

// Assign sprites to Left Rows
    for(var r=0; r<playListL.length;r++){
      for(var ch=0; ch<charactorList.length;ch++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.1, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].imageL[coId] + '_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'L' + coId);
        charactorList[ch].imageL[coId].frameDelay = floor(random(3,5.9));
        animSpr = createSprite(playListL[r].x * randomX, playListL[r].y, 200, 300);
        animSpr.scale = playListL[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].imageL[coId]);
        //Get color ID
        animSpr.setCollider("rectangle", 35, 0, 130, 230);
        animSpr.onMousePressed = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
          updateGround();
        };
        animSpr.onMouseOver = function() {
          var newLabel = this.getAnimationLabel();
          var separatedLabel = split(newLabel, 'L');
          (separatedLabel[1] == 7) ? [colorSwitch = colorSwitch]:[colorSwitch = separatedLabel[1]]
          updateGround();
        };         
        animSpr.addToGroup(playListL[r].rowID);
        }
    }
 };

function draw() {
  clear();

////// Horizontal Animation from the Right
for(var row=0; row < playListR.length; row++){
    var rowID = playListR[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    var delayValue = floor(random(3,5.9));
    var mappin = map((i + 1) / delayValue, 1/5, rowID.length/3, 0.8, 2.2);
    thisSpr.velocity.x = playListR[row].speed * 0.65 * mappin;
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
        charactorList[charaId].imageR[coId].frameDelay = delayValue;
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
    var delayValue = floor(random(3,5.9));
    var mappin = map((i + 1) / delayValue, 1/5, rowID.length/3, 1, 2);
    thisSpr.velocity.x = playListL[row].speed * 0.65 * mappin;
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
        charactorList[charaId].imageL[coId].frameDelay = delayValue;
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

//////// Frame rate test
var fr = 'FrameRate test:' + floor(getFrameRate());
fill(100);
textAlign(CENTER);
textFont(mainFont);
textSize(24);
text(fr, width/2, 100);

// Draw sprite in the Z-index order + white screens in between
noStroke();
fill(255,255,255,25);
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
};

function mouseClicked() {
  var c = float(colorSwitch);
  var pr = (c == 0) ? 7 : c - 1;
  var ne = (c == 7) ? 0 : c + 1;
// Update the pannel color & info
    if(pauseSwitch) {  
      noLoop();
      // (width < 600) ? bottomPanel.style('background-color','rgba('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ',0.8)') : bottomPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      (width < 800) ? bottomPanel.style('background-color','rgba(224, 224, 216, 0.8)') : bottomPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      topPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      prevIssue.style('background-color','rgb('+ colorList[pr].r + ',' + colorList[pr].g + ',' + colorList[pr].b + ')');
      nextIssue.style('background-color','rgb('+ colorList[ne].r + ',' + colorList[ne].g + ',' + colorList[ne].b + ')');
      bottomPanel.style('opacity','1');
      (width < 800) ? issueH.style('color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')'):issueH.style('color','rgb(224, 224, 216)');
      issueH.html(infoText[c].h1);
      issueP.html(infoText[c].body);
      bottomPanel.style('bottom','0');
      topPanel.style('top','0');
      topPanelContent.style('top','0');
      // createA('https://siorikitajima.github.io/strangers/#/data', voicesBtn, '_parent');
      updateGround();
    } else {
      loop();
      (width < 800) ? bottomPanel.style('bottom','-100vh') : bottomPanel.style('bottom','-150px');
      (width < 800) ? topPanel.style('top','-150px') : topPanel.style('top','-100px');
      (width < 800) ? topPanelContent.style('top','-150px') : topPanelContent.style('top','-100px');
    }
    pauseSwitch = !pauseSwitch;
    infoSwitch = !infoSwitch;
};

function previousColor() {
  var c = float(colorSwitch);
  colorSwitch = (c == 0) ? 7 : c -1;
  pauseSwitch = true;
  updateGround();
};

function nextColor() {
  var c = float(colorSwitch);
  colorSwitch = (c == 7) ? 0 : c +1;
  pauseSwitch = true;
  updateGround();
};

function updateGround(){
  var c = colorSwitch;
  var theImg = groundImg[c].name;
  GroundImg.attribute('src', theImg);
}