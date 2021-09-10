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


    function removeBox(){

        feedbackBoxDiv.setAttribute("style","width: 27rem;height:22rem;background:white;visibility:hidden")

        removeFeedbackBoxIcon.pointerEvents.style='none';

    }

    const addFeedbackBoxButton = document.querySelector('.add-feedback-box-button');

    addFeedbackBoxButton.addEventListener('click',giveFeedbackBox);

    function giveFeedbackBox(){

        const giveYourFeedbackBox = document.createElement("div");
        giveYourFeedbackBox.classList.add("give-feedback-box");

        const nameInput = document.createElement('input');
        nameInput.classList.add('feedback-name-input');

        document.body.appendChild(giveYourFeedbackBox);

        giveYourFeedbackBox.appendChild(nameInput);

        document.body.style.background = 'linear-gradient(to left,rgba(232, 232, 232, 1),rgba(0,0,0,0.1))';

    }
}