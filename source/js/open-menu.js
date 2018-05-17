'use strict';
(function (){
  var menu = document.querySelector('.menu');
  var menuList = menu.querySelector('.menu__list');
  var buttonClose = menu.querySelector('.menu__button--close');
  var buttonOpen = menu.querySelector('.menu__button--open');

  menuList.classList.remove('menu__list--open');

  buttonOpen.addEventListener('click', openMenu);

  function openMenu(event) {
    event.preventDefault();
    menuList.classList.add('menu__list--open');
    buttonClose.addEventListener('click', closeMenu);
  }

  function closeMenu(event) {
    event.preventDefault();
    menuList.classList.remove('menu__list--open');
    buttonClose.removeEventListener('click', closeMenu);
    buttonOpen.focus();
  }
})();
