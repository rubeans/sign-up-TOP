const checkPassword = () => {
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirm-password')
    let button = document.querySelector('button')
    let errorMsg = document.querySelector('.error-msg')


    if (password.value.length != 0) {
        if (password.value == confirmPassword.value) {
            console.log('Passed')
        }
        else {
            console.log('Didnt pass')
            confirmPassword.style.borderColor = 'red'
            password.style.borderColor = 'red'
            errorMsg.textContent = "The passwords didn't match!"
        }
    }
}