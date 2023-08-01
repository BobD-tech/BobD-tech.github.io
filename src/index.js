import $ from "jquery";
import { WOW } from "./wow.min.js";

/*=============================================
  =    		 Preloader			      =
=============================================*/
function preloader() {
  $("#preloader").delay(0).fadeOut();
}

$(window).on("load", function () {
  preloader();
  wowAnimation();
});

/*=============================================
  =          One page Menu               =
=============================================*/
$(document).ready(function () {
  $("html").css("scroll-behavior", "auto");
});
var scrollLink = $(".section-link");
// Active link switching
$(window).scroll(function () {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function () {
    var sectionOffset = $(this.hash).offset().top - 105;

    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $('a.section-link[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 90,
          },
          1200,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
});

/*=============================================
  =    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($(".menu-area li.menu-item-has-children ul").length) {
  $(".menu-area .navigation li.menu-item-has-children").append(
    '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
  );
}

//Mobile Nav Hide Show
if ($(".mobile-menu").length) {
  var mobileMenuContent = $(".menu-area .main-menu").html();
  $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

  //Dropdown Button
  $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
    "click",
    function () {
      $(this).toggleClass("open");
      $(this).prev("ul").slideToggle(500);
    }
  );
  //Menu Toggle Btn
  $(".mobile-nav-toggler").on("click", function () {
    $("body").addClass("mobile-menu-visible");
  });

  //Menu Toggle Btn
  $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
    $("body").removeClass("mobile-menu-visible");
  });
}

/*=============================================
  =        Team Social Active 	       =
=============================================*/
$(".banner-social-link").on("click", function () {
  $(this).parent().find("span").animate({ width: "toggle" }, 0);
  $(this).parent().toggleClass("is-active");
  return false;
});

/*=============================================
  =     Menu sticky & Scroll to top      =
=============================================*/
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $("#sticky-header").removeClass("sticky-menu");
    $("#header-fixed-height").removeClass("active-height");
  } else {
    $("#sticky-header").addClass("sticky-menu");
    $("#header-fixed-height").addClass("active-height");
  }
});

/*=============================================
  =    		 Scroll Up  	         =
=============================================*/
if ($(".scroll-to-target,.banner-scroll a").length) {
  $(".scroll-to-target,.banner-scroll a").on("click", function () {
    var target = $(this).attr("data-target");
    // animate
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
}

$('.home-01 a[href*="#"]:not(.section-link)').on("click", function () {
  // animate
  $("html, body").animate(
    {
      scrollTop: $("html").offset().top,
    },
    1000
  );
});

/*=============================================
  =    	  Countdown Active  	         =
=============================================*/
$("[data-countdown]").each(function () {
  var $this = $(this),
    finalDate = $(this).data("countdown");
  $this.countdown(finalDate, function (event) {
    $this.html(
      event.strftime(
        '<div class="time-count day"><span>%D</span>Days</div><div class="time-count hour"><span>%H</span>hour</div><div class="time-count min"><span>%M</span>minute</div><div class="time-count sec"><span>%S</span>second</div>'
      )
    );
  });
});

/*=============================================
  =    		 Jarallax Active  	         =
=============================================*/
// $(".jarallax").jarallax({
//   speed: 0.2,
// });

/*=============================================
  =    		Odometer Active  	       =
=============================================*/
$(".odometer").appear(function (e) {
  var odo = $(".odometer");
  odo.each(function () {
    var countNumber = $(this).attr("data-count");
    $(this).html(countNumber);
  });
});

/*=============================================
  =         Upcoming Time           =
=============================================*/
var element = $("#countdown-gampang");
var finish_d = new Date();
finish_d.setDate(finish_d.getDate() + 50);
element.CountdownGampang({
  rampung: finish_d,
});

/*=============================================
  =         Road Map           =
=============================================*/
$(".bt-roadmap_x").mCustomScrollbar({
  axis: "x",
  scrollbarPosition: "outside",
  theme: "custom-bar3",
  scrollInertia: 100,
  advanced: {
    autoExpandHorizontalScroll: 2,
  },
});

/*=============================================
  =    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();
}
