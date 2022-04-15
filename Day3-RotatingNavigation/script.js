let navBtn = document.getElementById('nav-btn');
let navBtnCross = document.getElementById('nav-btn-cross');
let main = document.getElementById('main');
let content = document.getElementById('content');
let navBtnDiv = document.getElementById('nav-button-div');
let menu = document.getElementById('menu');

navBtn.addEventListener('click', ()=>{
    main.classList.add('rotate');
    navBtn.classList.add('rotate120');
    navBtnCross.style.transform = 'rotate(0deg)';  
    menu.style.transform = 'translateX(0%)'  
});

navBtnCross.addEventListener('click', ()=>{
    main.classList.remove('rotate');
    navBtn.classList.remove('rotate120');
    navBtnCross.style.transform = 'rotate(120deg)';
    menu.style.transform = 'translateX(-100%)' 
    menu.style.transitionDelay = '0s'
});

