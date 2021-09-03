const navBarButton = document.querySelector(".nav-bar-button");

navBarButton.addEventListener("click", showMenuBar,true);

function showMenuBar() {
    const navBarButton = document.querySelector(".nav-bar-button");

    const navBarContainer = document.querySelector(".nav-bar-container");

    const navBar = document.querySelector(".navigation-bar");

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

    navBarContainer.style.visibility = 'visible';

    navBar.style.visibility='visible';

    removeNavBarContainerIconDiv.appendChild(removeNavBarContainerIcon);

    navBarContainer.appendChild(removeNavBarContainerIconDiv);

    navBarContainer.appendChild(menuBarHeading);

    navBarContainer.appendChild(navBar);

    navBarButton.style.pointerEvents='none';

    removeNavBarContainerIcon.addEventListener("click", removeNavBar,true);

    function removeNavBar() {


        navBarContainer.removeChild(navBar);
        document.body.removeChild(navBarContainer);

        menuBarHeading.style.color = 'transparent';
        navBar.style.visibility='visible';

        navBarButton.style.pointerEvents='auto';

    }

}