import "../main";

var svgicons = document.querySelectorAll("g.svgicon");
svgicons.forEach(function (svgicon) {
    $(svgicon).on("click", function () {
        $(this).children(".drop").toggleClass("d-block");
    });
})
//////////////////////////////////// pure JS
/* svgicons.forEach(svgicon => {
    svgicon.addEventListener("click", function () {
        this.childNodes[7].classList.toggle("d-block");
    });
}) */