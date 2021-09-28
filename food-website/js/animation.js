const ourServiceContainer = document.querySelector(".our-service-container");
const membershipContainer = document.querySelector(".membership-container");


window.addEventListener("click", function () {

    AOS.init({
        duration: 300,
        delay: 200,
        offset: 100,

    });

})

window.addEventListener("scroll", function () {

    if (membershipContainer.getBoundingClientRect().top < window.innerHeight) {
        membershipContainer.style.transform = 'scale(1)';
        membershipContainer.style.transform = 'rotate(0deg)';
    } else {
        membershipContainer.style.transform = "scale(.9)";
    }

});