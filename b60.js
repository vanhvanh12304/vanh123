const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-btn__burge');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__open');
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideMenuButton = menuButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideMenuButton) {
        menu.classList.remove('menu__open');
    }
});

const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});