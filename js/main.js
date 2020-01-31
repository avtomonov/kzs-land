var BigSlider = new Swiper ('.back-slider-init', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1800,
    on: {
        init: function () {
          document.querySelector('.back-slider-init').style.opacity = 1;
      },
  },
})


var contentSlider = new Swiper ('.content-slider-init', {
    loop: true,
    speed: 1800,
    thumbs: {
        swiper: BigSlider,
    },
    parallax: true,
    pagination: {
        el: '.big-slider-pagination',
        type: 'bullets',
        clickable: true
    },
    autoplay: {
       delay: 9000,
   },
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
    parallax: true,
    thumbs: {
        swiper: BigSlider2,
    },
    pagination: {
        el: '.big-slider-pagination2',
        type: 'bullets',
        clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

    autoplay: {
     delay: 10000,
    },
})

AOS.init();

document.querySelector('.form-kzs').addEventListener('submit', function(e) {
    e.preventDefault();
    $('.form-contacts-big-title').css({'opacity': '0', 'z-index': '-1'});
    $('.form-kzs > *').not('.form-kzs-success').css({'opacity': '0', 'z-index': '-1'});
    $('.form-kzs-success').css({'opacity': '1', 'z-index': '1'});
});

document.querySelector('.video-bttn').addEventListener('click', function(e) {
    e.preventDefault();
});

$(document).on("click", "[data-fancy]", function(event) {
    event.preventDefault()
    $.fancybox.open({
      src: $(this).attr("data-fancy"),
  });
})

function scrollDetected() {

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
     $('.header').addClass('active').addClass('white')
 }else{
    $('.header').removeClass('white').removeClass('active')
}

if(scrollTop > $(".articles").eq(0).offset().top - 68){
    $('.header').addClass('black')
}else{
    $('.header').removeClass('black')
}

if(scrollTop > $(".form-contacts").eq(0).offset().top - 68){
    $('.header').removeClass('black')
}

if(scrollTop > $("[data-number]").eq(0).offset().top - $(window).height()){
    var det = '[data-number]'
    start_count(det)
}
if(scrollTop > $("[data-number2]").eq(0).offset().top - $(window).height()){
    var det = '[data-number2]'
    start_count(det)
}

if(scrollTop > $(".js-type").eq(0).offset().top - $(window).height()){

if($('.js-type').length){
    if(!$('.js-type').hasClass('go')){
  var typed = new Typed('.js-type', {
    strings: ["есть проект?"],
    typeSpeed: 99,
    cursorChar: '',
    })
}}
$('.js-type').addClass('go');
}

}

scrollDetected();
window.onscroll = scrollDetected;







function start_count(det) {
    $(det).each(function () {
        if(!$(this).hasClass('go')){
           $(this).prop('Counter',0).animate({
            Counter: $(this).data('number') || $(this).data('number2') 
        }, {
            duration:3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
       }
       
       $(this).addClass('go');
   });
}


