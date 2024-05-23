document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const part2Content1 = document.getElementById('part2Content1');
    const part2Content2 = document.getElementById('part2Content2');
    const part2Content3 = document.getElementById('part2Content3');
    const images = [
        document.getElementById('part1Image1'),
        document.getElementById('part1Image2'),
        document.getElementById('part1Image3'),
        document.getElementById('part1Image4'),
        document.getElementById('part1Image5'),
        document.getElementById('part1Image6'),
    ];
    const imagePart3 =  document.getElementById('part3ContentRightId');

    let scrolled = window.scrollY;
    let parallax = scrolled * -0.5;


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


    if (scrolled >= 450) {
        part2Content1.classList.remove('hidden2');
        part2Content1.classList.add('show');
        part2Content2.classList.remove('hidden2');
        part2Content2.classList.add('show');
        part2Content3.classList.remove('hidden2');
        part2Content3.classList.add('show');
    } else {
        part2Content1.classList.add('hidden2');
        part2Content1.classList.remove('show');
        part2Content2.classList.add('hidden2');
        part2Content2.classList.remove('show');
        part2Content3.classList.add('hidden2');
        part2Content3.classList.remove('show');
    }

    images.forEach((image, index) => {
        if (image) {
            image.style.transform = 'translateY(' + parallax * (1 - index * 0.1) + 'px)';
        }
    });

    imagePart3.style.transform = 'translateY(' + -1*(parallax *  0.1)+ 'px)';
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
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            const targetId = option.getAttribute('data-target');
            contentSections.forEach(section => section.classList.remove('active'));
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
const hiddenFromLeftItems = document.querySelectorAll('.hiddenFromLeft');
const hiddenStaticItems = document.querySelectorAll('.hiddenStatic');
hiddenItems.forEach((el) => observer.observe(el));
hiddenFromLeftItems.forEach((el) => observer.observe(el));
hiddenStaticItems.forEach((el) => observer.observe(el));

