var searchBar = document.querySelector(".search-input");
var queryBox = document.querySelector(".query-box");
searchBar.addEventListener("keyup", searchTrigger);

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