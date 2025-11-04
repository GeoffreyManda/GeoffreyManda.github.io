/**
 * main.js - Clean Apple-style interactions ONLY
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
  initNavigation();
});

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (!target) return;

      const headerOffset = 64;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ============================================================================
// NAVIGATION
// ============================================================================

function initNavigation() {
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 0) {
      header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 0 0 rgba(0, 0, 0, 0.03)';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}
