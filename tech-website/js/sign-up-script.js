main();

function main(){

const createAccountButton = document.querySelector(".create-account-button");

createAccountButton.addEventListener("click",createLogInBox);

}

function createLogInBox(){

    const createAccount = document.createElement("div");
    createAccount.classList.add("create-account");

    const removeCreateAccountIconDiv = document.createElement("div");
    removeCreateAccountIconDiv.classList.add("remove-create-account-icon-div");

    const removeCreateAccountIcon = document.createElement("button");
    removeCreateAccountIcon.classList.add("remove-create-account-icon");
    removeCreateAccountIcon.innerHTML="<ion-icon name='close-outline'></ion-icon>";

    const createAccountHeading = document.createElement("h3");
    createAccountHeading.classList.add("create-account-heading");
    createAccountHeading.innerHTML='Create Account';

    const form = document.createElement("form");
    form.classList.add("form");

    const nameInput = document.createElement("input");
    nameInput.classList.add("create-account-input");
    nameInput.placeholder='Username';
    nameInput.style.cursor='pointer';

    const emailId = document.createElement("input");
    emailId.classList.add("create-account-input");
    emailId.placeholder='Email-Id';

    const passwordInput = document.createElement("input");
    passwordInput.classList.add("create-account-input");
    passwordInput.placeholder='Password';

    const passwordReCheckInput = document.createElement("input");
    passwordReCheckInput.classList.add("create-account-input");
    passwordReCheckInput.placeholder='Re-Check-Password';

    const signUpButtonsContainer = document.createElement("div");
    signUpButtonsContainer.classList.add("sign-up-buttons-container");

    const signUpButton = document.createElement("button");
    signUpButton.classList.add("sign-up-button");
    signUpButton.textContent='Sign Up';

    const googleAccountSignUp = document.createElement("button");
    googleAccountSignUp.classList.add("sign-up-button");
    googleAccountSignUp.textContent='Sign Up with Google';

    const facebookAccountSignUp = document.createElement("button");
    facebookAccountSignUp.classList.add("sign-up-button");
    facebookAccountSignUp.textContent='Sign Up with Facebook';

    removeCreateAccountIconDiv.appendChild(removeCreateAccountIcon);

    createAccount.appendChild(removeCreateAccountIconDiv);

    createAccount.appendChild(createAccountHeading);

    form.appendChild(nameInput);

    form.appendChild(emailId);

    form.appendChild(passwordInput);

    form.appendChild(passwordReCheckInput);

    signUpButtonsContainer.appendChild(signUpButton);

    signUpButtonsContainer.appendChild(googleAccountSignUp);

    signUpButtonsContainer.appendChild(facebookAccountSignUp);

    form.appendChild(signUpButtonsContainer);

    createAccount.appendChild(form);

    document.body.appendChild(createAccount);

    document.body.style.pointerEvents='none';

    removeCreateAccountIconDiv.appendChild(removeCreateAccountIcon);
}

const removeCreateAccount = document.querySelector(".remove-create-account-icon")

removeCreateAccount.addEventListener("click",removeAccount);

function removeAccount(){
    const deleteCreateAccount = document.querySelector(".create-account");
    document.body.removeChild(deleteCreateAccount);
}