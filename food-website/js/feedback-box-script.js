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

        const giveFeedbackRemoveIconDiv = document.createElement('div');
        giveFeedbackRemoveIconDiv.classList.add('give-feedback-remove-icon-div');

        const giveFeedbackRemoveIcon = document.createElement('button');
        giveFeedbackRemoveIcon.classList.add('give-feedback-remove-icon');
        giveFeedbackRemoveIcon.innerHTML="<ion-icon name='close'></ion-icon>";

        const giveFeedbackHeading = document.createElement('h2');
        giveFeedbackHeading.classList.add('give-feedback-heading');
        giveFeedbackHeading.textContent='YOUR FEEDBACK';
        giveFeedbackHeading.style.textAlign='center';

        const nameInput = document.createElement('input');
        nameInput.classList.add('feedback-name-input');
        nameInput.placeholder='Name';

        const feedbackTextArea = document.createElement('textarea');
        feedbackTextArea.classList.add('feedback-text-area');
        feedbackTextArea.placeholder='Write down your feedback';

        const giveFeedbackButton = document.createElement('button');
        giveFeedbackButton.classList.add('give-feedback-button');
        giveFeedbackButton.innerHTML='Add Your Feedback';

        document.body.appendChild(giveYourFeedbackBox);

        giveFeedbackRemoveIconDiv.appendChild(giveFeedbackRemoveIcon);

        giveYourFeedbackBox.appendChild(giveFeedbackRemoveIconDiv);

        giveYourFeedbackBox.appendChild(giveFeedbackHeading);

        giveYourFeedbackBox.appendChild(nameInput);

        giveYourFeedbackBox.appendChild(feedbackTextArea);

        giveYourFeedbackBox.appendChild(giveFeedbackButton);

        giveFeedbackRemoveIcon.addEventListener("click",removeGiveFeedbackBox);

        function removeGiveFeedbackBox(){

            document.body.removeChild(giveYourFeedbackBox);

            document.body.style.background ='white';
        }


    }
}