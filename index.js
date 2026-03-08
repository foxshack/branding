const menuButton = document.querySelector('header button:not(.nav-close)');
const nav = document.querySelector('header nav');
const closeButton = document.querySelector('.nav-close');

// Toggle nav on menu button click
menuButton.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close nav on close button click
closeButton.addEventListener('click', () => {
  nav.classList.remove('active');
});

// Close nav when a link is clicked
nav.querySelectorAll('a:not(.nav-close)').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('header')) {
    nav.classList.remove('active');
  }
});
