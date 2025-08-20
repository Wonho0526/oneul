AOS.init();

const banner_list = new Swiper(".banner_list", {
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});
$(".pause").click(function () {
    banner_list.autoplay.stop();
    $(".play").show();
    $(".pause").hide();
});
$(".play").click(function () {
    banner_list.autoplay.start();
    $(".play").hide();
    $(".pause").show();
});

const best_list = new Swiper(".best_list", {
    speed: 1000,
    slidesPerView: 2,
    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    spaceBetween: 60,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

//new
$(".new_list button").eq(0).addClass("active");
$(".new_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".new_img a").eq(num).fadeIn().siblings().hide();
});