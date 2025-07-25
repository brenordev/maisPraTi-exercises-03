const menu = document.getElementById('menu');
const icon = menu.querySelector('i')
const navLink = document.querySelectorAll('nav a');

menu.addEventListener('click', () => {
    navLink.forEach(link => {
    link.classList.toggle('active');
    icon.classList.toggle('fa-xmark');
    });
});