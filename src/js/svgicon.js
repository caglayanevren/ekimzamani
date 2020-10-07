export default function svgicon() {
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
}

//////////////////////////////////// pure JS
/* svgicons.forEach(svgicon => {
    svgicon.addEventListener("click", function () {
        this.childNodes[7].classList.toggle("d-block");
    }); }) */