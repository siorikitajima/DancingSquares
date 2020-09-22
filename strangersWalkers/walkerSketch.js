// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

let spritesheet;
let spritedata;
let animation = [];
let horses = [];

let pauseSwitch = true;
 
////// Coloring algorism 1/2
// let colorArrayR = [255, 30, 239, 49, 220, 0, 145, 55];
// let colorArrayG = [53, 85, 160, 10, 96, 175, 39, 55];
// let colorArrayB = [98, 92, 11, 49, 46, 185, 55, 55];
  //Key colors
  // col1 = color(255, 53, 98);
  // col2 = color(30, 85, 92);
  // col3 = color(239, 160, 11);
  // col4 = color(49, 10, 49);
  // col5 = color(220, 96, 46);
  // col6 = color(0, 175, 185);
  // col7 = color(145, 39, 55);
  // colgray = color(55);
  // let colorRenderArrayR = [];
  // let colorRenderArrayG = [];
  // let colorRenderArrayB = [];

// Numbers of each issues: 
// MDD + Bipolar + GAD + OCD + AA + AD + Multiple + No Issue
let colorOrder = [21, 5, 5, 11, 11, 2, 4, 341];

let totalWalkers = 10;

// let rowYPos = [100,200,300,400,500];

function preload() {
  spritedata = loadJSON('walkers/walking.json');
  spritesheet = loadImage('walkers/wkSprite_test1.png');

 ////// Coloring algorism 2/2
  // for (let e = 0; e < colorOrder.length; e++) {
  //   for (let co = 0; co < colorOrder[e]; co++) {
  //     colorRenderArrayR.push(colorArrayR[e]);
  //     colorRenderArrayG.push(colorArrayG[e]);
  //     colorRenderArrayB.push(colorArrayB[e]);
  //   }
  // }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   let frames = spritedata.frames;
  // for (let i = 0; i < frames.length; i++) {
  for (let i = 0; i < 6; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < totalWalkers; i++) {
    // let coId = floor(random(0, 400.9));
    let row = floor(random(0, 4.9));
    let speed = random(0.1, 0.2);
    horses[i] = new LWalker(animation, 0, speed, row);
  }

  // rowYPos = [100,200,300,400,500];
  // rowHeight = [100,200,300,400,500];
  // rowYPos = [(height*0.05), (height*0.15), (height*0.25), (height*0.35), (height*0.55)];
  // rowHeight = [(height*0.2), (height*0.25), (height*0.35), (height*0.50), (height*0.66)];
}

function draw() {
  background(224);

  for (let horse of horses) {
    horse.show();
    horse.animate();
  }
  // image(animation[frameCount % animation.length], 0, 0);
}

function mouseClicked() {
  if(pauseSwitch) {
    noLoop();
  } else {
    loop();
  }
  pauseSwitch = !pauseSwitch;
}

class LWalker {
  constructor(animation, x, speed, row) {
    this.x = x;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    // this.col = color;
    this.row = row;
    // this.scale = map(row, 0, 5, 1, 3);
  }

  show() {
    let index = floor(this.index) % this.len;
    // let c = this.col;
    let r = this.row;
    // let s = map(r, 0, 5, 1, 2);
    let y = (this.row + 1) * 100;
    // fill(colorRenderArrayR[c], colorRenderArrayG[c], colorRenderArrayB[c]);
    // //scale(s);
    // rect(this.x, rowYPos[r], 192, 144);
    image(this.animation[index], this.x, y);
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > width) {
        this.x = -this.w;
    }
  }

}
