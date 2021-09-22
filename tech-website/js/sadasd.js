main();

function main(){

    const showAnswerIcon = document.querySelectorAll(".show-answer-icon");

    for(let i = 0; i < showAnswerIcon[i].length ; i++){

        showAnswerIcon[i].addEventListener("click",showAnswer);

    }
}

function showAnswer(){

    const answerBox = document.querySelector(".answer-box");

    answerBox.classList.toggle("show-answer-box");

}