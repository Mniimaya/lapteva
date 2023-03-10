const buttonMenu = document.querySelector('.button-menu');
const headerNavigation = document.querySelector('.header__navigation');
const servicesContainer = document.querySelector('.services__list-container');

function handlerMenu() {
    buttonMenu.addEventListener('click', function(e) {
        e.target.classList.toggle('button-menu--open');
        headerNavigation.classList.toggle('header__navigation--show');
        document.body.classList.toggle('lock');
    });
}


const servicesSliderSwiper = new Swiper(servicesContainer, {
    slideClass: 'services__item',
    wrapperClass: 'services__list',
    spaceBetween: 50,
    slidesPerView: "1",
    slidesPerGroup: 1,
    direction: 'horizontal',
    breakpoints: {
        1920: {
            slidesPerView: 5,
            spaceBetween: 25
          },
          1280: {
          slidesPerView: 4,
          spaceBetween: 20
          },
          770: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          480: {
          slidesPerView: 2,
          spaceBetween: 15
      },
      320: {
          slidesPerView: 1,
          spaceBetween: 20
      }
      },
});
handlerMenu();
