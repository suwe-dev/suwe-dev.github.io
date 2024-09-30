/**
 * Toggle between hamburger and X mark menu icon
 */
const hamburgerMenu = document.querySelector('#menu-icon');
const navbar_items = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('fa-bars');
    hamburgerMenu.classList.toggle('fa-xmark');
    navbar.classList.toggle('show-navbar');
});

/*
* Navbar item - active class toggle 
*/

navbar_items.forEach(item => {
  item.addEventListener('click', () => {
    const currentActive = document.querySelector('.navbar a.active');
    currentActive.classList.remove('active');

    item.classList.add('active');

    navbar.classList.remove('show-navbar');
    hamburgerMenu.classList.remove('fa-xmark');
    hamburgerMenu.classList.add('fa-bars');
  });
});

/*
* Windows scroll active toggle
*/

const sections = document.querySelectorAll('section');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(scrn => {
    let offset = scrn.offsetTop - 150;
    let height = scrn.offsetHeight;
    let id = scrn.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navbar_items.forEach(item => {
        item.classList.remove('active');
      });

      const activeItem = document.querySelector('.navbar a[href*="' + id + '"]');
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
  });
};