const showAnswerDivButton = document.querySelector(".show -answer-div-button");

showAnswerDivButton.addEventListener("click", showAnswer);

function showAnswer() {

    const answerBox = document.querySelector(".answer-box");

    answerBox.classList.toggle("show-answer-box");

}