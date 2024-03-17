const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav__menu'); // Corrected typo in selector
const navLogo = document.querySelector('.navbar__logo'); // Corrected typo in selector
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active'); 
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

