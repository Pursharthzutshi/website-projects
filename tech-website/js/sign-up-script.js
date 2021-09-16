const createAccount = document.querySelector(".create-account-button");

createAccount.addEventListener("click",createLogInBox);

function createLogInBox(){

    const createAccount = document.createElement("div");
    createAccount.classList.add("create-account");

    const CreateAccountHeading = document.createElement("h3");
    CreateAccountHeading.classList.add("create-account-heading");
    CreateAccountHeading.innerHTML='Create Account';

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

    createAccount.appendChild(CreateAccountHeading);

    createAccount.appendChild(nameInput);

    createAccount.appendChild(emailId);

    createAccount.appendChild(passwordInput);

    createAccount.appendChild(passwordReCheckInput);

    document.body.appendChild(createAccount);

    createAccount.style.pointerEvents='none';




}