function expandSideBar() {
    const sidebarContainer = document.getElementById("SideBar-Container");
    const menuIcon = document.getElementById("menu-icon");
    const recordName = document.querySelectorAll(".record-name");
    const sideBarlinkNames = document.querySelectorAll(".sidebar-link-name");

    menuIcon.classList.toggle("rotate-icon");
    sidebarContainer.classList.toggle("expanded");

    recordName.forEach(element => {
        element.classList.toggle("display-record-name");
    });
    sideBarlinkNames.forEach(element => {
        element.classList.toggle("display-sidebar-link-name");
    });
}