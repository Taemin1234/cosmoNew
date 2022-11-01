$(function () {
  webNavbar(); // 웹페이지 상단바
  slickJs(); // 메인화면 슬라이드
});

let wd = $(window);

function webNavbar() {
  let headSlide = $(".header-slide");
  let hdTop = $(".header-top");

  $(".wNav-btn").on("mouseover", function () {
    headSlide.stop().slideDown();
  });

  headSlide.on("mouseleave", function () {
    headSlide.stop().slideUp();
  });

  wd.on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel >= 80) {
      hdTop.removeClass("header-up").addClass("header-down");
    } else {
      hdTop.removeClass("header-down").addClass("header-up");
      headSlide.hide();
    }
  });
}

function slickJs() {
  $(".main-slide-wrap").slick({
    dots: true,
    arrows: false,
    dotsClass: "slick-bar",
    adaptiveHeight: true,
  });
}
