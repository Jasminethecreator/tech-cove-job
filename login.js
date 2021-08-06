// variables/ Input fields
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginForm = document.querySelector ('#login-form');

//const userNameInputError = document.querySelector('#username-error');
//const passwordInputError = document.querySelector('#password-error');





//form.addEventListener ('submit', (e) => {
// e.preventDefault();


//});

function checkInput () {

    if (username.value.trim().length <= 6) {
        alert('Username must be at least 8 characters');
        return false;
    } if (password.value.trim().length <= 8) {
        alert('Password much contain a number and atleast 8 characters');
        return false;
    } else {
        return true;
    }
}

