$(function () {
  webNavbar(); // 웹페이지 상단바
  slickJs(); // 메인화면 슬라이드
});

function webNavbar() {
  let headSlide = $(".header-slide");

  $(".wNav-btn").on("mouseover", function () {
    headSlide.stop().slideDown();
  });

  headSlide.on("mouseleave", function () {
    headSlide.stop().slideUp();
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
