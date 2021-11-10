main();

function main() {

    const navBarButton = document.querySelector(".nav-bar-button");

    navBarButton.addEventListener("click", showMenuBar);


}


function showMenuBar() {

    const navBarContainer = document.createElement("div");
    navBarContainer.classList.add("nav-bar-container");

    const navBarButton = document.querySelector(".nav-bar-button");

    const navBar = document.querySelector(".nav-bar");

    const removeNavBarContainerIconDiv = document.createElement("div");
    removeNavBarContainerIconDiv.classList.add("remove-nav-bar-container-icon-div");
    removeNavBarContainerIconDiv.setAttribute("style", "display:flex;flex-direction:row;justify-content:flex-end;padding-top:30px;");

    const removeNavBarContainerIcon = document.createElement("button");
    removeNavBarContainerIcon.classList.add("remove-nav-bar-container-icon");
    removeNavBarContainerIcon.innerHTML = "<ion-icon name='close-outline'></ion-icon>";
    removeNavBarContainerIcon.setAttribute("style", "margin:-20px 0px 0px -30px;font-size:2rem;color:red;");

    const menuBarHeading = document.createElement("h3");
    menuBarHeading.classList.add("menu-bar-heading");
    menuBarHeading.innerHTML = 'Navigation Bar';

    document.body.style.background = 'linear-gradient(to left,rgba(232, 232, 232, 1),rgba(0,0,0,0.1))';

    navBar.style.visibility='visible';

    removeNavBarContainerIconDiv.appendChild(removeNavBarContainerIcon);

    navBarContainer.appendChild(removeNavBarContainerIconDiv);

    navBarContainer.appendChild(menuBarHeading);

    navBarContainer.appendChild(navBar);

    document.body.appendChild(navBarContainer);

    navBarButton.style.pointerEvents = 'none';

    removeNavBarContainerIcon.addEventListener("click", removeNavBar);

}


function removeNavBar(){

    const navBarButton = document.querySelector(".nav-bar-button");

    const navBarContainer = document.querySelector(".nav-bar-container");

    document.body.removeChild(navBarContainer);

    navBarButton.style.pointerEvents = 'auto';

}
