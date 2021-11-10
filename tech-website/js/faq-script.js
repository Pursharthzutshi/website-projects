const container = document.querySelector(".container");

container.addEventListener("click", showAnswer);


function showAnswer(e) {

    const target = e.target;

    if (!target) {
        return;
    }

    console.log(e.target)

    if (target.matches('ion-icon') && container.contains(target)) {

        const parent = target.closest('button');
        parent.nextElementSibling.classList.toggle("show-answer-box");

    }

}