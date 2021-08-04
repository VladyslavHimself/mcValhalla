import barba from '@barba/core';
import './functions/barboss';

const { default: addClassToSelector } = require('./functions/addClassToSelector');

// Preloader at the start
window.addEventListener('load', () => {
  // finish preloader
  addClassToSelector('.preloader', 'finishPreload');
  // finish intro
  addClassToSelector('.welcome', 'readyToAnimation');
});

// Initialize burger
function initializeBurger() {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation');
  setTimeout(() => {
    // show menu
    burger.addEventListener('click', () => {
      navigation.style.transform = 'translate(-100%, 0)';
    });
    // hide menu
    document.querySelector('.navigation__close').addEventListener('click', () => {
      navigation.style.transform = 'translate(0%, 0%)';
    });
  }, 500);
}

// Copy Ip button
function copyIpFromButton() {
  const textIp = 'mc.teaparty.fun';
  const playButton = document.querySelector('.playButton');

  playButton.addEventListener('click', () => {
    navigator.clipboard.writeText(textIp).then(() => {
      document.getElementById('btnText').innerHTML = 'IP COPIED TO CLIPBOARD!';
      // change text for button
      setTimeout(() => {
        document.getElementById('btnText').innerHTML = 'Start play on Teaparty';
      }, 3000);
    });
  });
}


barba.hooks.afterEnter((data) => {
  // reload scripts after refreshing data
  if (data.next.url.href.match('/index.html')) {
    addClassToSelector('.preloader', 'finishPreload');
    addClassToSelector('.welcome', 'readyToAnimation');
  }

  // reload scripts after refreshing data
  if (data.next.url.href.match('/index.html')) {
    addClassToSelector('.preloader', 'finishPreload');
    addClassToSelector('.welcome', 'readyToAnimation');
  }

  // reload scripts after refreshing data
  if (data.next.url.href.match('./html/home.html')) {
    initializeBurger();
    copyIpFromButton();
  }

  // reload scripts after refreshing data
  if (data.next.url.href.match('./html/about.html')) {
    initializeBurger();
  }

  // reload scripts after refreshing data
  if (data.next.url.href.match('./html/join.html')) {
    initializeBurger();
  }

  // reload scripts after refreshing data
  if (data.next.url.href.match('./html/team.html')) {
    initializeBurger();
  }
});
