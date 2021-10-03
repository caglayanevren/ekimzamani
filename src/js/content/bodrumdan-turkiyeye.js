import "../main";
//import { tns } from "tiny-slider/src/tiny-slider";

/* let sliderContainer = document.getElementById("bodrumdanTurkiyeyeSlider");
let colorTheme = "kadin";
if (sliderContainer) {
    var bodrumdanTurkiyeyeSlider = tns({
        container: "#bodrumdanTurkiyeyeSlider",
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        nav: true,
        navPosition: "bottom",
        controlsText: [`<i class='fas fa-2x fa-arrow-left color-${colorTheme}'></i>`, `<i class='fas fa-2x fa-arrow-right color-${colorTheme}'></i>`],
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
} */

$(window).on("load", function () {
    $("#menuitem1 .dropdown-menu .dropdown-item:nth-child(3)").addClass("active");
});
