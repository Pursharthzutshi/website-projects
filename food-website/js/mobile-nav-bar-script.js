const navBarButton = document.querySelector(".nav-bar-button");

navBarButton.addEventListener("click", showMenuBar, true);


function showMenuBar() {

    const removeNavBarContainerIconDiv = document.createElement("div");
    removeNavBarContainerIconDiv.classList.add("remove-nav-bar-container-icon-div");
    removeNavBarContainerIconDiv.setAttribute("style", "display:flex;flex-direction:row;justify-content:flex-end;padding-top:30px;");

    const removeNavBarContainerIcon = document.createElement("button");
    removeNavBarContainerIcon.classList.add("remove-nav-bar-container-icon");
    removeNavBarContainerIcon.innerHTML = '<i class="fa fa-times"></i>';
    removeNavBarContainerIcon.setAttribute("style", "margin:-20px 0px 0px -30px;color:red;");

    const menuBarHeading = document.createElement("h3");
    menuBarHeading.classList.add("menu-bar-heading");
    menuBarHeading.innerHTML = 'Navigation Bar'

    const navBarContainer = document.querySelector(".nav-bar-container");

    const navBar = document.querySelector(".nav-bar");

    navBarContainer.style.visibility = 'hidden';

    navBarContainer.style.visibility = 'visible';

    document.body.style.background = 'linear-gradient(to left,rgba(232, 232, 232, 1),rgba(0,0,0,0.1))';

    removeNavBarContainerIconDiv.appendChild(removeNavBarContainerIcon);

    navBarContainer.appendChild(removeNavBarContainerIconDiv);

    navBarContainer.appendChild(menuBarHeading);

    navBarContainer.appendChild(navBar);

    navBar.style.visibility = 'visible';

    removeNavBarContainerIcon.addEventListener("click", removeNavBar);

    function removeNavBar() {
        navBarContainer.removeChild(navBar);
        menuBarHeading.style.color = 'transparent';
        navBarContainer.style.visibility = 'hidden';
    }

}