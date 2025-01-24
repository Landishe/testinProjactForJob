const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
  }
});