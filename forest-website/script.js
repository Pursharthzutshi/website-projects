const donateButton = document.querySelector(".donate-button");

donateButton.addEventListener("click", showDonateBox);

function showDonateBox() {

    const backgroundBlurDiv = document.createElement("div");
    backgroundBlurDiv.classList.add("background-blur-div");

    const donateBox = document.createElement("div");
    donateBox.classList.add("donate-box");

    const donateBoxHeading = document.createElement("h3");
    donateBox.classList.add("donation-box-heading");
    donateBoxHeading.innerHTML = "DONATION BOX";

    const priceButtonDiv = document.createElement("div");
    priceButtonDiv.classList.add("price-button-div");

    const priceButton = document.createElement("button");
    priceButton.classList.add("price-button");
    priceButton.textContent = "$10";

    const secondPriceButton = document.createElement("button");
    secondPriceButton.classList.add("price-button");
    secondPriceButton.textContent = "$30";

    const thirdPriceButton = document.createElement("button");
    thirdPriceButton.classList.add("price-button");
    thirdPriceButton.textContent = "$50";

    const fourthPriceButton = document.createElement("button");
    fourthPriceButton.classList.add("price-button");
    fourthPriceButton.textContent = "$70";

    donateBox.appendChild(donateBoxHeading);

    const priceInput = document.createElement("input");
    priceInput.classList.add("price-input");
    priceInput.placeholder = "$ Enter Your Amount";

    priceButtonDiv.appendChild(priceButton);
    priceButtonDiv.appendChild(secondPriceButton);
    priceButtonDiv.appendChild(thirdPriceButton);
    priceButtonDiv.appendChild(fourthPriceButton);

    donateBox.appendChild(priceButtonDiv);

    donateBox.appendChild(priceInput);

    document.body.appendChild(donateBox);

    document.body.appendChild(backgroundBlurDiv);

    body.style.backdropFilter = "blur(2px)";
}

function fadeInBox() {

    const donateBoxFadeIn = document.querySelector(".donate-box");

    setTimeout(function() {
        donateBoxFadeIn.style.opacity = .6;
        donateBoxFadeIn.style.transition = .3;
    }, 1000)
}

function inputAmount() {
    const priceInputValue = document.querySelector(".price-input");
    priceInputValue.addEventListener("change", function() {

    })
}