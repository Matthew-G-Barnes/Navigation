const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav = [];

// defines Nav elements
for (let index = 0; index < 5; index++) {
    nav.push(document.getElementById(`nav-${index+1}`));
}

// opens Overlay and animates nav elements
function openNavWindow (isOpening) {
    overlay.classList.replace(isOpening ? 'overlay-slide-left': 'overlay-slide-right', isOpening ? 'overlay-slide-right': 'overlay-slide-left');
    for (let index = 0; index < nav.length; index++) {
        nav[index].classList.replace(isOpening ? `slide-out-${(index+1)}`: `slide-in-${(index+1)}`, isOpening ? `slide-in-${(index+1)}`: `slide-out-${(index+1)}`);            
    }
}

// Toggles Nav window open/close
function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        openNavWindow(true);
    } else {
        openNavWindow(false);
    }
}

// Eventg Listeners
menuBars.addEventListener('click', toggleNav);
for (let index = 0; index < nav.length; index++) {
    nav[index].addEventListener('click', toggleNav);
}