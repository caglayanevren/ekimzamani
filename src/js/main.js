import $ from "jquery";
window.jQuery = $;
window.$ = $;
//import "./matchheight";
import "./modernizr";
import "bootstrap";
import "popper.js";

$(window).on("load", function () {
    const hamburger = document.querySelector(".hamburger");
    const collapseMenu = document.getElementById("navbars");
    const navBar = document.getElementById("nav");
    const fpNav = document.getElementById("fp-nav");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        collapseMenu.classList.toggle("show");
        navBar.classList.toggle("turuncu-back");
        if (fpNav) {
            fpNav.classList.toggle("hidden");
        }
    });
});
