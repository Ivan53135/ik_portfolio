$(window).on("load", function () {

    $(".loader .inner").fadeOut(500, function () {
      $(".loader").fadeOut(650);
    });
  
  })
  
  $(document).ready(function () {
  
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".header").addClass("sticky");
        $(".header__logo-sign-ellipse").addClass("sticky-ell");
        $(".header__logo-sign-text").addClass("sticky-ell-txt");
        $(".it-1").addClass("sticky-it-1");
        $(".it-2").addClass("sticky-it-2");
      } else {
        $(".header").removeClass("sticky");
        $(".header__logo-sign-ellipse").removeClass("sticky-ell");
        $(".header__logo-sign-text").removeClass("sticky-ell-txt");
        $(".it-1").removeClass("sticky-it-1");
        $(".it-2").removeClass("sticky-it-2");
      }
    });
  });
  