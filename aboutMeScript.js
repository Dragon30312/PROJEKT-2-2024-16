document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    let scrolled = window.scrollY;
    let parallax = scrolled * -0.5;
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');


    if (scrolled === 0) {
        nav.classList.add('scrolledNone');
        nav.classList.remove('scrolledABit', 'scrolledALot');
    } else if (scrolled > 0 && scrolled < 200) {
        nav.classList.add('scrolledABit');
        nav.classList.remove('scrolledNone', 'scrolledALot');
    } else if (scrolled >= 200) {
        nav.classList.add('scrolledALot');
        nav.classList.remove('scrolledNone', 'scrolledABit');
    }


    slider1.style.transform = 'translateX(' + -1*(parallax *  0.5)+ 'px)';
    slider2.style.transform = 'translateX(' + (parallax *  0.5)+ 'px)';
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const leftSideNavOptions = document.getElementById('leftSideNavOptions');

    hamburgerMenu.addEventListener('click', () => {
        leftSideNavOptions.classList.toggle('show');
    });
});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenItems = document.querySelectorAll('.hidden');
const hiddenFromLeftItems1 = document.querySelectorAll('.hiddenFromLeft1')
const hiddenFromLeftItems2 = document.querySelectorAll('.hiddenFromLeft2');
const hiddenFromLeftItems3 = document.querySelectorAll('.hiddenFromLeft3');
const hiddenFromLeftItems4 = document.querySelectorAll('.hiddenFromLeft4');
const hiddenFromLeftItems5 = document.querySelectorAll('.hiddenFromLeft5');
const hiddenStaticItems = document.querySelectorAll('.hiddenStatic');
hiddenItems.forEach((el) => observer.observe(el));
hiddenFromLeftItems1.forEach((el) => observer.observe(el));
hiddenFromLeftItems2.forEach((el) => observer.observe(el));
hiddenFromLeftItems3.forEach((el) => observer.observe(el));
hiddenFromLeftItems4.forEach((el) => observer.observe(el));
hiddenFromLeftItems5.forEach((el) => observer.observe(el));
hiddenStaticItems.forEach((el) => observer.observe(el));
