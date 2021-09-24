const changeThemeButton = document.querySelector(".change-theme-button");

const changeTheme = document.querySelector(".change-theme");


changeThemeButton.addEventListener("click", together);

changeThemeButton.addEventListener("click", changeIcon);

function together() {
    if (changeTheme.getAttribute("href") == "style/style.css") {
        changeTheme.href = 'style/dark-light-style.css';
    } else {
        changeTheme.href = 'style/style.css';
    }
}

function changeIcon() {
    if (changeTheme.getAttribute("href") == "style/dark-light-style.css") {
        changeThemeButton.innerHTML = "<ion-icon name='moon'></ion-icon>";
        changeThemeButton.setAttribute("style", "position:fixed;top:92%;left:1%;padding: 10px 12px 10px 12px;box-shadow:.2px .2px 7px .2px white;font-size:1.3;border-radius: 200px;background:white;color:black;");
    } else {
        changeThemeButton.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
    }
}
