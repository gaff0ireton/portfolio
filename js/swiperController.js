const swiper2 = new Swiper('.swiper.gallery', {
    // Optional parameters
    
    direction: 'horizontal',
    loop: true,
    speed: 600,
    slidesPerView: 2,
    breakpoints: {
        // スライドの表示枚数：800px以上の場合
        800: {
            direction: 'vertical',
            slidesPerView: 5,
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // on: {
    //     click: function (swiper, event) {
    //         // 小さなSwiperのスライドをクリックしたときの処理
    //         // 関連する大きなSwiperにスクロールさせる
    //         var clickedIndex = swiper.clickedIndex;
    //         bigSwiper.slideTo(clickedIndex);
    //     },
    // },
});

const swiper = new Swiper('.swiper.main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    thumbs: {
        swiper: swiper2,
    },
});

