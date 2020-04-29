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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// onload calls this loop

function formatMenu() {
    for (let section of sections) {
        createSectionLi(section);
     }
}



// build the nav




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


