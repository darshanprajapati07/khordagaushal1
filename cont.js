document.getElementById('menu-icon').addEventListener('click', function() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("open");
});
function openNewPageHome() {
    // Specify the path to the new HTML file you want to open
    window.location.href = "abt.html";
}