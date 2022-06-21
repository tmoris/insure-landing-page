
const navToggle = document.querySelector(".toggle-btn");
const navLinks = document.querySelectorAll(".navlist-link");
navToggle.addEventListener('click', ()=> {
document.body.classList.toggle ('nav-open');
});
navLinks.forEach( link => {
link.addEventListener ('click', () => {
document.body.classList.remove('nav-open');
});
});