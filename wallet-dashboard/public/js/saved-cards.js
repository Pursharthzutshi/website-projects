const card = document.querySelector(".add-card-box");

card.addEventListener("click", addingNewCardDialogBox, false);

function addingNewCardDialogBox(event) {

    //creating a bg div 

    const bgDiv = document.createElement("div");
    bgDiv.classList.add("bg-div");

    const newCard = document.createElement("div");
    newCard.classList.add("new-card");

    const cardHeading = document.createElement("h3");
    cardHeading.textContent = "Credit Card Details";

    const saveCardsForm = document.createElement("form");
    saveCardsForm.classList.add("save-cards-form");
    saveCardsForm.action = "/";
    saveCardsForm.method = "post";

    //creating a container

    const inputsContainerDiv = document.createElement("div");
    inputsContainerDiv.classList.add("inputs-container-div");

    const cardNo = document.createElement("input");
    cardNo.classList.add("input-1");

    cardNo.setAttribute("id", "cardNo");
    cardNo.name = "cardNo";
    cardNo.type = "text";
    cardNo.placeholder = "Card No";

    const cardNameHolder = document.createElement("input");
    cardNameHolder.classList.add("input-2");
    cardNameHolder.setAttribute("id", "cardNameHolder");
    cardNameHolder.name = "cardNameHolder";
    cardNameHolder.placeholder = "Name";
    cardNameHolder.type = "text";

    const bottomRowInputs = document.createElement("div");
    bottomRowInputs.classList.add("bottom-row-inputs");

    const cardExpiryDate = document.createElement("input");
    cardExpiryDate.classList.add("input-3");
    cardExpiryDate.setAttribute("id", "cardExpiryDate");
    cardExpiryDate.name = "cardExpiryDate";
    cardExpiryDate.type = "month";
    cardExpiryDate.placeholder = "Expiry Date";
    cardExpiryDate.min = "2022-01";
    cardExpiryDate.max = "2040-12";
    cardExpiryDate.value = "2022-05";

    const cardCVV = document.createElement("input");
    cardCVV.classList.add("input-4");
    cardCVV.setAttribute("id", "cardCvv");
    cardCVV.name = "cardCvv";
    cardCVV.placeholder = "CVV";
    cardCVV.type = "password";
    cardCVV.minLength = 0;
    cardCVV.maxLength = 3;

    const saveCardButtonDiv = document.createElement("div");
    saveCardButtonDiv.classList.add("save-card-button-div");

    const saveCardButton = document.createElement("button");
    saveCardButton.classList.add("save-card-button");
    saveCardButton.innerHTML = "Save Card";

    document.body.appendChild(bgDiv);

    inputsContainerDiv.appendChild(cardNo);

    inputsContainerDiv.appendChild(cardNameHolder);

    bottomRowInputs.appendChild(cardExpiryDate);

    bottomRowInputs.appendChild(cardCVV);

    inputsContainerDiv.appendChild(bottomRowInputs);

    saveCardButtonDiv.appendChild(saveCardButton);

    inputsContainerDiv.appendChild(saveCardButtonDiv);

    saveCardsForm.appendChild(inputsContainerDiv)

    newCard.appendChild(cardHeading);

    newCard.appendChild(saveCardsForm);


    // cardNo.addEventListener("keydown", cardNoEvent);

    document.body.appendChild(newCard);

    //    const button = document.createElement("button");
    //    button.classList.add("button");
    //    button.textContent = "button"
    //    newCard.appendChild(button);

    // button.addEventListener("click", addNewCard);

    //    saveCardButtonDiv.addEventListener("click", addNewCard);
}

// function cardNoEvent() {
//     const cardNoValueEvent = document.querySelector(".input-1")


//     for (let i = 0; i < cardNoValueEvent.value.length; cardNoValueEvent.value.length++) {
//         if (i % 4 == 0) {
//             cardNoValueEvent.value =
//                 cardNoValueEvent.value(match.substring(i, i + 4))
//             console.log(i);
//         }
//     }
// }



function addNewCard(event) {

    const addSaveCardNo = document.querySelector(".input-1");
    const addSaveCardName = document.querySelector(".input-2");
    const addSaveCardExpiry = document.querySelector(".input-3");
    const addSaveCardCVV = document.querySelector(".input-4");

    const createSaveCardContainer = document.querySelector(
        ".create-save-card-container"
    );

    const newCardRemove = document.querySelector(".new-card");
    const bgDivRemove = document.querySelector(".bg-div");

    document.body.removeChild(newCardRemove);

    document.body.removeChild(bgDivRemove);

    const createSaveCard = document.createElement("div");
    createSaveCard.classList.add("create-save-card");
    const savedCardHeading = document.createElement("h3");
    savedCardHeading.classList.add("saved-card-heading");
    savedCardHeading.textContent = "Saved Card";
    savedCardHeading.style = "text-align:start";
    const savedCardNo = document.createElement("p");
    savedCardNo.textContent = "CARD NUMBER : " + addSaveCardNo.value;
    const saveCardName = document.createElement("p");
    saveCardName.textContent = "NAME ON CARD : " + addSaveCardName.value;
    const savedCardExpiry = document.createElement("span");
    savedCardExpiry.textContent = "EXPIRY DATE : " + addSaveCardExpiry.value;
    const SaveCardCVV = document.createElement("span");
    addSaveCardCVV.textContent = addSaveCardCVV.value;

    createSaveCard.appendChild(savedCardHeading);

    createSaveCard.appendChild(savedCardNo);
    createSaveCard.appendChild(saveCardName);
    createSaveCard.appendChild(savedCardExpiry);
    createSaveCard.appendChild(SaveCardCVV);

    createSaveCardContainer.appendChild(createSaveCard);

    document.body.appendChild(createSaveCardContainer);
}

function createForm(event) {
    const input = document.createElement("input");
    document.body.appendChild(input);

}