// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
        },
    },
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints: {
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1158: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    
});