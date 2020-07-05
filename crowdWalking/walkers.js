$(document).ready( function(){
  
var charactors = ['girl1RTop','girl1LTop','girl2RTop','girl2LTop','girl3RTop'
                         ,'girl3LTop','girl4RTop','girl4LTop','girl5RTop','girl5LTop',
                  'girl1RSecond','girl1LSecond','girl2RSecond','girl2LSecond','girl3RSecond'
                         ,'girl3LSecond','girl4RSecond','girl4LSecond','girl5RSecond','girl5LSecond',
                  'girl1RThird','girl1LThird','girl2RThird','girl2LThird','girl3RThird'
                         ,'girl3LThird','girl4RThird','girl4LThird','girl5RThird','girl5LThird',
                  'girl1RFourth','girl1LFourth','girl2RFourth','girl2LFourth','girl3RFourth'
                         ,'girl3LFourth','girl4RFourth','girl4LFourth','girl5RFourth','girl5LFourth',
                  'girl1RFifth','girl1LFifth','girl2RFifth','girl2LFifth','girl3RFifth'
                         ,'girl3LFifth','girl4RFifth','girl4LFifth','girl5RFifth','girl5LFifth'];

 var jsonPaths = ['girl1R','girl1L','girl2R','girl2L','girl3R'
                         ,'girl3L','girl4R','girl4L','girl5R','girl5L',
                  'girl1R','girl1L','girl2R','girl2L','girl3R'
                         ,'girl3L','girl4R','girl4L','girl5R','girl5L',
                  'girl1R','girl1L','girl2R','girl2L','girl3R'
                         ,'girl3L','girl4R','girl4L','girl5R','girl5L',
                  'girl1R','girl1L','girl2R','girl2L','girl3R'
                         ,'girl3L','girl4R','girl4L','girl5R','girl5L',
                  'girl1R','girl1L','girl2R','girl2L','girl3R'
                         ,'girl3L','girl4R','girl4L','girl5R','girl5L'];

    var i, len = charactors.length;
    for(i = 0; i < len; i += 1) {
        var anim;
        var elem = document.getElementById(charactors[i]);
        var animData = {
            container: elem,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'walkers/' + jsonPaths[i] + '.json'
        };
        anim = lottie.loadAnimation(animData);
        anim.setSubframe(false);
    }
  });

// var girl1R = lottie.loadAnimation({
//     container: document.getElementById('girl1R'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl1R.json'
//   })
  
// var girl1L = lottie.loadAnimation({
//     container: document.getElementById('girl1L'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl1L.json'
//   })

//   var girl2R = lottie.loadAnimation({
//     container: document.getElementById('girl2R'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl2R.json'
//   })

//   var girl2L = lottie.loadAnimation({
//     container: document.getElementById('girl2L'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl2L.json'
//   })

//   var girl3R = lottie.loadAnimation({
//     container: document.getElementById('girl3R'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl3R.json'
//   })

//   var girl3L = lottie.loadAnimation({
//     container: document.getElementById('girl3L'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl3L.json'
//   })

//   var girl4R = lottie.loadAnimation({
//     container: document.getElementById('girl4R'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl4R.json'
//   })

//   var girl4L = lottie.loadAnimation({
//     container: document.getElementById('girl4L'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl4L.json'
//   })

//   var girl5R = lottie.loadAnimation({
//     container: document.getElementById('girl5R'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl5R.json'
//   })

//   var girl5L = lottie.loadAnimation({
//     container: document.getElementById('girl5L'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'walkers/girl5L.json'
//   })