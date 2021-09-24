const accessibilitySection = document.querySelector(".accessibility-section");
const featuresSection = document.querySelector(".features-section");
const headerImg = document.querySelector(".header-img");

window.addEventListener("scroll", function () {
    const value = window.scrollY;
    headerImg.style.marginLeft = value * 1.5 + "px";

});

window.addEventListener("scroll", function () {
    if (featuresSection.getBoundingClientRect().top < window.innerHeight) {
        featuresSection.style.transform = "scale(1)";
        accessibilitySection.style.transform="scale(1)";
    } else {
        featuresSection.style.transform = "scale(.9)";
    }
})

window.addEventListener("scroll", function () {
    AOS.init({
        offset: 300,
        delay: 100,
        duration: 100,
    });
})

