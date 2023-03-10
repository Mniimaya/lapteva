const buttonMenu = document.querySelector('.button-menu');
const headerNavigation = document.querySelector('.header__navigation');

function handlerMenu() {
    buttonMenu.addEventListener('click', function(e) {
        e.target.classList.toggle('button-menu--open');
        headerNavigation.classList.toggle('header__navigation--show');
        document.body.classList.toggle('lock');
    });
}

handlerMenu();