var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var HoverButton = (function () {
  function HoverButton(el) {
    _classCallCheck(this, HoverButton);

    this.el = el;
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }

  _createClass(HoverButton, [
    {
      key: "attachEventsListener",
      value: function attachEventsListener() {
        var _this = this;

        window.addEventListener("mousemove", function (e) {
          return _this.onMouseMove(e);
        });
        window.addEventListener("resize", function (e) {
          return _this.calculatePosition(e);
        });
      },
    },
    {
      key: "calculatePosition",
      value: function calculatePosition() {
        TweenMax.set(this.el, {
          x: 0,
          y: 0,
          scale: 1,
        });
        var box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
      },
    },
    {
      key: "onMouseMove",
      value: function onMouseMove(e) {
        var hover = false;
        var hoverArea = this.hover ? 0.7 : 0.5;
        var x = e.clientX - this.x;
        var y = e.clientY - this.y;
        var distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
          hover = true;
          if (!this.hover) {
            this.hover = true;
          }
          this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
          this.onLeave();
          this.hover = false;
        }
      },
    },
    {
      key: "onHover",
      value: function onHover(x, y) {
        TweenMax.to(this.el, 0.4, {
          x: (x - this.x) * 0.4,
          y: (y - this.y) * 0.4,
          scale: 1.15,
          ease: Power2.easeOut,
        });
        this.el.style.zIndex = 10;
      },
    },
    {
      key: "onLeave",
      value: function onLeave() {
        TweenMax.to(this.el, 0.7, {
          x: 0,
          y: 0,
          scale: 1,
          ease: Elastic.easeOut.config(1.2, 0.4),
        });
        this.el.style.zIndex = 1;
      },
    },
  ]);

  return HoverButton;
})();

var btn1 = document.getElementById("features_img");
new HoverButton(btn1);

$(window).on("load", function () {

  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });

})

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
