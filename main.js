// Кнопка вверх upTop
var btn = $("#upTop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Слайдер відгуки
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    468: {
      slidesPerView: 2,
    },
  },
});

// Плавний скрол
var $page = $("html, body");
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
  return false;
});

// Gamburger menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  document.body.classList.toggle("_lock");
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

$(".menu-link").on("click", function () {
  $(".nav-mobile-menu").removeClass("active-menu");
  $(".header__nav__menu__wrapper").removeClass("active-menu");
  $("body").removeClass("_lock");
});
