if (emailIdInput.value == '' && passwordInput.value == '') {
    showError.innerHTML = 'Please Fill the username';
    emailIdInput.style.boxShadow = '1px 0px 1px 2px #ff2f2f';
} else if (emailIdInput.value == '') {
    showError.innerHTML = 'Email id not filled';
    emailIdInput.style.boxShadow = '1px 0px 1px 2px #ff2f2f';
} else if (passwordInput.value == '' && passwordReCheckInput.value == '') {
    showError.innerHTML = 'Fill the password';
    passwordInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
    passwordReCheckInput.style.boxShadow = 'rgb(255 47 47) 0px 0px 1px 2px';
} else if (passwordInput.value < 5 || passwordInput.value > 30) {
    showError.innerHTML = 'Password should be between 5 to 30';
} else if (passwordInput.value == passwordReCheckInput.value) {
    showError.innerHTML = 'Password is not equal';
} else {
    return;
}