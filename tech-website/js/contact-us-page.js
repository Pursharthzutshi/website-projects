main();

function main() {

    const contactUsButton = document.querySelector(".contact-us-button");

    contactUsButton.addEventListener("click", contactUs);

    const contactUsDiv = document.querySelector(".contact-us-div");

    const removeContactUsIcon = document.createElement("button");
    removeContactUsIcon.classList.add("remove-contact-us-icon");
    removeContactUsIcon.innerHTML = '<ion-icon name="close-outline"></ion-icon>';

    removeContactUsIcon.addEventListener("click", removeContactUs);

    contactUsDiv.appendChild(removeContactUsIcon);
}

function contactUs() {

    const contactUsBox = document.createElement("div");
    contactUsBox.classList.add("contact-us-box");

    const navBarButton = document.querySelector(".nav-bar-button");
    const contactUsButton = document.querySelector(".contact-us-button");
    const contactUsDiv = document.querySelector(".contact-us-div");

    contactUsDiv.style.top = '20%';

    contactUsDiv.style.animation='contactUsPage .3s ease';

    contactUsButton.style.pointerEvents = 'none';

    navBarButton.style.pointerEvents = 'none';

    contactUsDiv.appendChild(contactUsBox);

}

function removeContactUs() {

    const navBarButton = document.querySelector(".nav-bar-button");
    const contactUsButton = document.querySelector(".contact-us-button");
    const contactUsBox = document.querySelector(".contact-us-box");
    const contactUsDiv = document.querySelector(".contact-us-div");

    document.body.style.background = 'white';

    contactUsDiv.style.top = '100%';

    contactUsButton.style.pointerEvents = 'auto';

    navBarButton.style.pointerEvents = 'auto';

    contactUsDiv.removeChild(contactUsBox);
}