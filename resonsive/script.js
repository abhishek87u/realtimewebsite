// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');

  // Update aria-expanded for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
});

// Close navigation when a link is clicked (for single-page navigation)
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carousel Functionality
const carouselContainers = document.querySelectorAll('.carousel-container');

carouselContainers.forEach(container => {
  const carousel = container.querySelector('.carousel');
  const leftBtn = container.querySelector('.carousel-btn.left');
  const rightBtn = container.querySelector('.carousel-btn.right');

  leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

