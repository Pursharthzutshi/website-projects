const topButton = document.querySelector(".top-button-icon");

const cuisineSection = document.querySelector(".cuisine-section");

window.addEventListener("scroll",function(){
    if(cuisineSection.getBoundingClientRect().top < window.innerHeight){
        topButton.style.display="block";
    }
});

topButton.addEventListener("click",topPage);

function topPage(){
    window.scrollTo({
       top:0,
       left:0,
       behavior:"smooth"
    });
}