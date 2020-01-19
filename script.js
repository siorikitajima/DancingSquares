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
var theSample = new Howl({ src: ['assets/utouto-z.mp3'], loop: false});

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


var allSquares = $('.lemon, .melon, .drop, .woodStick, #woodBox, .circle, .circleMove, .rain, #mainWrap');

// click event listener
$(allSquares).click(function (e) { 
  explode(e.pageX, e.pageY);
  theSample.play();  
});
// $(allSquares).on('click', function(e) {
//   explode(e.pageX, e.pageY);
//   theSample.play();
// })

// explosion construction
function explode(x, y) {
  var particles = 25,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = rand(100, 155) + ', ' + rand(50, 75) + ', ' + rand(50, 105), // randomize the color rgb
        // particle element creation (could be anything other than div)
      elm = $('<div class="particle" style="' +
        'border: rgb(' + color + ') 3px solid ;' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px"></div>');

    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}