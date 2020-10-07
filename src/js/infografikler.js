import {
    tns
} from "tiny-slider/src/tiny-slider";

export default function infografikler() {

    var sayilarlaHibelerSlider = tns({
        container: '#sayilarla-hibeler-slider',
        items: 3,
        autoplay: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        nav: false,
        controlsText: ["<i class='fas fa-2x fa-arrow-left color-kahve'></i>", "<i class='fas fa-2x fa-arrow-right color-kahve'></i>"],
        responsive: {
            0: {
                gutter: 5,
                controls: false
            },
            425: {
                gutter: 10,
                controls: false
            },
            576: {
                gutter: 10,
                controls: false
            },
            768: {
                gutter: 15,
                controls: false
            },
            992: {
                gutter: 20,
                controls: true
            },
            1200: {
                gutter: 30,
                controls: true
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

}