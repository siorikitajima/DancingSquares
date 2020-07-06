$(document).ready( function(){

var width = $(window).width();
var rowId = ['Top', 'Second', 'Third', 'Fourth', 'Fifth'];
var translateDistance = (width < 600) ? [1.4, 1.5, 1.7, 2, 2.3] : [1.2, 1.3, 1.4, 1.5, 1.6];
var durations = (width < 600) ? [5 * 2, 4.6 * 2, 4.3 * 2, 3.9 * 2, 3.5 * 2] : [5, 4.6, 4.3, 3.9, 3.5];
var delayValue = [width * 2.3, width * 1.5, width * 1.2, width * 1.8, width * 1.3];

var playList = [
  {"firstR":"#girl1R", "secondR": "#girl2R", "thirdR": "#girl3R", "fourthR": "#girl4R", "fifthR": "#girl5R",
  "firstL":"#girl3L", "secondL": "#girl4L", "thirdL": "#girl5L", "fourthL": "#girl1L", "fifthL": "#girl2L"},
  {"firstR":"#girl2R", "secondR": "#girl3R", "thirdR": "#girl4R", "fourthR": "#girl5R", "fifthR": "#girl1R",
  "firstL":"#girl4L", "secondL": "#girl5L", "thirdL": "#girl1L", "fourthL": "#girl2L", "fifthL": "#girl3L"},
  {"firstR":"#girl3R", "secondR": "#girl4R", "thirdR": "#girl5R", "fourthR": "#girl1R", "fifthR": "#girl2R",
  "firstL":"#girl5L", "secondL": "#girl1L", "thirdL": "#girl2L", "fourthL": "#girl3L", "fifthL": "#girl4L"},
  {"firstR":"#girl4R", "secondR": "#girl5R", "thirdR": "#girl1R", "fourthR": "#girl2R", "fifthR": "#girl3R",
  "firstL":"#girl1L", "secondL": "#girl2L", "thirdL": "#girl3L", "fourthL": "#girl4L", "fifthL": "#girl5L"},
  {"firstR":"#girl5R", "secondR": "#girl1R", "thirdR": "#girl2R", "fourthR": "#girl3R", "fifthR": "#girl4R",
  "firstL":"#girl2L", "secondL": "#girl3L", "thirdL": "#girl4L", "fourthL": "#girl5L", "fifthL": "#girl6L"}
]

for (let s = 0; s<5; s++) {
  var randomAni = Math.random();
  var randomDelay = (width < 600) ? Math.random(0.06,0.08) : Math.random(1.8, 2.5);
  var delay1 = '+=' + (delayValue[s] * randomDelay);
  var delay2 = '-=' + (delayValue[s] * 2.8 * randomDelay);
  var delay3 = '-=' + (delayValue[s] * 1.4 * randomDelay);
  var delay4 = '-=' + (delayValue[s] * 2.5 * randomDelay);
  var delay5 = '-=' + (delayValue[s] * 1.9 * randomDelay);
  var delay6 = '+=' + (delayValue[s] * 1.3 * randomDelay);
  var delay7 = '-=' + (delayValue[s] * 1.8 * randomDelay);
  var delay8 = '-=' + (delayValue[s] * 3.2 * randomDelay);
  var delay9 = '-=' + (delayValue[s] * 3.5 * randomDelay);
  var delay10 = '-=' + (delayValue[s] * 2.2 * randomDelay);

// Timeline for Top Row from Right
var walkerlistR = anime.timeline({
  easing: 'linear',
  loop: true,
});

walkerlistR
.add({
  targets: playList[s].firstR + rowId[s],
  translateX: -(width * translateDistance[s]),
  duration: width*1.1 * durations[s] + randomAni,
  easing: 'linear',
}, delay1)
.add({
  targets: playList[s].secondR + rowId[s],
  translateX: -(width * translateDistance[s]),
  duration: width*1.2 * durations[s],
  easing: 'linear',
}, delay2)
.add({
  targets: playList[s].thirdR + rowId[s],
  translateX: -(width * translateDistance[s]),
  duration: width*1.1 * durations[s] + randomAni,
  easing: 'linear',
}, delay3)
.add({
  targets: playList[s].fourthR + rowId[s],
  translateX: -(width * translateDistance[s]),
  duration: width*1.2 * durations[s],
  easing: 'linear',
}, delay4)
.add({
  targets: playList[s].fifthR + rowId[s],
  translateX: -(width * translateDistance[s]),
  duration: width*1.1 * durations[s] + randomAni,
  easing: 'linear',
}, delay5);

// Timeline for Top Row from Left
var walkerlistL = anime.timeline({
  easing: 'linear',
  loop: true,
});

walkerlistL
.add({
  targets: playList[s].firstL + rowId[s],
  translateX: width * translateDistance[s],
  duration: width*1.2 * durations[s],
}, delay6)
.add({
  targets: playList[s].secondL + rowId[s],
  translateX: width * translateDistance[s],
  duration: width*1.1 * durations[s] + randomAni,
}, delay7)
.add({
  targets: playList[s].thirdL + rowId[s],
  translateX: width * translateDistance[s],
  duration: width*1.2 * durations[s],
}, delay8)
.add({
  targets: playList[s].fourthL + rowId[s],
  translateX: width * translateDistance[s],
  duration: width*1.1 * durations[s] + randomAni,
}, delay9)
.add({
  targets: playList[s].fifthL + rowId[s],
  translateX: width * translateDistance[s],
  duration: width*1.2 * durations[s],
}, delay10);
}

});
