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
const sections = document.querySelectorAll('.section-title');
const navBarList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createSectionLi (sectionTitle) {
    const _sectionTitle = sectionTitle;
    const newLi = document.createElement('li');
    newLi.textContent = _sectionTitle;
    newLi.classList.add('menu__link');
    navBarList.appendChild(newLi);
}

function createLink ()

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// add: onPageLoad call "main function (for..loop)" 

function formatMenu() {
    for (let section of sections) {
        let sectionTitle = section.innerText;
        createSectionLi(sectionTitle);


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


