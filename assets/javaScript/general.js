// variáveis
let email = document.querySelector('#Email')
let senha = document.querySelector('#senha')
let img1 = document.querySelector('.imagem')
let img2 = document.querySelector('.imagem2')

// validação do campo email

function validaEmail(){
	let txtEmail = document.querySelector('#txtEmail')
	if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
		txtEmail.innerHTML = 'Email Inválido'
		txtEmail.style.color = 'red'
	} else {
		txtEmail.innerHTML = 'Email válido'
		txtEmail.style.color = 'green'
	}
}

// função que diminui a imagem
function imgHoover(){
	img1.style.width = '75%'
	img1.style.height = '75%'
}

// função que volta a imagem ao normal
function imgNormal(){
	img1.style.width = '100%'
	img1.style.height = '100%'
}

// função que diminui a imagem
function imgHoover2(){
	img2.style.width = '75%'
	img2.style.height = '75%'
}

// função que volta a imagem ao normal
function imgNormal2(){
	img2.style.width = '100%'
	img2.style.height = '100%'
}
