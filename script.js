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
function bmi(){
	var height=document.getElementById('height').value;
	var weight=document.getElementById('weight').value;
	var bmi=weight/(height/100*height/100);
	var total=bmi.toFixed(2);
	document.getElementById('result').innerHTML="Your BMI is "+total;
	if (height === "" || isNaN(height)) 
	result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight)) 
	result.innerHTML = "Provide a valid Weight!";

	else{
		if (bmi < 18.6) result.innerHTML =
		`Under Weight : <span>${bmi}</span>`;

	else if (bmi >= 18.6 && bmi < 24.9) 
		result.innerHTML = 
			`Normal : <span>${bmi}</span>`;

	else result.innerHTML =
		`Over Weight : <span>${bmi}</span>`;
	}

}