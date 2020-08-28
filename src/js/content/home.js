import "../main";
import "fullpage.js";
import scrollOverflow from "../scroll";
window.IScroll = scrollOverflow;
//import { tns } from "tiny-slider/src/tiny-slider";

//const viewportWidth = window.innerWidth;
//const viewportHeight = window.innerHeight;

$(document).ready(function () {
    $("#fullpage").fullpage({
        autoScrolling: true,
        fitToSection: true,
        menu: "#nav",
        navigationTooltips: ["1", "2", "3", "4", "5", "6"],
        navigation: true,
        paddingTop: "56px",
        showActiveTooltip: false,
        controlArrows: false,
        scrollingSpeed: 600,
        fitToSectionDelay: 1000,
        loopBottom: false,
        loopHorizontal: false,
        verticalCentered: false,
        scrollOverflow: false,
        normalScrollElements: "#navbars",
        scrollOverflow: true,
        scrollOverflowOptions: { preventDefault: false },
        scrollOverflowReset: false,
    });
});
