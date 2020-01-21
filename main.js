// Slider (+) взаимодействует ТОЛЬКО с нашими элементами
// не взаимодействуя со стилями css
let slideIndex = 1 ,
	slides = document.querySelectorAll('.sliderItem'),
	dotsWrap = document.querySelector('.sliderDots'),
	dots = document.querySelectorAll('.dot');

	
showSlides(slideIndex);

function showSlides (n) {
	if (n > slides.length) slideIndex = 1; 
	
	if (n < 1) slideIndex = slides.length;

	slides.forEach(item => item.style.display = 'none');
	dots.forEach(item => item.classList.remove('dot-active'));
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');
}	
 
function plusSlides (n) {
	showSlides(slideIndex += n);
} 

function currentSlide (n) {
	showSlides(slideIndex = n)
}

dotsWrap.onclick = function (event) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
			currentSlide(i)
		}
	}
}



// поп ап меню
let openPop = document.getElementById('openPopUp');
let closePop = document.getElementById('closePopUp')
let popUpBg = document.querySelector('.popUpBg')
openPop.onclick = function (event) {
	popUpBg.style.display ="block"
	openPop.style.display ="none"
}
closePop.onclick = function (event) {
	popUpBg.style.display ="none"
	openPop.style.display ="block"
}

// второе выплывающеe попап 
let buttonClosePopUp = document.getElementById('closeSingUp');
let openPopSec = document.getElementById('glass');
let openPopSecDiv = document.getElementById('secPopUpOpen');

openPopSecDiv.onclick = function(event){
	openPopSec.style.display = "block";
	popUpBg.style.display ="none"
}
buttonClosePopUp.addEventListener("click",function(event){
	openPopSec.style.display = "none";
}) 


// popUp регистрация юзера
const password = document.getElementById("Password");
const password2 = document.getElementById("PasswordControl");
const login = document.getElementById("login");
const userInfo = {};
let button = document.getElementById("registrSubmit")



login.oninput = function (event){
	event.target.value.length < 10 && !!event.target.value.match ( /\d/ ) && !!event.target.value.match ( /\D/ ) 
		&& event.target.value.lenght != 0 ? login.style.color = 'green' :
			login.style.color = 'red'
}

login.onchange = function(event){
	userInfo.login = event.target.value
}

password.oninput = function(event){
	let pass = event.target.value
	event.target.valid = pass.length > 6 && !!pass.match ( /\d/ ) && !!pass.match ( /\D/ )
    event.target.style.color = event.target.valid ? "green" : "red"
    password2.disabled = !event.target.valid
}

password2.oninput = function ( event ) {
    event.target.valid = event.target.value === password.value
    event.target.style.color = event.target.valid ? "green" : "red"
}

password2.onchange = function ( event ) {
    event.target.valid ? userInfo.password = Sha256.hash ( event.target.value ) : null
}

button.onclick = function(event){
	fetch( `https://garevna-rest-api.glitch.me/user/${userInfo.login}`, {
		method: "POST", 
		headers: {
		  "Content-Type" : "application/json"
		},
		body: JSON.stringify(userInfo)
	} )
		.then(response => response.json())
			.then(response => console.log(response))
}

// 			Слайдерсон

// var carousels = document.querySelectorAll('.slidesWrapp .sliderItem');
// var currentSliderItem = 0;
// var sliderItemInterval = setInterval(nextslidesWrapp,5000); /* Интервал между картинками */
// function nextsliderItem(){
// carousels[currentsliderItem].className = 'sliderItem';
// currentsliderItem = (currentsliderItem+1)%scarousels.length;
// carousels[currentCarousel].className = 'carousel img1';
// }

// // 	Наша верси
// let mainTheme = document.querySelector('.img1')

// let img = document.body.appendChild ( new Image() )
// img.style=` 
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		width: 100%;
// 		min-height: 970px;
// 		transition: 0.9s ease-out;
// `
// img.src = "images/sliderItem1.jpg"

// const showImage = function () {
//     let num = Math.round ( Math.random() * 10 )
    
//     arguments[0].src = `images/sliderItem${num}.jpg`
    
//     setTimeout (
//         () => requestAnimationFrame ( showImage ),
//         3000
//     )
// }.bind ( null, img )

// showImage()