// __________ PRELOADER __________

$(window).on("load", function () {
  $(".spinner").fadeOut();
  $(".preloader").delay(350).fadeOut("slow");
});

// __________ DARK MODE __________

const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
if (isDarkMode) {
  document.documentElement.setAttribute("data-theme", "dark");
}

// __________ THEME COLOR __________

const color = document.documentElement.getAttribute("data-color");
if (color === "red") {
  $("#hero-img").attr("src", "img/hero-red2.png");
} else if (color === "blue") {
  $("#hero-img").attr("src", "img/hero-blue.png");
}

// __________ PERCENTAGES __________

let percentages = document.getElementsByClassName("percentage");
let bars = document.getElementsByClassName("bar");

for (let i = 0; i < percentages.length; i++) {
  bars[i].style.width = percentages[i].innerText;
}

// __________ NAVIGATION __________

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop + 500 < viewportBottom;
};

// Clicking Navlinks
$(".nav-link").on("click", function (e) {
  var anchor = $(this);
  $("html, body")
    .stop()
    .animate({ scrollTop: $(anchor.attr("href")).offset().top - 80 }, 800);

  if ($("#menu-btn").css("display") == "block") {
    $(".navbar .list").attr("id", "");
    $("#menu-btn").removeClass("fa-close");
    $("#menu-btn").addClass("fa-bars");
  }

  e.preventDefault();
});

$(window).scroll(function () {
  // Navbar Sticky
  if ($(this).scrollTop() > 100) {
    $("header").attr("id", "navbar-sticky");
  } else {
    $("header").attr("id", "");
  }

  // Arrow
  if ($(this).scrollTop() > 100) {
    $("#arrow").css("transform", "translateY(0) rotate(0)");
  } else {
    $("#arrow").css("transform", "translateY(-100vh) rotate(180deg)");
  }

  // Activate Navlinks
  $("section").each(function () {
    var sect = $(this);
    if (sect.isInViewport()) {
      $(".nav-link").removeClass("active");
      $(".nav-link[href='#" + $(sect).attr("id") + "']").addClass("active");
    }
  });
});

// Mobile Navbar
$("#menu-btn").click(function (e) {
  if ($(".navbar .list").attr("id") == "") {
    $(".navbar .list").attr("id", "nav-open");
    $(this).removeClass("fa-bars");
    $(this).addClass("fa-close");
  } else {
    $(".navbar .list").attr("id", "");
    $(this).removeClass("fa-close");
    $(this).addClass("fa-bars");
  }
});

// Scroll To Top
$("#arrow").on("click", () => {
  $("html, body").stop().animate({ scrollTop: 0 }, 500);
});

// __________ ISOTOPE __________

// Init Isotope
var $container = $(".filter-items");
$container.isotope({
  itemSelector: ".card",
  transitionDuration: "0.8s",
});

// Filter
$(".filter-value").on("click", function (e) {
  $(".filter-value.active").removeClass("active");
  $(this).addClass("active");
  let selector = $(this).attr("data-filter");
  if (selector != "*") selector = "[data-filter='" + selector + "']";
  $container.isotope({ filter: selector });
  return false;
});

// __________ OWL CAROUSEL __________

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    600: { items: 1 },
    1000: { items: 2 },
  },
});

// __________ WOW __________

new WOW().init();
