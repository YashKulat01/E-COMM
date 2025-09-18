const form = document.getElementById('signInForm');
const username_input = document.getElementById('uNameField');
const email_input = document.getElementById('emailField');
const password_input = document.getElementById('passField');
const confirmPassword_input = document.getElementById('confirmPassField');
const checkbox_input = document.getElementById('cbField');
const error_message = document.getElementById('errorMsg');
const signInBtn = document.getElementById('submitBtn')

form.addEventListener('submit', (e) => {
    // 
    let erros = []
    let valid = true;
    if (username_input) {
        erros = getSignFormErros(username_input.value, email_input.value, password_input.value, confirmPassword_input.value,checkbox_input.value)
    }
    // IF any erros any occurs....
    if (erros.length > 0) {
        e.preventDefault();
        valid = false;
        error_message.innerText = erros.join(".\n ")
    }
    if (valid) {
        e.preventDefault();
        window.location.href = "/Codes/Front-end/Sign-in-page/Sign-in-page.html";
    }
})

function getSignFormErros(username, email, password, confirmPassword) {
    let erros = []
    if (username === '' || username == null) {
        erros.push('Username is required')
        username_input.parentElement.classList.add('incorrect')
    }

    if (email === '' || email == null) {
        erros.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null) {
        erros.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if (confirmPassword === '' || confirmPassword == null) {
        erros.push('Confirm password is required')
        confirmPassword_input.parentElement.classList.add('incorrect')
    }

    if (password.length < 8) {
        erros.push('Password must be at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }

    if (password !== confirmPassword) {
        erros.push('Password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        confirmPassword_input.parentElement.classList.add('incorrect')
    }

    if(!checkbox_input.checked){
        erros.push('You must be click on checkbox to go further')
        checkbox_input.parentElement.classList.add('incorrect')
        checkbox_input.parentElement.classList.add('incorrect')
    }

    return erros;
}

const allInputs = [username_input, email_input, password_input, confirmPassword_input,checkbox_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})

