import "../main";
import { tns } from "tiny-slider/src/tiny-slider";

var cokGecOlmadanIstanbulSlider = tns({
    container: "#cokGecOlmadanIstanbulSlider",
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: true,
    navPosition: "bottom",
    controlsText: ["<i class='fas fa-2x fa-arrow-left color-genc'></i>", "<i class='fas fa-2x fa-arrow-right color-genc'></i>"],
    responsive: {
        0: {
            controls: false,
            arrowKeys: true,
        },
        576: {
            controls: true,
            arrowKeys: true,
        },
    },
});

$(window).on("load", function () {
    $("#menuitem1 .dropdown-menu .dropdown-item:nth-child(3)").addClass("active");
});
