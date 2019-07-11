const menu = document.getElementsByClassName('sidebar__menu-wrapper')[0];
const angle = document.getElementsByClassName('sidebar__title')[0];

document.getElementsByClassName('onclick_dropdown')[0].onclick = function() {
  menu.classList.toggle("sidebar__menu-dropdown");
  angle.classList.toggle("angledown");
}

function menuClose() {
    menu.classList.remove('sidebar__menu-dropdown');
    angle.classList.remove('angledown');
}

function menuCloseClickOutside(e) {
    if(!e.target.matches('.menu_close')) {
        menuClose();
    };
}

document.addEventListener('click', menuCloseClickOutside);
document.addEventListener('touchstart', menuCloseClickOutside);
