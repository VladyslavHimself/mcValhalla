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

    if (data.next.url.href.match('./html/home.html')) {

        const burger = document.querySelector('.burger'),
              navigation = document.querySelector('.navigation');
        
              // navigation
            burger.addEventListener('click', () => {
                navigation.style.transform = 'translate(-100%, 0)';
                
            })

            document.querySelector('.navigation__close').addEventListener('click', () => {
                navigation.style.transform = 'translate(0%, 0%)';
            })


            const textIp = "mc.teaparty.fun";
            const playButton = document.querySelector('.playButton');
    
            playButton.addEventListener('click', () => {
                navigator.clipboard.writeText(textIp).then(function() {
                    document.getElementById('btnText').innerHTML = 'IP COPIED TO CLIPBOARD!';
                    setTimeout(() => {
                        document.getElementById('btnText').innerHTML = 'Start play on Teaparty';
                    }, 3000);
                    console.log('Succesfully');
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });
            });
    


    }
    
});

