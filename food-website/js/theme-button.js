const changeThemeIconButton = document.querySelector(".change-theme-icon-button");

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
    } else {
        changeThemeIconButton.innerHTML = "<ion-icon name='moon-outline'></ion-icon>";
    }
}
