$(function () {
    $(window).scroll(function () {
          if ($(this).scrollTop() > 200 ) {
              $('#back_nav').css('right','40px');
          } else { 
              $('#back_nav').removeAttr( 'style' );
          }
      });
  });