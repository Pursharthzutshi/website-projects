const topButton = document.createElement("button");
topButton.classList.add("top-button");
topButton.innerHTML="<ion-icon name='arrow-up-outline'></ion-icon>";
topButton.style.visibility='hidden';

document.body.appendChild(topButton);

topButton.addEventListener("click",topPage);

function topPage(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
}


window.addEventListener("scroll",function(){
    const elementTop = document.querySelector(".plans-section");

    if(elementTop.getBoundingClientRect().top < window.innerHeight){
        topButton.style.visibility='visible';
    }else if(elementTop.getBoundingClientRect().top < window.innerHeight){
        topButton.style.visibility='hidden';
    }else{
        return;
    }


});