"use string";

(function () {

  const pageHeader = document.querySelector('.page-header');
  const button = document.querySelector('.page-header__toggle');
  const nav = document.querySelector('.nav');
  const navButtons = document.querySelectorAll('.nav__item');

  const toogleMenu = () => {
    pageHeader.classList.toggle('page-header--open');
    pageHeader.classList.toggle('page-header--close');
  };

  pageHeader.classList.remove('page-header--no-js');
  pageHeader.classList.add('page-header--close');
  nav.classList.remove('nav--no-js')
  nav.classList.add('nav--js');

  button.addEventListener('click', toogleMenu);

  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (pageHeader.classList.contains('page-header--open')) {
        toogleMenu();
      }
    });
  });

  const countryLinks = document.querySelectorAll('.country-list__link');
  const countryDescription = document.querySelectorAll('.country-description');
  const countryIcons = document.querySelectorAll('.country')

  countryDescription.forEach((card) => {
    card.classList.add('country-description--hidden');
  });
  countryLinks[0].classList.add('country-list__link--active');
  countryDescription[0].classList.remove('country-description--hidden');

  const changeCards = (index) => {
    countryLinks.forEach((button) => {
      button.classList.remove('country-list__link--active');
    });
    countryDescription.forEach((card) => {
      card.classList.add('country-description--hidden');
    });

    countryLinks[index].classList.add('country-list__link--active');
    countryDescription[index].classList.remove('country-description--hidden');
  };

  countryLinks.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      changeCards(index);
    });
  });

  countryIcons.forEach((element, index) => {
    element.addEventListener('click', () => {
      changeCards(index);
    });
  });
})();
