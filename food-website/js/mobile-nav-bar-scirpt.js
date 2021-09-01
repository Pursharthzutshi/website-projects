const navBarButton = document.querySelector(".nav-bar-button");

navBarButton.addEventListener("click", showMenuBar);


function showMenuBar() {

    removenavBarContainerIconDiv = document.createElement("div");
    removenavBarContainerIconDiv.classList.add("remove-nav-bar-container-icon-div");

    const removenavBarContainerIcon = document.createElement("button");
    removenavBarContainerIcon.classList.add("remove-nav-bar-container-icon");
    removenavBarContainerIcon.innerHTML = '<i class="fa fa-times"></i>';


    const menuBarHeading = document.createElement("h3");
    menuBarHeading.classList.add("menu-bar-heading");
    menuBarHeading.innerHTML = 'Navigation Bar'

    const navBarContainer = document.querySelector(".nav-bar-container");

    const navBar = document.querySelector(".nav-bar");

    navBar.style.visibility = 'visible';

    navBarContainer.style.visibility = 'visible';

    menuBarHeading.style.pointerEvents = 'none';

    removenavBarContainerIconDiv.appendChild(removenavBarContainerIcon);

    navBarContainer.appendChild(removenavBarContainerIconDiv);

    navBarContainer.appendChild(menuBarHeading);

    navBarContainer.appendChild(navBar);

}