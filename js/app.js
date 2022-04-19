
window.swiper = new Swiper(".swiper-wrapper", {
    effect: "cube",
    grabCursor: true,
    slideClass: 'swiper-slide ',
    createElements: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    pagination: true,
    navigation: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
});