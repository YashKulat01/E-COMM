const form = document.getElementById('signInForm');
const email_input = document.getElementById('emailField');
const password_input = document.getElementById('passField');
const error_message = document.getElementById('errorMsg');
const signInBtn = document.getElementById('submitBtn')

form.addEventListener('submit', (e) => {
    // 

    let erros = []
    let valid = true;
    if (email_input) {
        erros = getSignFormErros(email_input.value, password_input.value,)
    }
    // IF any erros any occurs....
    if (erros.length > 0) {
        e.preventDefault();
        valid = false;
        error_message.innerText = erros.join(".\n ")
    }
    if (valid) {
        e.preventDefault();
        window.location.href = "/Codes/Front-end/Main-page/Main-page.html";
    }
})

function getSignFormErros(email, password) {
    let erros = []
    if (email === '' || email == null) {
        erros.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null) {
        erros.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if (password.length < 8) {
        erros.push('Password must be at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }

    return erros;
}

const allInputs = [email_input, password_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})