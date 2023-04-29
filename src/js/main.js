const openMenuBtn = document.querySelector('.nav__open_menu-btn');
const closeMenuBtn = document.querySelector('.nav__close_menu-btn');
const menuElem = document.querySelector('.nav__links-wrapper');

closeMenuBtn.addEventListener('click', function() {
    menuElem.classList.remove('nav__links-wrapper--menu');
    document.body.classList.remove('noscrolling');
});

openMenuBtn.addEventListener('click', function() {
    menuElem.classList.add('nav__links-wrapper--menu');
    document.body.classList.add('noscrolling');
});


require('./_slider');
require('./_advantager-slider');