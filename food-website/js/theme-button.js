const changeThemeIconButton = document.querySelector(".change-theme-icon");

const changeTheme = document.querySelector(".change-theme");

changeThemeIconButton.addEventListener("click", together);

changeThemeIconButton.addEventListener("click", changeIcon);

function together() {
    if (changeTheme.getAttribute("href") == "style/style.css") {
        changeTheme.href = 'style/dark-light-style.css';
    } else {
        changeTheme.href = 'style/style.css';
    }
}

function changeIcon() {
    if (changeTheme.getAttribute("href") == "style/dark-light-style.css") {
        changeThemeIconButton.innerHTML = "<ion-icon name='moon'></ion-icon>";
        changeThemeIconButton.setAttribute("style", "position:fixed;top:92%;left:1%;padding: 10px 12px 10px 12px;box-shadow:.2px .2px 7px .2px white;font-size:1.3;border-radius: 200px;background:white;color:black;");
    } else {
        changeThemeIconButton.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
    }
}
