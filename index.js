const menuSelector = '[data-fs-nav=menu]';
const closeSelector = '[data-fs-nav=close]';

const nav = document.querySelector('header nav');
const menuButton = document.querySelector(`header ${menuSelector}`);
const closeButton = document.querySelector(`header ${closeSelector}`);

const isMobile = () => window.innerWidth <= 900;

const closeNav = () => {
  if (isMobile()) {
    nav.style.right = '-310px'; // Move nav off-screen
    nav.classList.remove('active');
    setTimeout(() => {
      nav.style.width = '0'; // Reset width after animation
      nav.style.visibility = 'hidden'; // Hide nav after animation completes
    }, 300);
  }
};

const openNav = () => {
  if (isMobile()) {
    nav.style.width = '300px'; // Ensure nav has width for animation
    nav.style.visibility = 'visible'; // Ensure nav is visible before animation
    nav.style.right = '0px'; // Move nav on-screen
    nav.classList.add('active');
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
nav.querySelectorAll(`a:not(${closeSelector})`).forEach(link => {
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
    nav.style.width = 'unset'; // Ensure nav has width for animation
    nav.style.right = '0px'; // Move nav on-screen
  } else {
    nav.style.visibility = 'hidden';
    nav.classList.remove('active');
  }
};

window.addEventListener('resize', throttle(handleResize, 50));

window.addEventListener('load', handleResize);
window.addEventListener('orientationchange', handleResize);

// Smoothly animate native details/summary open/close in both directions.
const initAnimatedDetails = () => {
  if (typeof Element.prototype.animate !== 'function') {
    return;
  }

  document.querySelectorAll('details').forEach((details) => {
    const summary = details.querySelector('summary');

    if (!summary || details.children.length < 2) {
      return;
    }

    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    const onAnimationFinish = (open) => {
      details.open = open;
      details.style.height = '';
      details.style.overflow = '';
      animation = null;
      isClosing = false;
      isExpanding = false;
    };

    const open = () => {
      details.style.height = `${details.offsetHeight}px`;
      details.open = true;

      requestAnimationFrame(() => {
        isExpanding = true;

        if (animation) {
          animation.cancel();
        }

        const startHeight = `${details.offsetHeight}px`;
        const endHeight = `${details.scrollHeight}px`;

        animation = details.animate({
          height: [startHeight, endHeight]
        }, {
          duration: 300,
          easing: 'ease-out'
        });

        animation.onfinish = () => onAnimationFinish(true);
        animation.oncancel = () => {
          isExpanding = false;
        };
      });
    };

    const close = () => {
      isClosing = true;

      if (animation) {
        animation.cancel();
      }

      const startHeight = `${details.offsetHeight}px`;
      const endHeight = `${summary.offsetHeight}px`;

      animation = details.animate({
        height: [startHeight, endHeight]
      }, {
        duration: 260,
        easing: 'ease-out'
      });

      animation.onfinish = () => onAnimationFinish(false);
      animation.oncancel = () => {
        isClosing = false;
      };
    };

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      details.style.overflow = 'hidden';

      if (isClosing || !details.open) {
        open();
      } else if (isExpanding || details.open) {
        close();
      }
    });
  });
};

window.addEventListener('load', initAnimatedDetails);

// Lazy load background images
// Could tie this to requestIdleCallback() to make it more performant

const loadLazyBackgrounds = function () {
  const lazyBackgrounds = document.querySelectorAll('[data-bg-src]');

  lazyBackgrounds.forEach(element => {
    const imageToLoad = element.getAttribute('data-bg-src');
    const image = new Image();
    image.src = imageToLoad;
    image.onload = () => {
      element.style.backgroundImage = `url(${imageToLoad})`;
      element.classList.add('bg-fade-in');
    }
  });
}

//check if requestIdleCallback is supported
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(
    loadLazyBackgrounds, {
    timeout: 500
  });
} else {
  window.addEventListener('load', loadLazyBackgrounds);
}