import "../main";
import {
	tns
} from "tiny-slider/src/tiny-slider";

//const viewportWidth = window.innerWidth;
//const viewportHeight = window.innerHeight;

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

var sayilarlaHibelerSlider = tns({
	container: '#sayilarla-hibeler-slider',
	items: 3,
	autoplay: false,
	autoplayButtonOutput: false,
	mouseDrag: true,
	nav: false,
	controlsText: ["<i class='fas fa-2x fa-arrow-left color-kahve'></i>", "<i class='fas fa-2x fa-arrow-right color-kahve'></i>"],
	responsive: {
		425: {
			gutter: 10,
			controls: false
		},
		576: {
			gutter: 10,
			controls: false
		},
		768: {
			gutter: 15,
			controls: false
		},
		992: {
			gutter: 20,
			controls: true
		},
		1200: {
			gutter: 30,
			controls: true
		}
	}

});

sayilarlaHibelerSlider.getInfo().slideItems[sayilarlaHibelerSlider.getInfo().index + 1].classList.add('active--slide');
sayilarlaHibelerSlider.events.on('indexChanged', () => {
	const info = sayilarlaHibelerSlider.getInfo();
	const indexPrev = info.indexCached + 1;
	const indexCurr = info.index + 1;
	info.slideItems[indexPrev].classList.remove('active--slide');
	info.slideItems[indexCurr].classList.add('active--slide');
});

var svgicons = document.querySelectorAll("g.svgicon");
svgicons.forEach(function (svgicon) {
	$(svgicon).on("click", function () {
		$(this).children(".drop").toggleClass("d-block");
	});
	$(svgicon).on("mouseenter", function () {
		$(this).children(".drop").addClass("d-block");
	});
	$(svgicon).on("mouseleave", function () {
		$(this).children(".drop").removeClass("d-block");
	});
})

/* $(document).ready(function () {}); */