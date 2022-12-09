const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const form = document.querySelector('#form')
const msg = document.querySelector('.msg')

form.addEventListener('submit', (e) => {
    if (password.value == confirmPassword.value) {
        msg.style.color = '#596D48'
        msg.textContent = "Success!"
    }
    else {
        e.preventDefault()
        msg.style.color = '#9c0505'
        msg.textContent = "The passwords didn't match! Please try again."
    }
})