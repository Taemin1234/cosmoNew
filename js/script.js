$(function () {
  webNavbar(); // 웹페이지 상단바
  slickJs(); // 메인화면 슬라이드
  product(); // 상품 소개
  count(); // 숫자 올리기
  newsList(); // 뉴스리스트
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

function product() {
  let product = $(".product");

  product.hover(
    function () {
      $(this).find(".pd-bg").addClass("pd-hover");
      $(this).find(".product-text").addClass("pt-hover");
    },
    function () {
      $(this).find(".pd-bg").removeClass("pd-hover");
      $(this).find(".product-text").removeClass("pt-hover");
    }
  );
}

function count() {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
}

function newsList() {
  let newsList = $(".news-content-wrap ul li");

  newsList.on("click", function () {
    if ($(this).hasClass("on")) {
      //$(this).removeClass("on");
      //$(this).find(".news-open").slideUp();
    } else {
      $(this).addClass("on");
      newsList.not(this).removeClass("on");
      $(this).find(".news-open").slideDown();
    }
  });
}
