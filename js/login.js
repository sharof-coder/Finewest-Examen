const formSubmit = document.querySelector('.form');
const userName = document.querySelector('.userName');
const password = document.querySelector('.password');

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    if(userName.value === "" || password.value === ""){
        alert('Input Is Empty')
    }else {
        window.location.href = '../pages/register.html'
    }
})