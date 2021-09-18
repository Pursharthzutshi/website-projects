main();

function main() {

    const navBarButton = document.createElement("button");
    navBarButton.classList.add("nav-bar-button");
    navBarButton.innerHTML = "<ion-icon name='menu-outline'></ion-icon>";

    navBarButton.addEventListener("click", showNavBar);

    navBarButton.style.visibility = "hidden";

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

    const navBarList = document.querySelector(".nav-bar-list");

    const showNavBar = document.createElement("div");
    showNavBar.classList.add("show-nav-bar");

    const navBar = document.querySelector(".nav-bar");

    showNavBar.appendChild(navBar);


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





