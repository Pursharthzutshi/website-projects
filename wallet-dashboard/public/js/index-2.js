const card = document.querySelector(".add-card-box")

card.addEventListener("click", addingNewCardDialogBox);

function addingNewCardDialogBox() {

    const bgDiv = document.createElement("div");
    bgDiv.classList.add("bg-div");

    const newCard = document.createElement("div");
    newCard.classList.add("new-card");

    const cardHeading = document.createElement("h3")
    cardHeading.textContent = "Credit Card Details"

    const inputsContainerDiv = document.createElement("div");
    inputsContainerDiv.classList.add("inputs-container-div");

    const cardNo = document.createElement("input");
    cardNo.classList.add("input");
    cardNo.placeholder = "Card No";
    cardNo.type = "number";
    cardNo.maxLength = "16";

    const cardNameHolder = document.createElement("input");
    cardNameHolder.classList.add("input");
    cardNameHolder.placeholder = "Name"
    cardNameHolder.type = "text"

    const bottomRowInputs = document.createElement("div");
    bottomRowInputs.classList.add("bottom-row-inputs");

    const cardExpiryDate = document.createElement("input");
    cardExpiryDate.classList.add("input");
    cardExpiryDate.placeholder = "Expiry Date"

    const cardCVV = document.createElement("input");
    cardCVV.classList.add("input");
    cardCVV.placeholder = "CVV"
    cardCVV.type = "password"

    const saveCardButtonDiv = document.createElement("div");
    saveCardButtonDiv.classList.add("save-card-button-div");

    const saveCardButton = document.createElement("button");
    saveCardButton.classList.add("save-card-button");
    saveCardButton.innerHTML = "Save Card";

    document.body.appendChild(bgDiv);

    newCard.appendChild(cardHeading);

    newCard.appendChild(inputsContainerDiv);

    inputsContainerDiv.appendChild(cardNo);

    inputsContainerDiv.appendChild(cardNameHolder);

    bottomRowInputs.appendChild(cardExpiryDate);

    bottomRowInputs.appendChild(cardCVV);

    inputsContainerDiv.appendChild(bottomRowInputs);

    inputsContainerDiv.appendChild(saveCardButton);

    inputsContainerDiv.appendChild(saveCardButtonDiv);

    saveCardButtonDiv.appendChild(saveCardButton);

    document.body.appendChild(newCard);

    saveCardButton.addEventListener("click", addNewCard);

}



function addNewCard() {

    const addSaveCardNo = document.querySelector(".input")

    const newCardRemove = document.querySelector(".new-card");

    const bgDivRemove = document.querySelector(".bg-div")

    document.body.removeChild(newCardRemove);

    document.body.removeChild(bgDivRemove);

    const createSaveCard = document.createElement("div");
    createSaveCard.classList.add("create-save-card");

    const savedCardHeading = document.createElement("h2");
    savedCardHeading.textContent = "Saved Card";

    const savedCardNo = document.createElement("p");
    savedCardNo.textContent = addSaveCardNo.value;

    createSaveCard.appendChild(savedCardHeading);

    createSaveCard.appendChild(savedCardNo);

    document.body.appendChild(createSaveCard);

}