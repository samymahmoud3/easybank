//animated menu 
const hamburger_menu = document.getElementById("hamburger_menu");
const header = document.getElementsByClassName("header")[0];
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger_menu.addEventListener("click", () =>{
    if (header.classList.contains("open")){ //close hamburger menu
        body.classList.remove('noScroll');
        header.classList.remove('open');
        fadeElement.forEach((e)=>{
            e.classList.remove('fade-in');
            e.classList.add('fade-out');
        })
        
        
    } else { //open hamburger toggle
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElement.forEach((e)=>{
            e.classList.add('fade-in');
            e.classList.remove('fade-out')
        })
        
    }
});