import $ from "jquery";
window.jQuery = $;
window.$ = $;
//import "./matchheight";
import "./modernizr";
import "bootstrap";
import "popper.js";

///////////////// fixed menu on scroll for desktop
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 74) {
        $('#nav.navbar').addClass("fixed-top");
        var navbarHeight = $('#nav.navbar').outerHeight();
        // add padding top to show content behind navbar
        $('body').css('padding-top', navbarHeight + 'px');
        $('body').addClass('scrolled');
    } else {
        $('#nav.navbar').removeClass("fixed-top");
        // remove padding top from body
        $('body').css('padding-top', '0');
        $('body').removeClass('scrolled');
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
    });
    var viewportWidth = window.innerWidth;
    if (viewportWidth > 1199) {
        $(".dropdown").on("mouseenter mouseleave", function () {
            $(this).toggleClass("show");
            $(this).children(".dropdown-menu").toggleClass("show");
        });
    }
});