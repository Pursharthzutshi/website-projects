const viewFeedbackButton = document.querySelector(".view-feedback-button");

viewFeedbackButton.addEventListener("click",createBox);

function createBox(){

    const feedbackBoxDiv = document.querySelector(".feedback-box-div");

    const feedbackBox = document.createElement("feedback-box");
    feedbackBox.classList.add("feedback-box");
    feedbackBoxDiv.appendChild(feedbackBox);

    feedbackBox.style.background='red';
}