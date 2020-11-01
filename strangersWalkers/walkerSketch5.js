var spriteframeData, sprSht;
var playListR = []; var playListL = [];
var pauseSwitch = true;
var infoSwitch = false;
var colorSwitch = 7;
var mainFont, bodyFont;
var topRowR, topRowL, secondRowR, secondRowL, thirdRowR, thirdRowL, fourthRowR, fourthRowL, fifthRowR, fifthRowL;

// DOM elements
var bottomPanel, topPanel, topPanelContent;
var prevIssue, nextIssue, issueHDiv;
var issueH, issueP, issueHM, issuePM;
var GroundImg;
var learnLink, helpLink, voicesLink, shareLink, copiedMsg;
var leftAnimation = {};
var rightAnimation = {};

// Info popup data
var groundImg = [
  {id:0, name:'images/numbers_pink.png'},
  {id:1, name:'images/numbers_emerald.png'},
  {id:2, name:'images/numbers_yellow.png'},
  {id:3, name:'images/numbers_purple.png'},
  {id:4, name:'images/numbers_orange.png'},
  {id:5, name:'images/numbers_blue.png'},
  {id:6, name:'images/numbers_red.png'},
  {id:7, name:'images/numbers_gray.png'},
  {id:8, name:'images/numbers_teal.png'},
  {id:9, name:'images/numbers_coral.png'},
  {id:10, name:'images/numbers_lavendar.png'},
  {id:11, name:'images/numbers_sky.png'},
  {id:12, name:'images/numbers_maroon.png'},
  {id:13, name:'images/numbers_green.png'}
];
var infoText = [
  {h1:'Depression / MDD', body:'Persistently depressed mood or loss of interest in activities causing significant impairment in daily life. The most common mental disorder in Singapore.', slug: 'depression'},
  {h1:'Bipolar', body:'Episodes of mood swings ranging from depressive lows to manic highs. This disorder is characterised by depressive episodes and mania.', slug: 'bipolar'},
  {h1:'Anxiety / GAD', body:"Feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities. They are often accompanied by other symptoms.", slug: 'anxiety'},
  {h1:'OCD', body:'Obsessive-Compulsive Disorder. The occurrence of obsessions, compulsive rituals or, both recurrent and persistent thoughts, impulses, or images that are experienced as intrusive and cause great anxiety.', slug: 'ocd'},
  {h1:'Alcohol Abuse', body:'Recurrent alcohol use resulting in failure to fulfill major role obligations, or recurrent use in situations in which it is physically hazardous.', slug: 'alcohol-abuse'},
  {h1:'Dissociative Identity Disorder', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'did'},
  {h1:'Multiple issues', body:'Comorbidity, presence of two or more of the above mental disorders in the same period. Symptoms often overlap and can be additive.', slug: 'general'},
  {h1:'Mental health issues', body:'A wide range of conditions that affect mood, thinking, and behavior. 1 in 7 people in Singapore has experienced mental issues, with only two of them seeking help.', slug: 'general'},
  {h1:'Body Dysmorphic Disorder', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'bdd'},
  {h1:'Borderline Personality Disorder', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'bpd'},
  {h1:'Post Traumatic Stress Disorder', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'ptsd'},
  {h1:'Psychosis', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'psychosis'},
  {h1:'Eating Disorder', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'eating-disorder'},
  {h1:'Schizophrenia', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', slug: 'schizophrenia'}
]

var icons = [
  {name:'learn', img:'images/infoIcons_learn.png'}, 
  {name:'help', img:'images/infoIcons_help.png'}, 
  {name:'voices', img:'images/infoIcons_voices.png'}];

// Charactor Data
var charactorList = [
  { name:'tiny', id:'0',
    anime: ['tiny_pink', 'tiny_emerald', 'tiny_yellow', 'tiny_purple', 'tiny_orange', 'tiny_blue', 'tiny_red', 'tiny_gray', 'tiny_teal', 'tiny_coral', 'tiny_lavendar', 'tiny_sky', 'tiny_maroon', 'tiny_green']}, 
  { name:'peter', id:'1',
    anime: ['peter_pink', 'peter_emerald', 'peter_yellow', 'peter_purple', 'peter_orange', 'peter_blue', 'peter_red', 'peter_gray', 'peter_teal', 'peter_coral', 'peter_lavendar', 'peter_sky', 'peter_maroon', 'peter_green']},
  { name:'granola', id:'2',
    anime: ['granola_pink', 'granola_emerald', 'granola_yellow', 'granola_purple', 'granola_orange', 'granola_blue', 'granola_red', 'granola_gray', 'granola_teal', 'granola_coral', 'granola_lavendar', 'granola_sky', 'granola_maroon', 'granola_green']},  
  { name:'uncle', id:'3',
    anime: ['uncle_pink', 'uncle_emerald', 'uncle_yellow', 'uncle_purple', 'uncle_orange', 'uncle_blue', 'uncle_red', 'uncle_gray', 'uncle_teal', 'uncle_coral', 'uncle_lavendar', 'uncle_sky', 'uncle_maroon', 'uncle_green']},
  { name:'puffy', id:'4',
    anime: ['puffy_pink', 'puffy_emerald', 'puffy_yellow', 'puffy_purple', 'puffy_orange', 'puffy_blue', 'puffy_red', 'puffy_gray', 'puffy_teal', 'puffy_coral', 'puffy_lavendar', 'puffy_sky', 'puffy_maroon', 'puffy_green']}, 
  { name:'notsure', id:'5',
    anime: ['notsure_pink', 'notsure_emerald', 'notsure_yellow', 'notsure_purple', 'notsure_orange', 'notsure_blue', 'notsure_red', 'notsure_gray', 'notsure_teal', 'notsure_coral', 'notsure_lavendar', 'notsure_sky', 'notsure_maroon', 'notsure_green']}, 
  { name:'artsy', id:'6',
    anime: ['artsy_pink', 'artsy_emerald', 'artsy_yellow', 'artsy_purple', 'artsy_orange', 'artsy_blue', 'artsy_red', 'artsy_gray', 'artsy_teal', 'artsy_coral', 'artsy_lavendar', 'artsy_sky', 'artsy_maroon', 'artsy_green']}, 
  { name:'brutus', id:'7',
    anime: ['brutus_pink', 'brutus_emerald', 'brutus_yellow', 'brutus_purple', 'brutus_orange', 'brutus_blue', 'brutus_red', 'brutus_gray', 'brutus_teal', 'brutus_coral', 'brutus_lavendar', 'brutus_sky', 'brutus_maroon', 'brutus_green']}, 
  { name:'snow', id:'8',
    anime: ['snow_pink', 'snow_emerald', 'snow_yellow', 'snow_purple', 'snow_orange', 'snow_blue', 'snow_red', 'snow_gray', 'snow_teal', 'snow_coral', 'snow_lavendar', 'snow_sky', 'snow_maroon', 'snow_green']}, 
  { name:'tulip', id:'9',
    anime: ['tulip_pink', 'tulip_emerald', 'tulip_yellow', 'tulip_purple', 'tulip_orange', 'tulip_blue', 'tulip_red', 'tulip_gray', 'tulip_teal', 'tulip_coral', 'tulip_lavendar', 'tulip_sky', 'tulip_maroon', 'tulip_green']}, 
  { name:'wasabi', id:'10',
    anime: ['wasabi_pink', 'wasabi_emerald', 'wasabi_yellow', 'wasabi_purple', 'wasabi_orange', 'wasabi_blue', 'wasabi_red', 'wasabi_gray', 'wasabi_teal', 'wasabi_coral', 'wasabi_lavendar', 'wasabi_sky', 'wasabi_maroon', 'wasabi_green']}, 
  { name:'zen', id:'11',
    anime: ['zen_pink', 'zen_emerald', 'zen_yellow', 'zen_purple', 'zen_orange', 'zen_blue', 'zen_red', 'zen_gray', 'zen_teal', 'zen_coral', 'zen_lavendar', 'zen_sky', 'zen_maroon', 'zen_green']}
];
  

// Color Array : Total 400
var colorList = [
    {'id':0, 'name':'_pink', 'number':23, 'r':255, 'g': 53, 'b':98},
    {'id':1, 'name':'_emerald', 'number':6, 'r':31, 'g': 85, 'b':92},
    {'id':2, 'name':'_yellow', 'number':6, 'r':227, 'g': 132, 'b':0},
    {'id':3, 'name':'_purple', 'number':12, 'r':86, 'g': 16, 'b':86},
    {'id':4, 'name':'_orange', 'number':12, 'r':224, 'g': 96, 'b':46},
    {'id':5, 'name':'_blue', 'number':6, 'r':44, 'g': 63, 'b':133},
    {'id':6, 'name':'_red', 'number':4, 'r':202, 'g': 27, 'b':56},
    {'id':7, 'name':'_gray', 'number':590, 'r':34, 'g': 34, 'b':34},
    {'id':8, 'name':'_teal', 'number':7, 'r':0, 'g': 147, 'b':139},
    {'id':9, 'name':'_coral', 'number':4, 'r':233, 'g': 115, 'b':109},
    {'id':10, 'name':'_lavendar', 'number':18, 'r':139, 'g': 55, 'b':138},
    {'id':11, 'name':'_sky', 'number':8, 'r':30, 'g': 145, 'b':178},
    {'id':12, 'name':'_maroon', 'number':2, 'r':145, 'g': 0, 'b':55},
    {'id':13, 'name':'_green', 'number':2, 'r':76, 'g': 133, 'b':0}
];

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
        animName = charactorList[ch].name + colorList[c].name + '_anim';
        animImgA = 'walkers/' + charactorList[ch].name + colorList[c].name +'.png';
        animName = loadSpriteSheet(animImgA, 200, 300, 6);
        charactorList[ch].anime[c] = loadAnimation(animName);
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
    issueHDiv = select('#issueHDiv');
    issueH = select('#h1Screen');
    issueHM = select('#h1Mobile');
    issueP = select('#pScreen');
    issuePM = select('#pMobile');
    GroundImg = select('#GroundImg');
    learnLink = select('#learnLink');
    helpLink = select('#helpLink');
    voicesLink = select('#voicesLink');
    shareLink = select('#shareLink');
    copiedMsg = select('#copied');
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
    {"rowID": fifthRowR, "x": width*16, "y":height-50, "scale":2.4, "speed": -8}
    ]:[
    {"rowID": topRowR, "x": width*3, "y":height/7, "scale":0.52, "speed": -3},
    {"rowID": secondRowR, "x": width*4, "y":height/5, "scale":0.72, "speed": -4},
    {"rowID": thirdRowR, "x": width*5, "y":height/3, "scale":1.08, "speed": -5},
    {"rowID": fourthRowR, "x": width*6, "y":height/2, "scale":1.5, "speed": -6.5},
    {"rowID": fifthRowR, "x": width*7, "y":height-100, "scale":2.4, "speed": -8}];
playListL = (width < 600) ? [
    {"rowID": topRowL, "x": -(width*3), "y":120, "scale":0.6, "speed": 3},
    {"rowID": secondRowL, "x": -(width*5), "y":height/5 + 15, "scale":0.76, "speed": 4},
    {"rowID": thirdRowL, "x": -(width*7), "y":height/3 + 20, "scale":1.12, "speed": 5},
    {"rowID": fourthRowL, "x": -(width*15), "y":height/2 + 25, "scale":1.54, "speed": 6.5},
    {"rowID": fifthRowL, "x": -(width*15), "y":height-40, "scale":2.5, "speed": 8}
    ]:[
    {"rowID": topRowL, "x": -(width*2), "y":height/7 + 20, "scale":0.56, "speed": 3},
    {"rowID": secondRowL, "x": -(width*3), "y":height/5 + 30, "scale":0.76, "speed": 4},
    {"rowID": thirdRowL, "x": -(width*4), "y":height/3 + 40, "scale":1.12, "speed": 5},
    {"rowID": fourthRowL, "x": -(width*5), "y":height/2 + 50, "scale":1.54, "speed": 6.5},
    {"rowID": fifthRowL, "x": -(width*6), "y":height-90, "scale":2.5, "speed": 8}];

// Assign sprites to Right Rows
    for(var r=0; r<playListR.length;r++){
      for(var ch=0; ch<charactorList.length;ch++){
        var randomColor = floor(random(0, 699.9));
        var randomX = random(0.22, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].name + colorList[coId].name + 'R_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'R' + coId);
        charactorList[ch].anime[coId].frameDelay = floor(random(4,6.9));
        animSpr = createSprite(playListR[r].x * randomX, playListR[r].y, 200, 300);
        animSpr.scale = playListR[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].anime[coId]);
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
        var randomColor = floor(random(0, 699.9));
        var randomX = random(0.01, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = charactorList[ch].name + colorList[coId].name + 'L_spr';
        // var animLab = str(coId);
        var animLab = str(charactorList[ch].id + 'L' + coId);
        charactorList[ch].anime[coId].frameDelay = floor(random(4,6.9));
        animSpr = createSprite(playListL[r].x * randomX, playListL[r].y, 200, 300);
        animSpr.scale = playListL[r].scale;
        animSpr.addAnimation(animLab, charactorList[ch].anime[coId]);
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
    var mappin = map((i + 1) / delayValue, 1/5, rowID.length/3, 0.8, 1.6); 
    thisSpr.velocity.x = (width < 800) ? playListR[row].speed * 0.4 * mappin : playListR[row].speed * 0.6 * mappin;
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
        charactorList[charaId].anime[coId].frameDelay = delayValue;
        newSpr.addAnimation(newR_label, charactorList[charaId].anime[coId]);
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
    thisSpr.mirrorX(-1);
    thisSpr.velocity.x = playListL[row].speed * 0.6 * mappin;
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
        charactorList[charaId].anime[coId].frameDelay = delayValue;
        newSpr.addAnimation(newL_label, charactorList[charaId].anime[coId]);
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
  var pr = (c == 0) ? 13 : c - 1;
  var ne = (c == 13) ? 0 : c + 1;

// Update the pannel color & info
    if(pauseSwitch) {  
      noLoop();
      // (width < 600) ? bottomPanel.style('background-color','rgba('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ',0.8)') : bottomPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      issueHDiv.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      bottomPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      // topPanel.style('background-color','rgb('+ colorList[c].r + ',' + colorList[c].g + ',' + colorList[c].b + ')');
      prevIssue.style('background-color','rgb('+ colorList[pr].r + ',' + colorList[pr].g + ',' + colorList[pr].b + ')');
      nextIssue.style('background-color','rgb('+ colorList[ne].r + ',' + colorList[ne].g + ',' + colorList[ne].b + ')');
      bottomPanel.style('opacity','1');
      issueH.style('color','rgb(224, 224, 216)');
      issueH.html(infoText[c].h1);
      issueHM.html(infoText[c].h1);
      issueP.html(infoText[c].body);
      issuePM.html(infoText[c].body);
      (width < 800) ? bottomPanel.style('top','0') : bottomPanel.style('bottom','0');
      (width < 800) ? topPanel.style('top','50px') : topPanel.style('top','0');
      (width < 800) ? topPanelContent.style('top','50px') : topPanelContent.style('top','0');
      updateGround();
    } else {
      loop();
      (width < 800) ? bottomPanel.style('top','unset') : bottomPanel.style('bottom','-150px');
      (width < 800) ? topPanel.style('top','-100%') : topPanel.style('top','-100px');
      (width < 800) ? topPanelContent.style('top','-100%') : topPanelContent.style('top','-100%');
    }
    pauseSwitch = !pauseSwitch;
    infoSwitch = !infoSwitch;
};

function previousColor() {
  var c = float(colorSwitch);
  colorSwitch = (c == 0) ? 13 : c -1;
  pauseSwitch = true;
  updateGround();
};

function nextColor() {
  var c = float(colorSwitch);
  colorSwitch = (c == 13) ? 0 : c +1;
  pauseSwitch = true;
  updateGround();
};

function updateGround(){
  var c = colorSwitch;
  var theImg = groundImg[c].name;
  GroundImg.attribute('src', theImg);
}

function learnLinkOpen(){
  var learnURL = 'https://siorikitajima.github.io/strangers/#/data/' +infoText[colorSwitch].slug;
  window.open(learnURL, "_parent");
}

function helpLinkOpen(){
  var helpURL = 'https://siorikitajima.github.io/strangers/#/help/' +infoText[colorSwitch].slug;
  window.open(helpURL, "_parent");
}

function voicesLinkOpen(){
  var voicesURL = 'https://siorikitajima.github.io/strangers/#/voices/';
  window.open(voicesURL, "_parent");
}

function shareLinkOpen(){
  var shareURL = 'https://siorikitajima.github.io/strangers/#/info/' + colorSwitch + '/' + infoText[colorSwitch].slug;
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = shareURL;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  copiedMsgShow();
}

function copiedMsgShow(){
  copiedMsg.style('right','20px');
  setTimeout(function(){
    copiedMsg.style('right','-320px');
    }, 2000);
}
