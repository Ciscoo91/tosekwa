const inputElt = document.querySelector('.search__input');
const searchIcon = document.querySelector('.fa-search');
const hamburgerMenuElt = document.querySelector(".hamburger-btn");
const mediumScreenWidth = 769;
const crosElt = document.querySelector(".fa-times");
const barsElt = document.querySelector(".fa-bars");
const hamburgerIconsElt = [barsElt, crosElt];


searchIcon.addEventListener('click', (e)=>{
    inputElt.classList.toggle("active_icon");
    inputElt.style.transition = "ease-in 0.8s";
});

document.addEventListener('DOMContentLoaded', ()=>{
    hamburgerMenuElt.style.display = "none";
    if(window.innerWidth <= mediumScreenWidth){
        hamburgerMenuElt.style.display = "block";
    }
});

window.addEventListener("resize", ()=>{
    if(window.innerWidth <= mediumScreenWidth){
        hamburgerMenuElt.style.display = "block";
        hamburgerMenuElt.style.transition = "linear 0.6s";
        inputElt
    }else{
        hamburgerMenuElt.style.display = "none";
        hamburgerMenuElt.style.transition = "linear 0.6s";
    }
});

/*

    pseudeo code:

    - If the menu is active (class active):
        - the fa-bars boutton should be incative
        - the fa-times bouton should be active
        - the menu should be déployed
    - if the menu is inactive (class inactive):
        - the fa-bars boutton  should be active
        - the fa-times boutton  should be inactive

*/

hamburgerMenuElt.addEventListener("click",(e)=>{

    document.querySelector(".primary-nav").classList.toggle("active");
    document.querySelector(".primary-nav").style.transition = "ease-in 0.9s";

    crosElt.classList.toggle("active_icon");
    barsElt.classList.toggle("inactive_icon");

});