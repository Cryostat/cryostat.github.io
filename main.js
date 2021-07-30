//Simple JS calls functions//
window.onload = function() {

var menu = document.querySelector(".menu");
var pancake = document.querySelector(".pancake");
var exitIcon = document.querySelector(".exitIcon");
var menuIcon = document.querySelector(".menuIcon");

pancake.addEventListener("click", toggleMenu);

function toggleMenu() {
if (menu.classList.contains("showNav")) {
    menu.classList.remove("showNav");
    exitIcon.style.display = "none";
    menuIcon.style.display = "block";
} else {
    menu.classList.add("showNav");
    exitIcon.style.display = "block";
    menuIcon.style.display = "none";
    }
}

var menuLink = document.querySelectorAll(".menuLink");

menuLink.forEach(
    function (menuLink) {
      menuLink.addEventListener("click", toggleMenu)
    }
  )
}