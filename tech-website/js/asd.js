main();

function main() {

    const removeNavBarIcon = document.querySelector(".remove-nav-bar-icon");

    const navBarButton = document.createElement("button");
    navBarButton.classList.add("nav-bar-button");
    navBarButton.innerHTML = "<ion-icon name='menu-outline'></ion-icon>";

    removeNavBarIcon.addEventListener("click",link);

    navBarButton.addEventListener("click", showNavBar);

    document.body.appendChild(navBarButton);

    const button = document.querySelectorAll(".button");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", link);
    }

    window.addEventListener("scroll", function () {

        const plansSection = document.querySelector(".plans-section");

        if (plansSection.getBoundingClientRect().top < window.innerHeight) {
            navBarButton.style.visibility = "visible";
        }
    });
}


function showNavBar() {

    const showNavBar = document.createElement("div");
    showNavBar.classList.add("show-nav-bar");

    const removeNavBarIcon = document.createElement("button");
    removeNavBarIcon.classList.add("remove-nav-bar-icon");
    removeNavBarIcon.innerHTML='<ion-icon name="close-circle-outline"></ion-icon>';

    const navBar = document.querySelector(".nav-bar");

    showNavBar.appendChild(navBar);

    showNavBar.appendChild(removeNavBarIcon);

    document.body.style.setAttribute = ("style", "overflow-y:hidden");

    document.body.appendChild(showNavBar);


}


function link() {
    const header = document.querySelector(".header");
    const navBar = document.querySelector(".nav-bar");
    const showNavBar = document.querySelector(".show-nav-bar");

    document.body.removeChild(showNavBar);

    header.appendChild(navBar);


}





