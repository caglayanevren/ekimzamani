import "../main";
import infografikler from "../infografikler";
import svgicon from "../svgicon";
import {
	tns
} from "tiny-slider/src/tiny-slider";

var anaSlider = tns({
	container: '#anaSlider',
	items: 1,
	autoplay: true,
	autoplayButtonOutput: false,
	mouseDrag: true,
	nav: true,
	navPosition: "bottom",
	controls: false
});

infografikler();

svgicon();

$(window).on("load", function () {
	$(".dropup").on("click", function () {
		$(this).toggleClass("show");
		$(this).children(".dropdown-menu").toggleClass("show");
	});
	$(".dropup").on("mouseenter", function () {
		$(this).addClass("show");
		$(this).children(".dropdown-menu").addClass("show");
	});
	$(".dropup").on("mouseleave", function () {
		$(this).removeClass("show");
		$(this).children(".dropdown-menu").removeClass("show");
	});
})