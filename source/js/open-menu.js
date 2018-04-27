'use strict';
(function (){
  var pageHeader = document.querySelector('.page-header')
  var toggleOpen = pageHeader.querySelector('.page-header__togle--open');
  var toggleClose = pageHeader.querySelector('.page-header__togle--close');
  var menu = pageHeader.querySelector('.main-menu');

  menu.classList.remove('main-menu__menu‐‐open');
  toggleOpen.addEventListener('click', openMenu);

  function openMenu() {
    event.preventDefault();
    pageHeader.classList.add('page-header__open-menu');
    menu.classList.add('main-menu__menu‐‐open');
    toggleClose.addEventListener('click', closeMenu);
  }
  function closeMenu() {
    event.preventDefault();
    pageHeader.classList.remove('page-header__open-menu');
    menu.classList.remove('main-menu__menu‐‐open');
    toggleClose.removeEventListener('click', closeMenu);
  }
})();
