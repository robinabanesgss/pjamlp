

  // Smooth scrolling using jQuery UI Easing
  $('#header a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Smooth Tooltip Display
     $(".banner__tooltip").click(function(){
          $(".banner__tooltip-cont").toggle(300);
          $(".banner__tooltip").toggleClass("active")
     });

  // Accordion
    (function($) {
        var $window = $(window),
            $html = $('html');

        $window.resize(function resize(){
            if ($window.width() < 514) {
                 (function ($) {
                function accordion () {
                  var $this = $(this);
                  if ($(this).next('.faq__content').hasClass('active')) {
                    $this.next('.faq__content').slideUp(300).removeClass('active');
                    e.preventDefault();
                    } else {
                    $this.next('.faq__content').slideDown(300).addClass('active');
                    $this.parent('li').siblings('li').children('.faq__content').slideUp(300).removeClass('active');
                    e.preventDefault();
                  }
                  e.preventDefault();
                }

                $(function () {
                  $('.faq__title').on('click', accordion);
                  e.preventDefault();
                  ev.stopImmediatePropagation();
                });

              })(jQuery);
            }

            $html.removeClass('mobile');
        }).trigger('resize');
    })(jQuery);

// Initialize AOS
AOS.init();

// Hamburger Menu Color
    $(document).ready(function(){

    var scroll_pos = 0;
    var animation_begin_pos = 0;
    var animation_end_pos = 400;
    var beginning_color = new $.Color( 'rgb(255,355,355)' );
    var ending_color = new $.Color( 'rgb(191,74,176)' ); ;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            $('.header__icon-lines').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('.header__icon-lines').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('.header__icon-lines').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});


    //Compute Viewport Height for Banner
        (function($) {
        var $window = $(window),
            $html = $('html');

        $window.resize(function resize(){

          var screenHeight = $(window).height();
                  $('#banner').css({height: screenHeight});
                  $('.banner').css({height: screenHeight});
        }).trigger('resize');
    })(jQuery);

    //Harburger Menu Click Link and Close Window
    $('.header__sp a').click(function() {
       $('.checkbox-toggle').click();
    });

    $(document).ready(function() {
      $("body").removeClass("preload");
});


