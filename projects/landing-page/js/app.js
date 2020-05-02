/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navBarList = document.getElementById('navbar__list');
const vpHeight = window.innerHeight + 200;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createSectionLi (_section) {
    const linkId = _section.getAttribute('id');
    const linkLocation = `index.html#${linkId}`;
    const title = _section.getAttribute('data-nav');
    const newLi = document.createElement('li');
    const innerLink = document.createElement('a');
    innerLink.setAttribute('href', linkLocation);
    innerLink.classList.add('menu__link');
    innerLink.textContent = title;
    newLi.appendChild(innerLink);
    navBarList.appendChild(newLi);
}

function inView(section) {
    const linkId = section.getAttribute('id');
    const linkLocation = `index.html#${linkId}`;
    const linkContainer = document.querySelectorAll(`a[href="${linkLocation}"]`)
    const position = section.getBoundingClientRect();
    if (position.top <= 0 && position.bottom <= vpHeight) {
        section.classList.add('active');
    }
    if (position.top >= 0 && position.bottom >= vpHeight) {
        section.classList.remove('active');
}};


// onload calls this loop to create the nav menu

function formatMenu() {
    for (let section of sections) {
        createSectionLi(section);
     }
}

// Listen for scroll and if a section is in the viewport the class is added

window.addEventListener('scroll', () => {
   for (let section of sections) {
       inView(section);
   }
});
