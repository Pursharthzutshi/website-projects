
giveFeedbackButton.addEventListener('click',addYourFeedback);

function addYourFeedback(){

    const yourFeedbackDiv = document.createElement('div');
    yourFeedbackDiv.classList.add('your-feedback-div');

    if(nameInput.value == "" && textarea.value == ""){
        nameInput.style.border='3px solid red';
        textarea.style.border='3px solid red';
    }else if(nameInput.value != "" && textarea.value != ""){
        giveYourFeedbackBox.appendChild();
    }else{
        return;
    }

}