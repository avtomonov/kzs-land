var BigSlider = new Swiper ('.back-slider-init', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
})


var contentSlider = new Swiper ('.content-slider-init', {
    loop: true,
    speed: 1000,
    thumbs: {
        swiper: BigSlider,
    },
    pagination: {
        el: '.big-slider-pagination',
        type: 'bullets',
        clickable: true
    },
    // autoplay: {
    //  delay: 10000,
    // },
})

var BigSlider2 = new Swiper ('.back-slider-init2', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
})

var contentSlider2 = new Swiper ('.content-slider-init2', {
    loop: true,
    speed: 1000,
    thumbs: {
        swiper: BigSlider2,
    },
    pagination: {
        el: '.big-slider-pagination2',
        type: 'bullets',
        clickable: true
    },
    // autoplay: {
    //  delay: 10000,
    // },
})

AOS.init();

document.querySelector('.form-kzs').addEventListener('submit', function(e) {
    e.preventDefault();
});

document.querySelector('.video-bttn').addEventListener('click', function(e) {
    e.preventDefault();
});