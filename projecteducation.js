
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

const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
	let x = e.clientX;
	let y = e.clientY;

	cursor.style.left = x + "px";
	cursor.style.top = y + "px";
});
