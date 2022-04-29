const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keydown", searchTrigger);

function searchTrigger() {

    const cancelSearchIcon = document.createElement("div");
    cancelSearchIcon.innerHTML = '<ion-icon name="close-outline"></ion-icon>'

    searchBar.appendChild(cancelSearchIcon);
    console.log("ONKEY")
}