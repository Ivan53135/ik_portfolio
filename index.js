$(document).ready(function() {

  $(".card").tilt({
    maxTilt: 5,
    glare: true,
    maxGlare: .2
  });

  var headerHeight = $('header').outerHeight();

  $(".nav__link").click(function(e){

    $(this).addClass('current').siblings().removeClass('current')

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

     e.preventDefault();
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $(".header").addClass("sticky");
      $(".header__logo-sign-ellipse").addClass("sticky-ell");
      $(".header__logo-sign-text").addClass("sticky-ell-txt");
      $(".it-1").addClass("sticky-it-1");
      $(".it-2").addClass("sticky-it-2");
    }else {
      $(".header").removeClass("sticky");
      $(".header__logo-sign-ellipse").removeClass("sticky-ell");
      $(".header__logo-sign-text").removeClass("sticky-ell-txt");
      $(".it-1").removeClass("sticky-it-1");
      $(".it-2").removeClass("sticky-it-2");
    };


    let position = $(this).scrollTop();

    if(position >= 3670) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    };

    if(position >= 1900) {
      $('.sites').addClass('site-anim');
    } else {
      $('.sites').removeClass('site-anim');
    };

    if(position >= 2300) {
      $('.designs').addClass('design-anim');
    } else {
      $('.designs').removeClass('design-anim');
    };

    if(position >= 2800) {
      $('.comp1').addClass('movecompf');
      $('.comp2').addClass('movecomps');
      $('.comp3').addClass('movecompt');
    } else {
      $('.comp1').removeClass('movecompf');
      $('.comp2').removeClass('movecomps');
      $('.comp3').removeClass('movecompt');
    }
  });

});