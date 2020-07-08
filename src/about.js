$(document).ready(function () {

//   var headerHeight = $("header").outerHeight();

//   $(".nav__link").click(function (e) {
//     $(this).addClass("current").siblings().removeClass("current");

//     var linkHref = $(this).attr("href");

//     $("html, body").animate(
//       {
//         scrollTop: $(linkHref).offset().top - headerHeight,
//       },
//       1000
//     );

//     e.preventDefault();
//   });

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
