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

