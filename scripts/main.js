//Allow user to click menu to close nav, but don't count consistent link clicks
let navMenu = document.getElementsByClassName('nav-menu')[0];
let navLinks = document.getElementsByClassName('nav-links')[0];

navLinks.addEventListener('click', (clickEvent) => {
    clickEvent.stopPropagation();
})

navMenu.addEventListener('click', toggleMobileNav);


//Open and/or close the mobile nav menu
function toggleMobileNav () {
    let nav = document.getElementById('nav');
    let navToggle = document.getElementById('nav-toggle');

    //check if nav has been opened, add open class if not and update label
    if(!nav.classList.contains('opened')){
        nav.classList.add('opened');
        navToggle.setAttribute('aria-label', 'Close Nav Menu');
    }
    else {
        nav.classList.remove('opened');
        navToggle.setAttribute('aria-label', 'Open Nav Menu');
    }
}