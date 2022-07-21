var searchBar = document.querySelector(".search-input");
var queryBox = document.querySelector(".query-box");
searchBar.addEventListener("keyup", searchTrigger);

const customerHelpIcon = document.querySelector(".fixed-icon");

customerHelpIcon.addEventListener("click", createCustomerhelpDialogBox);

function searchTrigger() {

    var a = document.querySelectorAll(".query");

    for (let i = 0; i < a.length; i++) {

        if (a[i].textContent.includes(searchBar.value)) {
            a[i].style.display = "block";

        } else {
            a[i].style.display = "none";
        }
    }
}

function createCustomerhelpDialogBox() {

    //creating closehelpboxbuttondiv
    const closeHelpBoxButtonDiv = document.createElement("div");
    closeHelpBoxButtonDiv.classList.add("close-box-button-div");

    //creating closehelpboxbutton
    const closeHelpBoxButton = document.createElement("button");
    closeHelpBoxButton.classList.add("close-box-button");
    closeHelpBoxButton.innerHTML = '<ion-icon name="close"></ion-icon>';

    const customerHelpBox = document.createElement("div");
    customerHelpBox.classList.add("customer-help-box");

    const boxHeading = document.createElement("h2");
    boxHeading.classList.add("help-box-heading")
    boxHeading.textContent = "Chat with us";

    const boxInput = document.createElement("input");
    boxInput.classList.add("help-box-input");
    boxInput.placeholder = "Ask your query";

    //creating user typing text

    const userTypingText = document.createElement("p");
    userTypingText.classList.add("user-typing-text");

    //input text matches

    const userTextMatches = document.createElement("p");
    userTextMatches.classList.add("user-text-matches");

    closeHelpBoxButtonDiv.appendChild(closeHelpBoxButton);

    customerHelpBox.appendChild(closeHelpBoxButtonDiv);
    customerHelpBox.appendChild(boxHeading);
    customerHelpBox.appendChild(boxInput);

    customerHelpBox.appendChild(userTextMatches);
    customerHelpBox.appendChild(userTypingText);

    document.body.appendChild(customerHelpBox);

    closeHelpBoxButton.addEventListener("click", removeHelpDialogBox);
    boxInput.addEventListener("keyup", showUserTyping);
    boxInput.addEventListener("keydown", showUserTyping);

}

function showUserTyping(e) {

    const boxInput = document.querySelector(".help-box-input");
    const userTextMatches = document.querySelector(".user-text-matches");
    const userTypingText = document.querySelector(".user-typing-text");

    //    console.log(userTypingText.value)

    userTextMatches.innerHTML = boxInput.value;

    // if (e.keycode === 13) {
    //     console.log("Enter");
    // }

    if (boxInput.value !== "") {
        userTypingText.innerHTML = "You are typing";
        console.log(userTypingText);
    } else {
        userTypingText.innerHTML = "";
        console.log(userTypingText);
    }
}

function removeHelpDialogBox() {
    const customerHelpBox = document.querySelector(".customer-help-box");

    document.body.removeChild(customerHelpBox);
}