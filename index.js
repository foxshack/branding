const menuButton = document.querySelector('header button:not(.nav-close)');
const nav = document.querySelector('header nav');
const closeButton = document.querySelector('.nav-close');

const closeNav = () => {
  nav.classList.remove('active');
};

const openNav = () => {

  requestAnimationFrame(() => {
    nav.style.display = '';
  });

  requestAnimationFrame(() => {
    nav.classList.add('active');
  });
};

// Toggle nav on menu button click
menuButton.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    closeNav();
  } else {
    openNav();
  }
});

// Close nav on close button click
closeButton.addEventListener('click', () => {
  closeNav();
});

// Close nav when a link is clicked
nav.querySelectorAll('a:not(.nav-close)').forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

// Close nav when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('header')) {
    closeNav();
  }
});

nav.addEventListener('transitionend', () => {
  console.log('Transition ended, updating display');
  if (!nav.classList.contains('active')) {
    nav.style.display = 'none';
  } else {
    nav.style.display = '';
  }
});
