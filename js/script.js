$(function () {
  webNavbar(); // 웹페이지 상단바
  slickJs(); // 메인화면 슬라이드
  business(); // 비즈니스 움직임
  product(); // 상품 소개
  count(); // 숫자 올리기
  newsList(); // 뉴스리스트
});

let wd = $(window);

function webNavbar() {
  let headSlide = $(".header-slide");
  let hdTop = $(".header-top");
  let lnbLine = $(".lnb-line");
  let menuNav = $(".menu-nav li");

  //마우스를 올리면 상세목록 내려오기
  $(".wNav-btn").on("mouseover", function () {
    headSlide.stop().slideDown();
  });

  headSlide.on("mouseleave", function () {
    headSlide.stop().slideUp();
  });

  // 스크롤 시 내비바 변동
  wd.on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel >= 80) {
      hdTop.removeClass("header-up").addClass("header-down");
    } else {
      hdTop.removeClass("header-down").addClass("header-up");
      headSlide.hide();
    }
  });

  // 상세목록의 호버 시 전체목록 위치표시
  for (let i = 0; i < lnbLine.length; i++) {
    lnbLine.eq(i).on("mouseover", function () {
      menuNav.eq(i).addClass("nav-under");
    });

    lnbLine.eq(i).on("mouseleave", function () {
      menuNav.eq(i).removeClass("nav-under");
    });
  }
}

function slickJs() {
  $(".main-slide-wrap").slick({
    dots: true,
    arrows: false,
    dotsClass: "slick-bar",
    adaptiveHeight: true,
  });
}

function business() {
  let bstitWrap = $(".business-title-wrap");
  let businessTit = $(".business-title");
  let businessCont = $(".business-content");
  let bcDti = $(".bc-detail");
  let bmImg = $(".bm-img");

  wd.on("scroll", function () {
    //450
    let scroll = $(document).scrollTop();
    console.log(scroll);

    if (wd.scrollTop() >= 450) {
      businessTit.addClass("left");
      businessCont.addClass("left");
      bmImg.addClass("right");

      bstitWrap.fadeIn(800, "linear");
      bcDti.fadeIn(800, "linear");
      bmImg.find("img").fadeIn(800, "linear");
    } else if (wd.scrollTop() <= 145) {
      businessTit.removeClass("left");
      businessCont.removeClass("left");
      bmImg.removeClass("right");

      bstitWrap.fadeOut();
      bcDti.fadeOut();
      bmImg.find("img").fadeOut();
    }
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

  // if(wd.scrollTop() >= 1060) {
  //   product.
  // }
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
