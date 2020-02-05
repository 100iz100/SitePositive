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


// pop up menu

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

// second pop up menu

let buttonClosePopUp = document.getElementById('closeSingUp');
let openPopSec = document.getElementById('secondPopOpen');
let openPopSecDiv = document.getElementById('secPopUpOpen');

openPopSecDiv.onclick = function(event){
	openPopSec.style.display = "block";
	popUpBg.style.display ="none"
}
buttonClosePopUp.addEventListener("click",function(event){
	openPopSec.style.display = "none";
	openPop.style.display ="block"
}) 

// third pop up menu

let buttonClosePopUpIn = document.getElementById('closeSingIn');
let openPopThird = document.getElementById('thirdpopopen');
let openPopThirdDiv = document.getElementById('thirdPopUpOpen');

openPopThirdDiv.onclick = function(event){
	openPopThird.style.display = "block";
	popUpBg.style.display ="none"
}
buttonClosePopUpIn.addEventListener("click",function(event){
	openPopThird.style.display = "none";
	openPop.style.display ="block"
}) 

// pop up user registration SING UP
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
	const getUserInfo = async (url, method) => {
		let response = await fetch(url, method)
			if (response.ok) { 
				document.cookie = `login=${userInfo.login}` 
			    document.cookie = `password=${userInfo.password}` 
			} else throw new Error("invalid Fetch!") 
	}
	getUserInfo(`https://garevna-rest-api.glitch.me/user/${userInfo.login}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userInfo)
	})
	// openPopThirdDiv.style.display = "none"
}

	// fetch( `https://garevna-rest-api.glitch.me/user/${userInfo.login}`, {
	// 	method: "POST", 
	// 	headers: {
	// 	  "Content-Type" : "application/json"
	// 	},
	// 	body: JSON.stringify(userInfo)
	// } )
	// 	.then(response => response.json())
	// 		.then(response => console.log(response))
// SingIn_______________SingIn____________SingIn______________________________SingIn

const passUser = document.getElementById('pass_third_f')
const logUser = document.getElementById('login_third_f')
const buttonForm = document.getElementById ('registrTsird')
let text =  document.body.appendChild(document.createElement('h3'))
text.style = `
			font-size:35px;
			color:blue;
			z-index: 15;
			position: absolute;
			top: 39%;
			left:50%;
			bacground: lightgray;
			transform: translate(-50%; -5%)
			cursor: pointer;
`

text.onclick = function(event){
	text.style.display = 'none'
}
logUser.onchange = function (event){
	let test = event.target.value
	passUser.onchange = function (ev){
		let testpass = Sha256.hash(ev.target.value)
		buttonForm.onclick = function(eve){
			fetch( `https://garevna-rest-api.glitch.me/user/${test}`)
				
		.then(response => response.json())
			.then(response => response.password === testpass && response.login === test ? 				
					text.innerText = `${test} hello`
							
					: text.innerText = ` Wrong Password or logIn `	
		    )
		}
	}
		 
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