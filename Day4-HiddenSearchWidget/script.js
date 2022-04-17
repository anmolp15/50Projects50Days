let searchInput = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');
let container = document.getElementById('container');

searchBtn.addEventListener('click',()=>{
    container.classList.toggle('active');
    searchInput.focus();
})