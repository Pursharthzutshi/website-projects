const contactUsUsernameInput = document.querySelector(".contact-us-username-input");
const contactUsEmailInput = document.querySelector(".contact-us-email-input");
const contactUsTextarea = document.getElementsByName("textarea");

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener("click", contactUsValidation);

function contactUsValidation() {
    const contactUsTextarea = document.getElementsByName("textarea");

    const contactUsErrorDiv = document.querySelector(".contact-us-error-div");

    const contactUsError = document.createElement("p");
    contactUsError.classList.add("contact-us-error");
    contactUsError.innerHTML = '';

    contactUsErrorDiv.appendChild(contactUsError);

    if (contactUsUsernameInput.value == '' && contactUsEmailInput.value == '') {
        contactUsUsernameInput.style.border = '1px solid red';
        contactUsEmailInput.style.border = '1px solid red';
        contactUsError.innerHTML = 'Please fill the values';
    } else if (contactUsTextarea.value = '') {
        contactUsTextarea.style.background = 'red';
    } else if (contactUsUsernameInput.value != '' && contactUsEmailInput.value != '') {
        contactUsError.innerHTML = 'Logged in';
    } else {
        return;
    }


}