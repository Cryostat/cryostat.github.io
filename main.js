function menuPancake() {
    var item = document.getElementById("sidemenu");
    document.getElementById("menu-display").appendChild(node);
    toggle();
}
function toggle() {
    var x = document.getElementById("menu-display");
    if (x.style.dispay === "block") {
        x.style.display = "none";    
    }
    else {
        x.style.display = "block";
    }
}
document.getElementById("menu").addEventListener("click", menuPancake);