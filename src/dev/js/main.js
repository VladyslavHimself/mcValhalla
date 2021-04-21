const { default: addClassToSelector } = require("./functions/addClassToSelector");

import barba from '@barba/core';
import gsap from 'gsap';

import './functions/barboss';

window.addEventListener('load', (e) => {
    // finish preloader
    addClassToSelector('.preloader', 'finishPreload');

    // finish intro
    addClassToSelector('.welcome', 'readyToAnimation');
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

