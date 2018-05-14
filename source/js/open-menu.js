'use strict';
(function (){
  var menu = document.querySelector('.menu');
  var menuList = menu.querySelector('.menu__list');
  var buttonClose = menu.querySelector('.menu__button--close');
  var buttonOpen = menu.querySelector('.menu__button--open');

  menuList.classList.remove('menu__list--open');
  buttonOpen.classList.add('menu__button--show');

  buttonOpen.addEventListener('click', openMenu);

  function openMenu(evt) {
    evt.preventDefault();
    menuList.classList.add('menu__list--open');
    buttonClose.addEventListener('click', closeMenu);
    buttonOpen.classList.remove('menu__button--show');
  }
  function closeMenu(evt) {
    evt.preventDefault();
    menuList.classList.remove('menu__list--open');
    buttonOpen.classList.add('menu__button--show');
    buttonClose.removeEventListener('click', closeMenu);
    buttonOpen.focus();
  }
})();
