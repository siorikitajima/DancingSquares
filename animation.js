var width = $(window).width();
var randomDelay = [
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000,
  Math.random() * 10000
];

anime({
  targets: '.girl1R',
  translateX: -(width*1.2),
  easing: 'linear',
  duration: width*1.2*5,
  loop: true,
  delay: randomDelay[0]
});

anime({
  targets: '.girl1L',
  translateX: width*1.2,
  easing: 'linear',
  duration: width*1.2*5,
  loop: true,
  delay: randomDelay[1]
});

anime({
  targets: '.girl2R',
  translateX: -(width*1.2),
  easing: 'linear',
  duration: width*1.2*4,
  loop: true,
  delay: randomDelay[2]
});

anime({
  targets: '.girl2L',
  translateX: width*1.2,
  easing: 'linear',
  duration: width*1.2*4,
  loop: true,
  delay: randomDelay[3]
});

anime({
  targets: '.girl3R',
  translateX: -(width*1.2),
  easing: 'linear',
  duration: width*1.2*3,
  loop: true,
  delay: randomDelay[4]
});

anime({
  targets: '.girl3L',
  translateX: width*1.2,
  easing: 'linear',
  duration: width*1.2*3,
  loop: true,
  delay: randomDelay[5]
});

anime({
  targets: '.girl4R',
  translateX: -(width*1.2),
  easing: 'linear',
  duration: width*1.2*2.5,
  loop: true,
  delay: randomDelay[6]
});

anime({
  targets: '.girl4L',
  translateX: width*1.2,
  easing: 'linear',
  duration: width*1.2*2.5,
  loop: true,
  delay: randomDelay[7]
});

anime({
  targets: '.girl5R',
  translateX: -(width*1.2),
  easing: 'linear',
  duration: width*1.2*2,
  loop: true,
  delay: randomDelay[8]
});

anime({
  targets: '.girl5L',
  translateX: width*1.2,
  easing: 'linear',
  duration: width*1.2*2,
  loop: true,
  delay: randomDelay[9]
});