jQuery(document).ready(function( $ ) {
});
var typed = $(".typed");

$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
    start:  0,
    end:    100,
    easing: 'swing',
    duration: 8500,
    complete: ''
  }, options );
  var thisElement = $(this);
  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};
$('#number1').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number2').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number3').jQuerySimpleCounter({end: 65,duration: 2800});
$('#number4').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number5').jQuerySimpleCounter({end: 70,duration: 2800});
$('#number6').jQuerySimpleCounter({end: 70,duration: 2800});
$('#number7').jQuerySimpleCounter({end: 65,duration: 2800});
$('#number8').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number9').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number10').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number11').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number12').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number13').jQuerySimpleCounter({end: 70,duration: 2800});
$('#number14').jQuerySimpleCounter({end: 60,duration: 2800});
$('#number15').jQuerySimpleCounter({end: 80,duration: 2800});
$('#number16').jQuerySimpleCounter({end: 70,duration: 2800});
$('#number17').jQuerySimpleCounter({end: 60,duration: 2800});
$('#number18').jQuerySimpleCounter({end: 60,duration: 2800});
$('#number19').jQuerySimpleCounter({end: 60,duration: 2800});
$('#number20').jQuerySimpleCounter({end: 75,duration: 2800});
$('#number21').jQuerySimpleCounter({end: 85,duration: 2800});

$('.about-me-img').hover(function(){
  $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function(){
  $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});
