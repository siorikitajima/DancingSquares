$( document ).ready(function() {
var playing;
var sketchNumber = 0;

$('body').on('load', function(){
    $("#iframeOne").hide();
    $("#iframeTwo").hide();   
})

var sketchList = [
    { id:0,
      trackName: 'Prism',
      sketchName: 'Number Zero'
    },
    { id:1,
      trackName: 'Untitled Existential',
      sketchName: 'Number One'
    },
    { id:2,
      trackName: 'Geodesic',
      sketchName: 'Number Two'
    }
  ]
  changeSketch();

  var theTrack = [
    new Howl({ 
      src: ['sound/NumberZero-Prism.mp3'],
      loop: true}),
    new Howl({ 
      src: ['sound/UntitledExistential.mp3'],
      loop: true}),
    new Howl({ 
      src: ['sound/NumberZero-Geodesic.mp3'],
      loop: true}), ];
  
  $('.btnZero').on('click', function(){
    if(playing){
      if (sketchNumber !== 0) {
        theTrack[sketchNumber].stop();
        sketchNumber = 0;
        theTrack[sketchNumber].play();
      } else { null }}
      else {

        sketchNumber = 0;
      }
      $("#iframeZero").show();
      $("#iframeOne").hide();
      $("#iframeTwo").hide();
      changeSketch();
  });
  
  $('.btnOne').on('click', function(){
    if(playing){
      if (sketchNumber !== 1) {
        theTrack[sketchNumber].stop();
        sketchNumber = 1;
        theTrack[sketchNumber].play();
      } else { null }}
      else {
        sketchNumber = 1;
      }
      $("#iframeZero").hide();
      $("#iframeOne").show();
      $("#iframeTwo").hide();
      changeSketch();
  });
  $('.btnTwo').on('click', function(){
    if(playing){
      if (sketchNumber !== 2) {
        theTrack[sketchNumber].stop();
        sketchNumber = 2;
        theTrack[sketchNumber].play();
      } else { null }}
      else {
       sketchNumber = 2;
      }
      $("#iframeZero").hide();
      $("#iframeOne").hide();
      $("#iframeTwo").show(); 
      changeSketch();
  });
  
  /* ========== Play button ========== */
  
  $('.startBtn').on('click',function(){
    theTrack[sketchNumber].play();
    playing = true;
    $(this).hide();
    $('.pauseBtn').css('display','inline-block');
  });
  
  $('.pauseBtn').on('click',function(){
    theTrack[sketchNumber].pause();
    playing = false;
    $(this).css('display','none');
    $('.startBtn').show();
  });
  
  function changeSketch() {
    var theName = sketchList[sketchNumber].sketchName;
    var theCredit = "Code by Siori Kitajima<br/> Music by Joseph Minadeo '" + sketchList[sketchNumber].trackName + "'";
    $('.sketchName').html(theName);
    $('.sketchCredit').html(theCredit);
  }
});