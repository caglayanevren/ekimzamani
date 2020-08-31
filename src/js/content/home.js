import "../main";
import { tns } from "tiny-slider/src/tiny-slider";

//const viewportWidth = window.innerWidth;
//const viewportHeight = window.innerHeight;

var anaSlider = tns({
	container: '#anaSlider',
	items: 1,
	autoplay: false,
	autoplayButtonOutput:false,
	mouseDrag: true,
    nav:true,
    navPosition: "bottom",
	controls: false
});

export default anaSlider;

$(document).ready(function () {
});
