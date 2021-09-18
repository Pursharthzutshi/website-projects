const navBarButton = document.createElement("button");
navBarButton.classList.add("nav-bar-button");
navBarButton.innerHTML="<ion-icon name='menu-outline'></ion-icon>";
navBarButton.style.visibility="hidden";

document.body.appendChild(navBarButton);

window.addEventListener("scroll",function(){

    const plansSection = document.querySelector(".plans-section");

    if(plansSection.getBoundingClientRect().top < window.innerHeight){
        navBarButton.style.visibility="visible";
    }
});

navBarButton.addEventListener("click",showNavBar);

function showNavBar(){

    const showNavBar = document.createElement("div");
    showNavBar.classList.add("show-nav-bar");

    const navBar = document.querySelector(".nav-bar");

    showNavBar.appendChild(navBar);

    document.body.appendChild(showNavBar);

}

const button = document.querySelector(".button");

button.addEventListener("click",link);

function link(){
    const button = document.querySelector(".button");

    const header = document.querySelector(".header");

    const navBar = document.querySelector(".nav-bar");

    const showNavBar = document.querySelector(".show-nav-bar");

    for(let i = 0 ; i < button.length ; i++){

    document.body.removeChild(showNavBar);

    showNavBar.style.visibility='hidden';

    header.appendChild(navBar);
    }
}



