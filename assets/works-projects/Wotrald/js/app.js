$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });  
  
    $(".slider").slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            },
        },
        {
            breakpoint: 550,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    });
});