import "../main";
import {
    tns
} from "tiny-slider/src/tiny-slider";

var yuksekovadaKadinOlmakSlider = tns({
    container: '#yuksekovadaKadinOlmakSlider',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: true,
    navPosition: "bottom",
    controlsText: ["<i class='fas fa-2x fa-arrow-left color-kadin'></i>", "<i class='fas fa-2x fa-arrow-right color-kadin'></i>"],
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

$(window).on("load", function () {
    $("#menuitem1 .dropdown-menu .dropdown-item:nth-child(12)").addClass("active");
});