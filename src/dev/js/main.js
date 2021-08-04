import barba from '@barba/core';
import './functions/barboss';

const { default: addClassToSelector } = require('./functions/addClassToSelector');

window.addEventListener('load', () => {
  // finish preloader
  addClassToSelector('.preloader', 'finishPreload');
  // finish intro
  addClassToSelector('.welcome', 'readyToAnimation');
});

// Initialize burger
function initializeBurger() {
  setTimeout(() => {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    // navigation
    burger.addEventListener('click', () => {
      navigation.style.transform = 'translate(-100%, 0)';
    });

    document.querySelector('.navigation__close').addEventListener('click', () => {
      navigation.style.transform = 'translate(0%, 0%)';
    });
  }, 500);
}

barba.hooks.afterEnter((data) => {
  if (data.next.url.href.match('/index.html')) {
    addClassToSelector('.preloader', 'finishPreload');
    addClassToSelector('.welcome', 'readyToAnimation');
  }

  if (data.next.url.href.match('/index.html')) {
    addClassToSelector('.preloader', 'finishPreload');
    addClassToSelector('.welcome', 'readyToAnimation');
  }

  if (data.next.url.href.match('./html/home.html')) {
    initializeBurger();

    const textIp = 'mc.teaparty.fun';
    const playButton = document.querySelector('.playButton');

    playButton.addEventListener('click', () => {
      navigator.clipboard.writeText(textIp).then(() => {
        document.getElementById('btnText').innerHTML = 'IP COPIED TO CLIPBOARD!';
        setTimeout(() => {
          document.getElementById('btnText').innerHTML = 'Start play on Teaparty';
        }, 3000);
      });
    });
  }

  if (data.next.url.href.match('./html/about.html')) {
    initializeBurger();
  }

  if (data.next.url.href.match('./html/join.html')) {
    initializeBurger();
  }

  if (data.next.url.href.match('./html/team.html')) {
    initializeBurger();
  }
});
