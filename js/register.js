const formBtn = document.querySelector('.form')
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPass');
const regEx = /^[0-9]{6,12}$/

formBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    if(firstName.value === '' || lastName.value === '' || userName.value === '' || password.value === '' || confirmPassword.value =='') {
        alert('Input is Empty')
        window.location.href = 'register.html'
    } else {
        
        if(password.value !== confirmPassword.value) {
            alert('Type Confirm and Password the Same!!!')
        }else {
            window.location.href = '../pages/login.html'
        }
    }
})