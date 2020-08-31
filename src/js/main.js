import $ from "jquery";
window.jQuery = $;
window.$ = $;
//import "./matchheight";
import "./modernizr";
import "bootstrap";
import "popper.js";

///////////////// fixed menu on scroll for desktop
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 74) {
            $('#nav.navbar').addClass("fixed-top");
            var navbarHeight = $('#nav.navbar').outerHeight();
            // add padding top to show content behind navbar
            $('body').css('padding-top', navbarHeight + 'px');
        }else{
            $('#nav.navbar').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }   
    });
// end if

$(window).on("load", function () {
    const hamburger = document.querySelector(".hamburger");
    const collapseMenu = document.getElementById("navbars");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        collapseMenu.classList.toggle("show");
    });
});

$(window).on('load', function() {
	"use strict";
	var viewportWidth = window.innerWidth;
	if(viewportWidth > 1199) {
		$('.dropdown').mouseover(function(){
			$(this).addClass('show');
			$(this).children('.dropdown-menu').addClass('show');
			$(this).children('a').attr('aria-expanded','true');
		}).mouseout(function(){
			$(this).removeClass('show');
			$(this).children('.dropdown-menu').removeClass('show');
			$(this).children('a').attr('aria-expanded','false');
		});
	}
});