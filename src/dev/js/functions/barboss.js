import barba from '@barba/core';
import gsap from 'gsap';

function pageTransition() {
  
  var tl = gsap.timeline();

  tl.to();
}

function delay(n) {
  n = n || 2000;

  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  })
}


 barba.init({

    sync: true,

    transitions: [{

      async leave(data) {

        const done = this.async();

        pageTransition();
        await delay(1500),
        done();

      }

    }]

    });


// transitions: [{
//   name: 'opacity-transition',
//   leave(data) {
//     return gsap.to(data.current.container, {
//       opacity: 0
//     });
//   },
//   enter(data) {
//     return gsap.from(data.next.container, {
//       opacity: 0
//     }); 
//   }
// }]
    
console.warn('barba succesfully initialized!');


