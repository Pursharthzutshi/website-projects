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
    removeCreateAccountIcon.classList.add("remove-create-icon-account");
    removeCreateAccountIcon.innerHTML='<ion-icon name="close-outline"></ion-icon>';

    const createAccountHeading = document.createElement("h3");
    createAccountHeading.classList.add("create-account-heading");
    createAccountHeading.innerHTML='Create Account';

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

    createAccount.appendChild(removeCreateAccountIconDiv);

    createAccount.appendChild(createAccountHeading);

    createAccount.appendChild(nameInput);

    createAccount.appendChild(emailId);

    createAccount.appendChild(passwordInput);

    createAccount.appendChild(passwordReCheckInput);

    removeCreateAccountIconDiv.appendChild(removeCreateAccountIcon);

    document.body.appendChild(createAccount);

    document.body.style.pointerEvents='none';

}

const removeCreateAccountIcon = document.querySelector(".removeCreateAccountIcon")

removeCreateAccountIcon.addEventListener("click",removeCreateAccount);

function removeCreateAccount(){
    const deleteCreateAccount = document.querySelector(".create-account");
    document.body.removeChild(deleteCreateAccount);
}