import "../main";
import {
    tns
} from "tiny-slider/src/tiny-slider";

var alerjiIleYasamAkademisiSlider = tns({
    container: '#alerjiIleYasamAkademisiSlider',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: true,
    navPosition: "bottom",
    controlsText: ["<i class='fas fa-2x fa-arrow-left color-engelli'></i>", "<i class='fas fa-2x fa-arrow-right color-engelli'></i>"],
    responsive: {
        0: {
            controls: false,
            arrowKeys: true
        },
        576: {
            controls: true,
            arrowKeys: true
        }
    }
});