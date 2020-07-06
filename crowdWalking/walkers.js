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
        var randomDelay =   Math.random() * 10000;
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
        setTimeout(function(){ anim.play(); }, randomDelay * 0.5);
    }
  });