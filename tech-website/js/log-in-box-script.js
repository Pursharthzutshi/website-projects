const logInButton = document.querySelector(".log-in-button");

logInButton.addEventListener('click',createLogInBox);

function createLogInBox(){

    const logInBox = document.createElement("div");
    logInBox.classList.add('log-in-box');
    document.body.appendChild(logInBox);


}