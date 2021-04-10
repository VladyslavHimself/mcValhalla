window.addEventListener('load', (e) => {
    // finish preloader
    addClasstoSelector('.preloader', 'finishPreload');

    // finish intro
    addClasstoSelector('.welcome', 'readyToAnimation');
});



function addClasstoSelector(element, className) {
    const elem = document.querySelector(element);   
    elem.classList.add(className);
}

