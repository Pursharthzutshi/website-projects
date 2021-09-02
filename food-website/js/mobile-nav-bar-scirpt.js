const navBarButton = document.querySelector(".nav-bar-button");

navBarButton.addEventListener("click", showMenuBar, true);


function showMenuBar() {

    removenavBarContainerIconDiv = document.createElement("div");
    removenavBarContainerIconDiv.classList.add("remove-nav-bar-container-icon-div");
    removenavBarContainerIconDiv.setAttribute("style", "display:flex;flex-direction:row;justify-content:flex-end;padding-top:30px;");

    const removenavBarContainerIcon = document.createElement("button");
    removenavBarContainerIcon.classList.add("remove-nav-bar-container-icon");
    removenavBarContainerIcon.innerHTML = '<i class="fa fa-times"></i>';
    removenavBarContainerIcon.setAttribute("style", "margin:-20px 0px 0px -30px;color:red;");

    const menuBarHeading = document.createElement("h3");
    menuBarHeading.classList.add("menu-bar-heading");
    menuBarHeading.innerHTML = 'Navigation Bar'

    const navBarContainer = document.querySelector(".nav-bar-container");

    const navBar = document.querySelector(".nav-bar");

    navBarContainer.style.visibility = 'hidden';

    navBarContainer.style.visibility = 'visible';

    document.body.style.background = 'linear-gradient(to left,rgba(232, 232, 232, 1),rgba(0,0,0,0.1))';

    removenavBarContainerIconDiv.appendChild(removenavBarContainerIcon);

    navBarContainer.appendChild(removenavBarContainerIconDiv);

    navBarContainer.appendChild(menuBarHeading);

    navBarContainer.appendChild(navBar);

    removenavBarContainerIcon.addEventListener("click", removeNavBar);

    navBar.style.visibility = 'visible';

    function removeNavBar() {
        navBarContainer.removeChild(navBar);
        menuBarHeading.style.color = 'transparent';
        navBarContainer.style.visibility = 'hidden';
    }

}