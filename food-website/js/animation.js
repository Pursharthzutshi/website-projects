const ourServiceContainer = document.querySelector(".our-service-container");
const membershipContainer = document.querySelector(".membership-container");

const boxOne = document.querySelector("#box-1");
const boxTwo = document.querySelector("#box-2");
const boxThree = document.querySelector("#box-3");

window.addEventListener("scroll", function () {


    boxOne.style.transform = 'scale(1)';
    boxTwo.style.transform = 'scale(1)';
    boxThree.style.transform = 'scale(1)';

});

window.addEventListener("scroll", function () {

    if (ourServiceContainer.getBoundingClientRect().top < window.innerHeight) {
        ourServiceContainer.style.transform = 'scale(1)';
    } else {
        ourServiceContainer.style.transform = "scale(.9)";
    }

});


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