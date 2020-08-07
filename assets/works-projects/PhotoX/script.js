$(document).ready(function() {
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    });
  
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
      } else {
        $('.nav-menu').removeClass('custom-navbar');
      }
    });
  
  var headerHeight = $('header').outerHeight();

  $(".nav-item").click(function (e) {

    $(this).addClass('nav-active').siblings().removeClass('nav-active');

    var linkHref = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });

    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 650) {
        $('.camera-img').addClass('fromLeft');
        $('.mission-text').addClass('fromRight');
      } else {
        $('.camera-img').removeClass('fromLeft');
        $('.mission-text').removeClass('fromRight');
      }
    });

    $('.gallery-list-item').click(function() {
      let value = $(this).attr('data-filter');
      if(value === 'all') {
        $('.filter').show(500);
      } else {
        $('.filter').not('.' + value).hide(500);
        $('.filter').filter('.' + value).show(500);
      }
    });

    $('.gallery-list-item').click(function() {
      $(this).addClass('active-item').siblings().removeClass('active-item');
    })

    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 4300) {
        $('.card-1').addClass('moveFromLeft');
        $('.card-2').addClass('moveFromBottom');
        $('.card-3').addClass('moveFromRight');
      } else {
        $('.card-1').removeClass('moveFromLeft');
        $('.card-2').removeClass('moveFromBottom');
        $('.card-3').removeClass('moveFromRight');
      }
    });
});