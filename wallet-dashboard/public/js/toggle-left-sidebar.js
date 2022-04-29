const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", toggleLeftSidebar);

toggleButton.addEventListener("click", leftSidebarLink);


function toggleLeftSidebar() {

    const leftSidebarIcon = document.querySelector(".left-sidebar-icon");
    const leftSidebarLink = document.querySelector(".span-link");
    const leftSidebar = document.querySelector(".left-sidebar");

    if (leftSidebar.style.visibility == "visible") {

        leftSidebar.style.width = "15%";
        leftSidebar.style.boxShadow = ".2px .2px 12px .2px lightgray";
        leftSidebarIcon.style.marginLeft = "-50px";
        leftSidebarLink.style.visibility = "visible";

    } else {
        leftSidebar.style.visibility = "visible";
    }

}

function leftSidebarLink() {

    const leftSidebarLink = document.querySelector(".span-link");

    if (leftSidebarLink.style.visibility == "hidden") {

        leftSidebarLink.style.visibility == "visible"

    } else {
        leftSidebar.style.visibility = "visible";
    }

}