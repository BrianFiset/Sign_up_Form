const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const formBtn = document.querySelector('.form-btn');

formBtn.addEventListener('click', ()=> {
    if(confirmPassword.value != password.value) {
        confirmPassword.classList.add('error');
        password.classList.add('error');
    } else {
        confirmPassword.classList.remove('error');
        password.classList.remove('error');
    }
})

function check() {
    if(confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity('Password Must be Matching');
    } else {
        confirmPassword.setCustomValidity('');
    }
}