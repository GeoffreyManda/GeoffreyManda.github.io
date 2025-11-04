/**
 * main.js - Refined interactions for Apple-quality experience
 * Author: Geoffrey Manda
 */

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
  initScrollAnimations();
  initNavigation();
  initLazyLoading();
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
// SCROLL ANIMATIONS
// ============================================================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation for visual polish
        const delay = index * 75;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and sections with Apple-quality animations
  const elements = document.querySelectorAll('.card, .feature-card, .expertise-area, .update-item, .project-card');

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    el.style.willChange = 'opacity, transform';
    observer.observe(el);
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

  // Mobile menu toggle (if implemented)
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
}

// ============================================================================
// LAZY LOADING
// ============================================================================

function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
}

// ============================================================================
// UTILITIES
// ============================================================================

// Debounce function for performance
function debounce(func, wait = 20) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

// Report performance metrics if needed
if ('PerformanceObserver' in window) {
  try {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 100) {
          console.log(`Long task detected: ${entry.duration}ms`);
        }
      }
    });
    perfObserver.observe({ entryTypes: ['longtask'] });
  } catch (e) {
    // PerformanceObserver not supported
  }
}
