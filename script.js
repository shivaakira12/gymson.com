let navBar=document.querySelector('.navbar')
let menu=document.querySelector('#menu-btn')
document.querySelector('#menu-btn').onclick=()=>{
	navBar.classList.toggle('active')
	menu.classList.toggle('fa-times')
};
var swiper = new Swiper(".home-slider", {
	spaceBetween: 20,
	effect: "fade",
	loop:true,
	grabCursor:true,
	centeredSlides:true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
});