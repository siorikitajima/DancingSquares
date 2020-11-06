var right_sprite_sheet;
var left_sprite_sheet;
var right_sprite;
var left_sprite;

var right_frames = [
    {'name':'right_walk00', 'frame':{'x':0, 'y': 0, 'width': 200, 'height': 300}},
    {'name':'right_walk01', 'frame':{'x':200, 'y': 0, 'width': 200, 'height': 300}},
    {'name':'right_walk02', 'frame':{'x':400, 'y': 0, 'width': 200, 'height': 300}},
    {'name':'right_walk03', 'frame':{'x':600, 'y': 0, 'width': 200, 'height': 300}},
    {'name':'right_walk04', 'frame':{'x':800, 'y': 0, 'width': 200, 'height': 300}},
    {'name':'right_walk05', 'frame':{'x':1000, 'y': 0, 'width': 200, 'height': 300}}
  ];

  function preload() {
    right_sprite_sheet = loadSpriteSheet('assets/uncle_gray.png', right_frames);
    right_animation = loadAnimation(right_sprite_sheet);
  }

  function setup() {
    createCanvas(windowWidth, windowHeight);

    right_animation.frameDelay = 5;
    right_sprite = createSprite(width, 200, 200, 300);
    right_sprite.addAnimation('right-walk', right_animation);

    left_sprite = createSprite(0, 400, 200, 300);
    left_sprite.addAnimation('right-walk', right_animation);
  }

  function draw() {

    clear();
    background(224);

    right_sprite.velocity.x = -0.8;

    left_sprite.mirrorX(-1);
    left_sprite.velocity.x = 0.8;

    if (right_sprite.position.x < - 300) {
        right_sprite.position.x = width;
    }

    if (left_sprite.position.x > width + 300) {
        left_sprite.position.x = 0;
    }

    drawSprites();
  }