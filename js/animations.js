/**
 * GAURAV YADAV PORTFOLIO - ANIMATIONS JAVASCRIPT
 * IntersectionObserver implementation for scroll reveal triggers
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
});

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after animating once to conserve resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}
