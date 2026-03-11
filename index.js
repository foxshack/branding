const menuButton = document.querySelector('header button:not(.nav-close)');
const nav = document.querySelector('header nav');
const closeButton = document.querySelector('.nav-close');

const isMobile = () => window.innerWidth <= 900;

const closeNav = () => {
  if (isMobile()) {
    nav.style.right = '-310px'; // Move nav off-screen
    nav.classList.remove('active');
    // document.body.style.overflow = ''; // Re-enable body scrolling
    setTimeout(() => {
        nav.style.width = '0'; // Reset width after animation
        nav.style.visibility = 'hidden'; // Hide nav after animation completes
    }, 300);
  }
};

// nav.addEventListener('animationend', () => {
//   if (!nav.classList.contains('active')) {
//     nav.classList.add('hidden');
//   }
// });

const openNav = () => {
  if (isMobile()) {
    nav.style.width='300px'; // Ensure nav has width for animation
    nav.style.visibility = 'visible'; // Ensure nav is visible before animation
    nav.style.right = '0px'; // Move nav on-screen
    nav.classList.add('active');
    // document.body.style.overflow = 'hidden'; // Prevent body scrolling when menu is open
  }
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

const throttle = (func, limit) => {
  let inThrottle;
  return () => {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const handleResize = () => {
  if (window.innerWidth > 900) {
    nav.style.visibility = 'visible';
    nav.style.width='unset'; // Ensure nav has width for animation
    nav.style.right = '0px'; // Move nav on-screen
  } else {
    nav.style.visibility = 'hidden';
    nav.classList.remove('active');
  }
};

window.addEventListener('resize', throttle(handleResize, 50));
