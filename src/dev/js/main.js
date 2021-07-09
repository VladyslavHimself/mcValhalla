import barba from '@barba/core';
import './functions/barboss';

const { default: addClassToSelector } = require('./functions/addClassToSelector');

window.addEventListener('load', () => {
  // finish preloader
  addClassToSelector('.preloader', 'finishPreload')
  // finish intro
  addClassToSelector('.welcome', 'readyToAnimation')
});

barba.hooks.afterEnter((data) => {
  if (data.next.url.href.match('/index.html')) {
    addClassToSelector('.preloader', 'finishPreload');
    addClassToSelector('.welcome', 'readyToAnimation');
  }

  // let burger = document.querySelector('.burger');
  //     burger.addEventListener('click', function(e) {
  //     burger.classList.toggle('active');
});
