const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');


menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuButton.innerHTML = mobileMenu.classList.contains('open') ? '✖' : '☰';
});

const searchIcon = document.querySelector('#searchButton');
const inputSearch = document.querySelector('#inputSearch')
searchIcon.addEventListener('click', () => {
    inputSearch.classList.toggle('get');
    searchIcon.innerHTML = inputSearch.classList.contains('get') ? '✖' : '<img src="./img/search.svg" alt="">';
});