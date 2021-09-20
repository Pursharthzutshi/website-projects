main();

function main() {


    const navBarButton = document.createElement("button");
    navBarButton.classList.add("nav-bar-button");
    navBarButton.innerHTML = "<ion-icon name='menu-outline'></ion-icon>";

    navBarButton.addEventListener("click", showNavBar);

    document.body.appendChild(navBarButton);

    const button = document.querySelectorAll(".button");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", link);
    }

}




function showNavBar() {

    const navBarList = document.querySelector(".nav-bar-list");

    navBarList.style.visibility='visible';

    const showNavBar = document.createElement("div");
    showNavBar.classList.add("show-nav-bar");

    const navBar = document.querySelector(".nav-bar");

    showNavBar.appendChild(navBar);

    document.body.style.setAttribute = ("style", "overflow-y:hidden");

    document.body.appendChild(showNavBar);

}

function link() {
    const navBarContainer = document.querySelector(".nav-bar-container");
    const navBar = document.querySelector(".nav-bar");
    const showNavBar = document.querySelector(".show-nav-bar");
    const navBarList = document.querySelector(".nav-bar-list");

    const mq = window.matchMedia( "(max-width: 704px)" );

    if(mq.matches){
        navBarList.style.visibility='hidden';
    }else{
        navBarList.style.visibility='visible';
    }
    document.body.removeChild(showNavBar);

    navBarContainer.appendChild(navBar);



}





