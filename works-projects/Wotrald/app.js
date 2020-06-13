$(document).ready(function() {

    $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $(".header").addClass("sticky");
    }else {
        $(".header").removeClass("sticky");
    }
    });
});