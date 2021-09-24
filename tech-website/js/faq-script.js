const showAnswerDivButton = document.querySelector(".show-answer-div-button");

for (let i =0; i < showAnswerDivButton.length; i++){

showAnswerDivButton.addEventListener("click", showAnswer);
}

function showAnswer() {

    const answerBox = document.querySelector(".answer-box");


    answerBox.classList.toggle("show-answer-box");

}