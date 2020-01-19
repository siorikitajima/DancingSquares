$(document).ready(function () {
  $('.lemon').removeClass('lemonMove');
  $('.melon').removeClass('melonMove');
  $('.drop').removeClass('dropMove');
  $('.woodStick').removeClass('woodStickMove');
  $('#woodBox').removeClass('woodBoxMove');
  $('.circle').removeClass('circleMove');
  $('.rain').removeClass('rainMove');
});

  var theTrack = new Howl({ src: ['assets/Joseph-Minadeo_Greene-Drone.mp3'], loop: true});

$('.startBtn').on('click',function(e){
  e.preventDefault();

  $(this).animate({
'margin-top': '-100vh'
  }, function(){
    $(this).hide();
  });

  theTrack.play();

  $('.lemon').addClass('lemonMove');
  $('.melon').addClass('melonMove');
  $('.drop').addClass('dropMove');
  $('.woodStick').addClass('woodStickMove');
  $('#woodBox').addClass('woodBoxMove');
  $('.circle').addClass('circleMove');
  $('.rain').addClass('rainMove');

  $('#header').css('top','0');

  // $('.lemon').removeClass('lemonMove').addClass('lemonMove');
  // $('.melon').removeClass('melonMove').addClass('melonMove');
  // $('.drop').removeClass('dropMove').addClass('dropMove');
  // $('.woodStick').removeClass('woodStickMove').addClass('woodStickMove');
  // $('.woodBox').removeClass('woodBoxMove').addClass('woodBoxMove');
  // $('.circle').removeClass('circleMove').addClass('circleMove');
  // $('.rain').removeClass('rainMove').addClass('rainMove');

});

//var allSquares = $('.lemonMove, .melonMove, .dropMove, .woodStickMove, .woodBoxMove, .circleMove, .rainMove');
var pauseBtn = $('#pauseTrack');
$(pauseBtn).on('click',function(){
//    alert('clicked');
    $('.startBtn').show(function(){
      $('.startBtn').animate({
        'margin-top': '0'
          });
    });
      
        theTrack.pause();
      
        $('.lemon').removeClass('lemonMove');
        $('.melon').removeClass('melonMove');
        $('.drop').removeClass('dropMove');
        $('.woodStick').removeClass('woodStickMove');
        $('#woodBox').removeClass('woodBoxMove');
        $('.circle').removeClass('circleMove');
        $('.rain').removeClass('rainMove');

        $('#header').css('top','-85px');
      });
