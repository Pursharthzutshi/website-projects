
main();

function main(){

    const contactUsButton = document.querySelector(".contact-us-button");

    contactUsButton.addEventListener("click",contactUs,true);

    const contactUsDiv = document.querySelector(".contact-us-div");

    const removeContactUsIcon = document.createElement("button");
    removeContactUsIcon.classList.add("remove-contact-us-icon");
    removeContactUsIcon.innerHTML='<ion-icon name="close-outline"></ion-icon>';

    removeContactUsIcon.addEventListener("click",removeContactUs,true);

    contactUsDiv.appendChild(removeContactUsIcon);
}

function contactUs(){

    const contactUsDiv = document.querySelector(".contact-us-div");

    const contactUsBox = document.createElement("div");
    contactUsBox.classList.add("contact-us-box");

    document.body.style.background='gray';

    contactUsDiv.style.top='0%';

    document.body.appendChild(contactUsBox);

    contactUsBox.appendChild(contactUsDiv);

    contactUsDiv.style.visibility='visible';

    contactUsBox.style.visibility='visible';

}

function removeContactUs(){

    const contactUsBox = document.querySelector(".contact-us-box");
    const contactUsDiv = document.querySelector(".contact-us-div");

    document.body.style.background='white';

    contactUsDiv.style.top='100%';

    document.body.removeChild(contactUsBox);


}