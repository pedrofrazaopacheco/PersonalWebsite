

let navLinks = document.getElementById("navLinks")
let blurEl = document.getElementById("blur-el")

function showMenu(){
    navLinks.style.transform = "translate(-50%,20vh)";
    blurEl.style.filter = "blur(10px)";
    document.body.style.overflow = 'hidden';
}

function hideMenu(){
    navLinks.style.transform = "translate(-50%,-120%)";
    blurEl.style.filter = "blur(0px)";
    document.body.style.overflow = 'auto';
}