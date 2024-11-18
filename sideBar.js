function expandSideBar() {
    const sidebarContainer = document.getElementById("SideBar-Container");
    const menuIcon = document.getElementById("menu-icon");
    const recordName = document.querySelectorAll(".Record-Name");
    const sideBarlinkNames = document.querySelectorAll(".Link-Name");

    menuIcon.classList.toggle("rotate-icon");
    sidebarContainer.classList.toggle("expanded");

    recordName.forEach(element => {
        element.classList.toggle("Display-Record-Name");
    });
    sideBarlinkNames.forEach(element => {
        element.classList.toggle("Display-Link-Name");
    });
}