
$('.menu-btn').click(function () {
    $('nav .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    $('nav').toggleClass("active");
})

AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease',
});