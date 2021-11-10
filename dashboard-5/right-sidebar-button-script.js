const rightSidebarButtonsDiv = document.querySelector(".right-sidebar-buttons-div");

rightSidebarButtonsDiv.addEventListener("click",rightSidebarDialogBox);

function rightSidebarDialogBox(){
    const uploadBox = document.createElement("div");
    uploadBox.classList.add("upload-box");

    const heading = document.createElement("h2");
    heading.classList.add("share-box-heading");
    heading.innerHTML="Share";

    const shareFileBox = document.createElement("div");
    shareFileBox.classList.add("share-file-box");
    shareFileBox.innerHTML="<ion-icon name=\"share-social-outline\"></ion-icon>";

    const text = document.createElement("div");
    text.classList.add("share-file-text");
    text.innerHTML="Share Your File";

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("share-box-icon-div");

    const iconOne = document.createElement("button");
    iconOne.classList.add("share-box-icon");
    iconOne.innerHTML="<ion-icon name=\'logo-facebook\'></ion-icon>";

    const iconTwo = document.createElement("button");
    iconTwo.classList.add("share-box-icon");
    iconTwo.innerHTML="<ion-icon name=\'logo-twitter\'></ion-icon>";

    const iconThree = document.createElement("button");
    iconThree.classList.add("share-box-icon");
    iconThree.innerHTML="<ion-icon name=\'logo-instagram\'></ion-icon>";

    const iconFour = document.createElement("button");
    iconFour.classList.add("share-box-icon");
    iconFour.innerHTML="<ion-icon name=\'logo-whatsapp\'></ion-icon>";

    uploadBox.appendChild(heading);

    uploadBox.appendChild(shareFileBox);

    uploadBox.appendChild(text);

    iconDiv.appendChild(iconOne);

    iconDiv.appendChild(iconTwo);

    iconDiv.appendChild(iconThree);

    iconDiv.appendChild(iconFour);

    uploadBox.appendChild(iconDiv);

    document.body.appendChild(uploadBox);
}