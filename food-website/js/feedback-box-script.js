const viewFeedbackButton = document.querySelector(".view-feedback-button");

viewFeedbackButton.addEventListener("click",createBox,true);


function createBox(){


    const feedbackBoxDiv = document.querySelector(".feedback-box-div");

    feedbackBoxDiv.setAttribute("style","width: 27rem;height:22rem;background:white;visibility:visible")

    const feedbackBox = document.createElement("feedback-box");
    feedbackBox.classList.add("feedback-box");

    const removeFeedbackBoxIcon = document.createElement('button');
    removeFeedbackBoxIcon.classList.add("remove-feedback-box-icon");
    removeFeedbackBoxIcon.innerHTML='<ion-icon name="close"></ion-icon>';

    feedbackBox.appendChild(removeFeedbackBoxIcon);

    feedbackBoxDiv.appendChild(feedbackBox);

    removeFeedbackBoxIcon.addEventListener("click",removeBox);

    feedbackBox.pointerEvents.style='auto';

    function removeBox(){

        feedbackBoxDiv.setAttribute("style","width: 27rem;height:22rem;background:white;visibility:hidden")

        removeFeedbackBoxIcon.pointerEvents.style='none';

    }
}