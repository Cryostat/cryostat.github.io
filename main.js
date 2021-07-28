//Simple JS calls functions//

var menu = document.querySelector(".menu");
var pancake = document.querySelector(".pancake");
var exitIcon = document.querySelector(".exitIcon");
var menuIcon = document.querySelector(".menuIcon");

pancake.addEventListener("click", toggleMenu);
menu.classList.contains("showMenu");


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      exitIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      exitIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  var menuLinks = document.querySelectorAll(".menuLink");

  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleMenu);
    }
  )
  