import "../main";
import {
	tns
} from "tiny-slider/src/tiny-slider";

//const viewportWidth = window.innerWidth;
//const viewportHeight = window.innerHeight;

var anaSlider = tns({
	container: '#anaSlider',
	items: 1,
	autoplay: false,
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
	controls: true,
	controlsText: ["<img src='prev.png' style='width:25px;height:auto;' alt=''>", "<img src='next.png' style='width:25px;height:auto;' alt=''>"],
	responsive: {
		425: {
			gutter: 10,
		},
		576: {
			gutter: 10
		},
		768: {
			gutter: 15
		},
		992: {
			gutter: 20
		},
		1200: {
			gutter: 30
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

/* $(document).ready(function () {
}); */