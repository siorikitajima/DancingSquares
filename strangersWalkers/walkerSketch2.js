var spriteframeData, sprSht;
var playListR = []; var playListL = [];

// Group Names = Each Row
var topRowR, topRowL, secondRowR, secondRowL, thirdRowR, thirdRowL, fourthRowR, fourthRowL, fifthRowR, fifthRowL;

// Sprite Names
var charactorList = ["tyny", "peter", "jon"];

// Data for each Charactor
var tinyL_walk_pink, tinyL_spr_pink, tinyL_anim_pink, tinyL_lab_pink;
var tinyL_walk_green, tinyL_spr_green, tinyL_anim_green, tinyL_lab_green;
var tinyL_walk_yellow, tinyL_spr_yellow, tinyL_anim_yellow, tinyL_lab_yellow;
var tinyL_walk_purple, tinyL_spr_purple, tinyL_anim_purple, tinyL_lab_purple;
var tinyL_walk_orange, tinyL_spr_orange, tinyL_anim_orange, tinyL_lab_orange;
var tinyL_walk_teal, tinyL_spr_teal, tinyL_anim_teal, tinyL_lab_teal;
var tinyL_walk_red, tinyL_spr_red, tinyL_anim_red, tinyL_lab_red;
var tinyL_walk_gray, tinyL_spr_gray, tinyL_anim_gray, tinyL_lab_gray;

var tinyListR = [
    {'id':0, 'name':'tinyR_walk_pink', 'spr':'tinyR_spr_pink', 'anim':'tinyR_anim_pink', 'img':'walkers/tinyR_pink.png', 'label': 'tinyR_lab_pink'},
    {'id':1, 'name':'tinyR_walk_green', 'spr':'tinyR_spr_green', 'anim':'tinyR_anim_green', 'img':'walkers/tinyR_green.png', 'label': 'tinyR_lab_green'},
    {'id':2, 'name':'tinyR_walk_yellow', 'spr':'tinyR_spr_yellow', 'anim':'tinyR_anim_yellow', 'img':'walkers/tinyR_yellow.png', 'label': 'tinyR_lab_yellow'},
    {'id':3, 'name':'tinyR_walk_purple', 'spr':'tinyR_spr_purple', 'anim':'tinyR_anim_purple', 'img':'walkers/tinyR_purple.png', 'label': 'tinyR_lab_purple'},
    {'id':4, 'name':'tinyR_walk_orange', 'spr':'tinyR_spr_orange', 'anim':'tinyR_anim_orange', 'img':'walkers/tinyR_orange.png', 'label': 'tinyR_lab_orange'},
    {'id':5, 'name':'tinyR_walk_teal', 'spr':'tinyR_spr_teal', 'anim':'tinyR_anim_teal', 'img':'walkers/tinyR_teal.png', 'label': 'tinyR_lab_teal'},
    {'id':6, 'name':'tinyR_walk_red', 'spr':'tinyR_spr_red', 'anim':'tinyR_anim_red', 'img':'walkers/tinyR_red.png', 'label': 'tinyR_lab_red'},
    {'id':7, 'name':'tinyR_walk_gray', 'spr':'tinyR_spr_gray', 'anim':'tinyR_anim_gray', 'img':'walkers/tinyR_gray.png', 'label': 'tinyR_lab_gray'}
];
var tinyListL = [
    {'id':0, 'name':'tinyL_walk_pink', 'spr':'tinyL_spr_pink', 'anim':'tinyL_anim_pink', 'img':'walkers/tinyL_pink.png', 'label': 'tinyL_lab_pink'},
    {'id':1, 'name':'tinyL_walk_green', 'spr':'tinyL_spr_green', 'anim':'tinyL_anim_green', 'img':'walkers/tinyL_green.png', 'label': 'tinyL_lab_green'},
    {'id':2, 'name':'tinyL_walk_yellow', 'spr':'tinyL_spr_yellow', 'anim':'tinyL_anim_yellow', 'img':'walkers/tinyL_yellow.png', 'label': 'tinyL_lab_yellow'},
    {'id':3, 'name':'tinyL_walk_purple', 'spr':'tinyL_spr_purple', 'anim':'tinyL_anim_purple', 'img':'walkers/tinyL_purple.png', 'label': 'tinyL_lab_purple'},
    {'id':4, 'name':'tinyL_walk_orange', 'spr':'tinyL_spr_orange', 'anim':'tinyL_anim_orange', 'img':'walkers/tinyL_orange.png', 'label': 'tinyL_lab_orange'},
    {'id':5, 'name':'tinyL_walk_teal', 'spr':'tinyL_spr_teal', 'anim':'tinyL_anim_teal', 'img':'walkers/tinyL_teal.png', 'label': 'tinyL_lab_teal'},
    {'id':6, 'name':'tinyL_walk_red', 'spr':'tinyL_spr_red', 'anim':'tinyL_anim_red', 'img':'walkers/tinyL_red.png', 'label': 'tinyL_lab_red'},
    {'id':7, 'name':'tinyL_walk_gray', 'spr':'tinyL_spr_gray', 'anim':'tinyL_anim_gray', 'img':'walkers/tinyL_gray.png', 'label': 'tinyL_lab_gray'}
];
// Color Array : Total 400
var colorList = [
    {'id':0, 'name':'_pink', 'number':21},
    {'id':1, 'name':'_green', 'number':5},
    {'id':2, 'name':'_yellow', 'number':5},
    {'id':3, 'name':'_purple', 'number':11},
    {'id':4, 'name':'_orange', 'number':11},
    {'id':5, 'name':'_teal', 'number':2},
    {'id':6, 'name':'_red', 'number':4},
    {'id':7, 'name':'_gray', 'number':341}];
var colorArray = [];

function preload() {
    //Push 400 colors into the array
    for(var c=0; c<colorList.length;c++){
        for(var cn=0; cn<colorList[c].number;cn++){
        colorArray.push(colorList[c].id);
    }}
    //Prepare all charactor animations x 8 Colors each Right
    for(var a=0; a<tinyListR.length;a++){
    tinyListR[a].anim = loadSpriteSheet(tinyListR[a].img, 200, 300, 6);
    tinyListR[a].name = loadAnimation(tinyListR[a].anim);
    }

    //Prepare all charactor animations x 8 Colors each Left
    for(var a=0; a<tinyListL.length;a++){
        tinyListL[a].anim = loadSpriteSheet(tinyListL[a].img, 200, 300, 6);
        tinyListL[a].name = loadAnimation(tinyListL[a].anim);
        }
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  topRowR = new Group(); secondRowR = new Group(); thirdRowR = new Group(); fourthRowR = new Group(); fifthRowR = new Group();
  topRowL = new Group(); secondRowL = new Group(); thirdRowL = new Group(); fourthRowL = new Group(); fifthRowL = new Group();

//   for(var a=0; a<imageListL.length;a++){
//     imageListL[a].name.frameDelay = floor(random(4,8.9));
//   }

playListR = (width < 600) ? [
    {"rowID": topRowR, "x": width - 100, "y":100, "scale":0.65, "speed": -3},
    {"rowID": secondRowR, "x": width - 100, "y":height/5, "scale":0.72, "speed": -4},
    {"rowID": thirdRowR, "x": width - 100, "y":height/3, "scale":1.08, "speed": -5},
    {"rowID": fourthRowR, "x": width - 100, "y":height/2, "scale":1.5, "speed": -6},
    {"rowID": fifthRowR, "x": width - 100, "y":height-100, "scale":2.08, "speed": -6.5}
    ]:[
    {"rowID": topRowR, "x": width*2, "y":height/7, "scale":0.52, "speed": -2},
    {"rowID": secondRowR, "x": width*3, "y":height/5, "scale":0.72, "speed": -3},
    {"rowID": thirdRowR, "x": width*4, "y":height/3, "scale":1.08, "speed": -4},
    {"rowID": fourthRowR, "x": width*5, "y":height/2, "scale":1.5, "speed": -5},
    {"rowID": fifthRowR, "x": width*7, "y":height-200, "scale":2.08, "speed": -6}
    ];
playListL = (width < 600) ? [
    {"rowID": topRowL, "x": -(width*2), "y":120, "scale":0.7, "speed": 1.5},
    {"rowID": secondRowL, "x": -(width*2), "y":height/5 + 15, "scale":0.76, "speed": 2},
    {"rowID": thirdRowL, "x": -(width*2), "y":height/3 + 20, "scale":1.12, "speed": 3},
    {"rowID": fourthRowL, "x": -(width*2), "y":height/2 + 25, "scale":1.54, "speed": 4},
    {"rowID": fifthRowL, "x": -(width*2), "y":height-100 + 30, "scale":2.12, "speed": 5}
    ]:[
    {"rowID": topRowL, "x": -(width*1.2), "y":height/7 + 20, "scale":0.56, "speed": 1},
    {"rowID": secondRowL, "x": -(width*2.5), "y":height/5 + 30, "scale":0.76, "speed": 1.5},
    {"rowID": thirdRowL, "x": -(width*4), "y":height/3 + 40, "scale":1.12, "speed": 2.5},
    {"rowID": fourthRowL, "x": -(width*5), "y":height/2 + 50, "scale":1.54, "speed": 3.5},
    {"rowID": fifthRowL, "x": -(width*7), "y":height-200 + 60, "scale":2.12, "speed": 4.5}
    ];
    //assign sprites to Right Rows
    for(var r=0; r<playListR.length;r++){
        for(var a=0; a<tinyListR.length;a++){
        var randomColor = floor(random(0, 400.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        tinyListR[a].name.frameDelay = floor(random(5,9.9));
        tinyListR[a].spr = createSprite(playListR[r].x * randomX, playListR[r].y, 200, 300);
        tinyListR[a].spr.scale = playListR[r].scale;
        tinyListR[a].spr.addAnimation(tinyListR[coId].label, tinyListR[coId].name);
        tinyListR[a].spr.addToGroup(playListR[r].rowID);
        }
    }
    //assign sprites to Left Rows
    for(var r=0; r<playListL.length;r++){
        for(var a=0; a<tinyListL.length;a++){
        var randomColor = floor(random(0, 400.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        tinyListL[a].name.frameDelay = floor(random(5,9.9));
        tinyListL[a].spr = createSprite(playListL[r].x * randomX, playListL[r].y, 200, 300);
        tinyListL[a].spr.scale = playListL[r].scale;
        tinyListL[a].spr.addAnimation(tinyListL[coId].label, tinyListL[coId].name);
        tinyListL[a].spr.addToGroup(playListL[r].rowID);
        }
    }
};

function draw() {
    clear();
  background(224, 224, 224);

////// Horizontal Animation Right
for(var row=0; row < playListR.length; row++){
    var rowID = playListR[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListR[row].speed + i/3;
    if (thisSpr.position.x < - 300) {
        thisSpr.remove();
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var newSpr = createSprite(playListR[row].x, playListR[row].y, 200, 300);
        newSpr.scale = playListR[row].scale;
        newSpr.addAnimation(tinyListR[coId].label, tinyListR[coId].name);
        newSpr.addToGroup(rowID);
        }
    }
  }

////// Horizontal Animation Left
for(var row=0; row < playListL.length; row++){
    var rowID = playListL[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListL[row].speed + i/3;
    if (thisSpr.position.x > width + 200) {
        thisSpr.remove();
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var newSpr = createSprite(playListL[row].x, playListL[row].y, 200, 300);
        newSpr.scale = playListL[row].scale;
        newSpr.addAnimation(tinyListL[coId].label, tinyListL[coId].name);
        newSpr.addToGroup(rowID);
        }
  }
}

drawSprites();
};
