import $ from "jquery";
window.jQuery = $;
window.$ = $;
//import "./matchheight";
import "./modernizr";
import "bootstrap";
import "popper.js";

// ChangeFontSize
$(function () {
    "use strict";

    function changeFont(fontSize) {
        return function () {
            $(".font-resize").css("font-size", fontSize + "px");
            $("p").css("font-size", fontSize + "px");
            $("ul li").css("font-size", fontSize + "px");
            $("h4").css("font-size", 1.5 * fontSize + "px");
            $("h5").css("font-size", 1.2 * fontSize + "px");
            $("h6").css("font-size", fontSize + "px");
            sessionStorage.setItem("fSize", fontSize);
        };
    }
    var normalFont = changeFont(16),
        mediumFont = changeFont(18),
        largeFont = changeFont(20);
    $(".js-font-decrease").on("click", function () {
        normalFont();
    });
    $(".js-font-normal").on("click", function () {
        mediumFont();
    });
    $(".js-font-increase").on("click", function () {
        largeFont();
    });
    if (sessionStorage.length !== 0) {
        $(".font-resize").css("font-size", sessionStorage.getItem("fSize") + "px");
        $("p").css("font-size", sessionStorage.getItem("fSize") + "px");
        $("ul li").css("font-size", sessionStorage.getItem("fSize") + "px");
        $("h4").css("font-size", 1.5 * sessionStorage.getItem("fSize") + "px");
        $("h5").css("font-size", 1.2 * sessionStorage.getItem("fSize") + "px");
        $("h6").css("font-size", sessionStorage.getItem("fSize") + "px");
    }
});

///////////////// fixed menu on scroll for desktop
$(window).on("scroll", function () {
    "use strict";
    if ($(this).scrollTop() > 74) {
        $("#nav.navbar").addClass("fixed-top");
        var navbarHeight = $("#nav.navbar").outerHeight();
        // add padding top to show content behind navbar
        $("body").css("padding-top", navbarHeight + "px");
        $("body").addClass("scrolled");
    } else {
        $("#nav.navbar").removeClass("fixed-top");
        // remove padding top from body
        $("body").css("padding-top", "0");
        $("body").removeClass("scrolled");
    }
});
// end if

$(window).on("load", function () {
    "use strict";
    const hamburger = document.querySelector(".hamburger");
    const collapseMenu = document.getElementById("navbars");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        collapseMenu.classList.toggle("show");
        $("#menuitem1").toggleClass("show");
        $("#menuitem1 > .dropdown-menu").toggleClass("show");
        $("menuitem1 > a").attr("aria-expanded", function () {
            const a = $(this).getAttribute("aria-expanded");
            if (a) {
                a = false;
            } else {
                a = true;
            }
            $(this).setAttribute("aria-expanded", a);
        });
    });

    var viewportWidth = window.innerWidth;

    if (viewportWidth > 1199) {
        $(".dropdown").on("click", function () {
            $(this).toggleClass("show");
            $(this).children(".dropdown-menu").toggleClass("show");
        });
        $(".dropdown").on("mouseenter", function () {
            $(this).addClass("show");
            $(this).children(".dropdown-menu").addClass("show");
        });
        $(".dropdown").on("mouseleave", function () {
            $(this).removeClass("show");
            $(this).children(".dropdown-menu").removeClass("show");
        });
    }

    $("div.tns-liveregion").remove();
});
