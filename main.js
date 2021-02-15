var mentBtn = document.getElementById("mentBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right == "-15rem";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-15rem"){
        sideNav.style.right = "0";
        menu.src = "../project-2/images/close.png";
    }
    else {
        sideNav.style.right = "-15rem";
        menu.src = "../project-2/images/menu.png";
    }
}