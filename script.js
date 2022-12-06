const checkPassword = () => {
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirm-password')
    let button = document.querySelector('button')
    let errorMsg = document.querySelector('.error-msg')


    if (password.value == confirmPassword.value) {
        console.log('Passed')
    }
    else {
        console.log('Didnt pass')
        confirmPassword.style.borderColor = 'red'
        confirmPassword.style.backgroundColor = 'red'
        confirmPassword.style.color = '#fff'
        errorMsg.textContent = "Didn't match! Please try again."
        button.disabled = true
    }
}