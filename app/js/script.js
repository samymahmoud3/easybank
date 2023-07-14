//animated menu 
const hamburger_menu = document.getElementById("hamburger_menu");
const header = document.getElementsByClassName("header")[0];
const overlay = document.querySelector('.overlay');
hamburger_menu.addEventListener("click", () =>{
    if (header.classList.contains("open")){ //close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out')
        
    } else { //open hamburger menu
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out')
    }
});