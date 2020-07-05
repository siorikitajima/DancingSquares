$(document).ready( function(){

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

// Timeline for Top Row from Right
var walkerlistR = anime.timeline({
  easing: 'linear',
  loop: true,
});

walkerlistR
.add({
  targets: '.girl1R',
  translateX: -(width*1.2),
  duration: width*1.2*5
})
.add({
  targets: '.girl2R',
  translateX: -(width*1.2),
  duration: width*1.2*4.6,
  //offset: randomDelay[1],
},'-=3600')
.add({
  targets: '.girl3R',
  translateX: -(width*1.2),
  duration: width*1.2*4.8,
  //offset: randomDelay[2],
}, '-=2500')
.add({
  targets: '.girl4R',
  translateX: -(width*1.2),
  duration: width*1.2*5.2,
  //offset: randomDelay[3],
}, '-=4500')
.add({
  targets: '.girl5R',
  translateX: -(width*1.2),
  duration: width*1.2*5.4,
  //offset: randomDelay[4],
}, '-=2000');

// Timeline for Top Row from Left
var walkerlistL = anime.timeline({
  easing: 'linear',
  loop: true,
});

walkerlistL
.add({
  targets: '.girl1L',
  translateX: width*1.2,
  duration: width*1.2*5
})
.add({
  targets: '.girl2L',
  translateX: width*1.2,
  duration: width*1.2*4.6,
  //offset: randomDelay[1],
},'-=4600')
.add({
  targets: '.girl3L',
  translateX: width*1.2,
  duration: width*1.2*4.8,
  //offset: randomDelay[2],
}, '-=2400')
.add({
  targets: '.girl4L',
  translateX: width*1.2,
  duration: width*1.2*5.2,
  //offset: randomDelay[3],
}, '-=3900')
.add({
  targets: '.girl5L',
  translateX: width*1.2,
  duration: width*1.2*5.4,
  //offset: randomDelay[4],
}, '-=2200');

});

// anime({
//   targets: '.girl1R',
//   translateX: -(width*1.2),
//   easing: 'linear',
//   duration: width*1.2*5,
//   loop: true,
//   delay: randomDelay[0]
// });

// anime({
//   targets: '.girl1L',
//   translateX: width*1.2,
//   easing: 'linear',
//   duration: width*1.2*5,
//   loop: true,
//   delay: randomDelay[1]
// });

// anime({
//   targets: '.girl2R',
//   translateX: -(width*1.2),
//   easing: 'linear',
//   duration: width*1.2*4,
//   loop: true,
//   delay: randomDelay[2]
// });

// anime({
//   targets: '.girl2L',
//   translateX: width*1.2,
//   easing: 'linear',
//   duration: width*1.2*4,
//   loop: true,
//   delay: randomDelay[3]
// });

// anime({
//   targets: '.girl3R',
//   translateX: -(width*1.2),
//   easing: 'linear',
//   duration: width*1.2*3,
//   loop: true,
//   delay: randomDelay[4]
// });

// anime({
//   targets: '.girl3L',
//   translateX: width*1.2,
//   easing: 'linear',
//   duration: width*1.2*3,
//   loop: true,
//   delay: randomDelay[5]
// });

// anime({
//   targets: '.girl4R',
//   translateX: -(width*1.2),
//   easing: 'linear',
//   duration: width*1.2*2.5,
//   loop: true,
//   delay: randomDelay[6]
// });

// anime({
//   targets: '.girl4L',
//   translateX: width*1.2,
//   easing: 'linear',
//   duration: width*1.2*2.5,
//   loop: true,
//   delay: randomDelay[7]
// });

// anime({
//   targets: '.girl5R',
//   translateX: -(width*1.2),
//   easing: 'linear',
//   duration: width*1.2*2,
//   loop: true,
//   delay: randomDelay[8]
// });

// anime({
//   targets: '.girl5L',
//   translateX: width*1.2,
//   easing: 'linear',
//   duration: width*1.2*2,
//   loop: true,
//   delay: randomDelay[9]
// });