var BigSlider = new Swiper ('.back-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
})




var contentSlider = new Swiper ('.content-slider', {
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
    autoplay: {
     delay: 10000,
    },
})


 AOS.init();

document.querySelector('.form-kzs').addEventListener('submit', function(e) {
    e.preventDefault();
});


document.querySelector('.video-bttn').addEventListener('click', function(e) {
    e.preventDefault();
    alert()
});