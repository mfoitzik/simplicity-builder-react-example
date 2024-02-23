const largeBreakpoint = "(min-width:1021px)";
let frameIncrement = 1000/60; //start off assuming fps is 60
let frameTime = 0;
let frameTimeCumulator = 0;
let sampleCount = 0;
function calcFps(tstamp) {
    if (frameTime == 0) {
        frameTime = tstamp;
    } else {
        frameTimeCumulator += (parseFloat(tstamp) - frameTime);
        frameTime = tstamp;
        sampleCount++;
    }
    if (sampleCount == 60) {
        frameIncrement = frameTimeCumulator / 60;
    } else {
        window.requestAnimationFrame(calcFps);
        
    }
}
function animateHeight(element, startHeight, endHeight, seconds, setAutoAtEnd) {
    let animaionLoopCounter = 0;
    let addHeight = 100;
    let incrementCum = 0;
    function step(timestamp) {
        finalCount = Math.ceil((1000/frameIncrement) * seconds);
        let increment = (endHeight - startHeight) / finalCount;
        incrementCum += increment;
        element.style.height = (startHeight + incrementCum) + 'px';
        
        animaionLoopCounter++;
        if (animaionLoopCounter < finalCount) {
            window.requestAnimationFrame(step);
        } else {
            if (setAutoAtEnd == true) {
                element.style.height = 'auto';
            }
        }
    }
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(calcFps);
document.addEventListener('DOMContentLoaded', function(){
    const menus = document.querySelectorAll('nav');
    menus.forEach(function(menu) {
        menu.querySelectorAll('ul').forEach(function (item) {
            item.addEventListener('keyup', function(e) {
                if (e.code.toUpperCase() == 'ESCAPE') {
                    closeOpenMenu();
                }
                
            })
        })
    });
    window.addEventListener('resize', function() {
        const burg = document.getElementById( 'menu-toggle' );
        const display = window.getComputedStyle(burg).display;
        if (display == 'none') {
            burg.setAttribute( 'aria-expanded', 'false' );
            burg.className = hamburgerButton.className.replace( ' opened', '' );
        }
    });
    const navButtons = document.querySelectorAll('nav > ul > li > button');
    navButtons.forEach(function(btnItem) {
        btnItem.addEventListener('click', function(e) {
            this.setAttribute('data-ignore', 'ignore');
            closeOpenMenu();
            this.removeAttribute('data-ignore');
            e.stopPropagation();
            
            this.nextElementSibling.classList.toggle('submenu-show');
            this.nextElementSibling.classList.remove('submenu-align-right');
            const subPosition = this.nextElementSibling.getBoundingClientRect(); 
            
            if ( parseFloat(subPosition.right) > window.innerWidth) {
                //this.nextElementSibling.style.left = 'auto';
                //this.nextElementSibling.style.right = '0';
                this.nextElementSibling.classList.add('submenu-align-right');
            }
            const getSpan = this.querySelector('svg');
            if (this.nextElementSibling.classList.contains('submenu-show')) {
                getSpan.classList.add('opened');
                this.nextElementSibling.setAttribute('aria-hidden', 'false');
                this.setAttribute('aria-expanded', 'true');
            } else {
                getSpan.classList.remove('opened');
                this.nextElementSibling.setAttribute('aria-hidden', 'true');
                this.setAttribute('aria-expanded', 'false');
            }
            
        });
    });
    const mainNavItems = document.querySelectorAll('nav > ul > li > a');
    mainNavItems.forEach(function (nItem) {
        nItem.addEventListener('mouseover', function(e) {
            const mtoggle = document.getElementById('menu-toggle');
            const mtoggleStyle = window.getComputedStyle(mtoggle);
            if (mtoggleStyle.display == 'none') {
                closeOpenMenu(); 
            }
            
        })
    });
    const closeOpenMenu = () => {
        const showingSubmenus = document.querySelectorAll('.submenu-show');
        showingSubmenus.forEach(function(submenu) {
            const subSib = submenu.parentNode.querySelector('button');
            const getSpan = subSib.querySelector('svg');
            getSpan.classList.remove('opened');
            if (subSib.getAttribute('data-ignore') != 'ignore') {
                submenu.classList.remove('submenu-show');
                submenu.setAttribute('aria-hidden', 'true');
                
                subSib.setAttribute('aria-expanded', 'false');
            }
            
        });
    }
    function extractNumber(value) {
        let match = value.match(/(\d+(\.\d+)?)/);
        return match ? parseFloat(match[1]) : 25;
    }
    document.addEventListener( 'click', closeOpenMenu );
    // Set button to click.
    var hamburgerButton = document.getElementById( 'menu-toggle' );

    // Click the button.
    

    hamburgerButton.addEventListener('click', function() {
        
        // Toggle class "opened". Set also aria-expanded to true or false.
        const mainMenu = document.querySelector('header');
        const mainMenuHeight = window.getComputedStyle(mainMenu);
        const navButtons = document.querySelector('nav ul');
        const navButtonsRight = document.querySelector('.nav-right');
        let rootStyles = getComputedStyle(document.documentElement);
        let myHeaderHeight = extractNumber(rootStyles.getPropertyValue('--header-height-small').trim());
        


        if (hamburgerButton.getAttribute('aria-expanded') == 'false') {
            navButtons.style.display = 'flex';
            navButtonsRight.style.display = 'flex';
            animateHeight(mainMenu, myHeaderHeight, mainMenu.scrollHeight, .125, true);
            hamburgerButton.setAttribute( 'aria-expanded', 'true' );
            hamburgerButton.className += ' opened';
            
        } else {
            animateHeight(mainMenu, mainMenu.scrollHeight, myHeaderHeight, .125, false);
            hamburgerButton.setAttribute( 'aria-expanded', 'false' );
            hamburgerButton.className = hamburgerButton.className.replace( ' opened', '' );
            navButtons.style.display = 'none';
        }
        
    });

    const mediaQuery = window.matchMedia(largeBreakpoint);
    mediaQuery.onchange = e => {
        const navButtons = document.querySelector('nav ul');
        const mainMenu = document.querySelector('header');
        const navButtonsRight = document.querySelector('.nav-right');
        if (e.matches) {
            navButtons.style.display = 'flex';
            navButtonsRight.style.display = 'flex';
            mainMenu.removeAttribute('style');
        }
    }                
});