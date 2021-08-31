const passwordReCheckInput = document.querySelector(".password-re-check-input");

const signUpButton = document.querySelector(".sign-up-button");

signUpButton.addEventListener("click", checkUsernameInput, true);
signUpButton.addEventListener("click", checkEmailIdInput, true);
signUpButton.addEventListener("click", checkPassword, true);

const showErrorDiv = document.querySelector(".show-error-div");

const showError = document.createElement("p");
showError.classList.add("show-error");
showError.style.color = 'red';

showErrorDiv.appendChild(showError);

function checkUsernameInput() {

    const usernameInput = document.querySelector(".username-input");

    const showErrorMessage = document.querySelector(".show-error");

    if (usernameInput.value == '') {
        usernameInput.style.boxShadow = '1px 0px 1px 2px #ff2f2f';
        showErrorMessage.innerHTML = 'Please fill the username';
    } else {
        return;
    }
}

function checkEmailIdInput() {

    const emailIdInput = document.querySelector(".email-id-input");

    const showErrorMessage = document.querySelector(".show-error");

    if (emailIdInput.value == '') {
        emailIdInput.style.boxShadow = '1px 0px 1px 2px #ff2f2f';
        showErrorMessage.innerHTML = 'Please fill the email';
    } else {
        return;
    }
}

function checkPassword() {

    const passwordInput = document.querySelector(".password-input");

    const passwordReCheckInput = document.querySelector(".password-re-check-input");

    const showErrorMessage = document.querySelector(".show-error");

    if (passwordInput.value == '') {
        passwordInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
        showErrorMessage.innerHTML = 'Password not filled';
    } else if (passwordInput.value.length < 5 || passwordInput.value.length > 30) {
        passwordInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
        showErrorMessage.innerHTML = 'Value should be between 5 to 30';
    } else if (passwordInput.value == passwordReCheckInput.value) {

        passwordInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
        passwordReCheckInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
        showErrorMessage.innerHTML = 'Password values not matched';
    } else {
        return;
    }
}