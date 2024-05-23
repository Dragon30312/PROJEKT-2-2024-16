document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    let scrolled = window.scrollY;


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


});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const leftSideNavOptions = document.getElementById('leftSideNavOptions');

    hamburgerMenu.addEventListener('click', () => {
        leftSideNavOptions.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.part4ContentOption span');
    const contentSections = document.querySelectorAll('.part4ContentRight');

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            options.forEach(opt => opt.classList.remove('active'));
            // Add active class to the clicked option
            option.classList.add('active');

            // Get the target content section ID from the data-target attribute
            const targetId = option.getAttribute('data-target');

            // Remove active class from all content sections
            contentSections.forEach(section => section.classList.remove('active'));
            // Add active class to the target content section
            document.getElementById(targetId).classList.add('active');
        });
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
const hiddenStaticItems = document.querySelectorAll('.hiddenStatic');
hiddenItems.forEach((el) => observer.observe(el));
hiddenFromLeftItems1.forEach((el) => observer.observe(el));
hiddenFromLeftItems2.forEach((el) => observer.observe(el));
hiddenFromLeftItems3.forEach((el) => observer.observe(el));
hiddenStaticItems.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.part6ContentCard');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            // Add active class to the clicked card
            card.classList.add('active');
        });

        card.addEventListener('mouseover', () => {
            // Add gray background to all other cards
            cards.forEach(c => {
                if (c !== card) {
                    c.style.color = 'var(--lightgray-color)';
                }
            });
        });

        card.addEventListener('mouseout', () => {
            // Remove gray background from all other cards
            cards.forEach(c => {
                if (c !== card) {
                    c.style.color = 'var(--white-color)';
                }
            });
        });
    });
});