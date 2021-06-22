// variáveis para login
let email = document.querySelector('#Email')
let senha = document.querySelector('#senha')

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

