/**
 * Interactive Effects & Micro-interactions
 * Premium user experience enhancements
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Initialize all effects
    initScrollProgress();
    initSpotlightEffect();
    initParallaxScroll();
    initStaggerAnimations();
    initSmoothScrollLinks();
    initMagneticButtons();
  }

  /**
   * Scroll Progress Indicator
   * Shows reading progress at the top of the page
   */
  function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update on scroll
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateScrollProgress(progressBar);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function updateScrollProgress(progressBar) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
  }

  /**
   * Spotlight Effect
   * Creates a spotlight effect that follows the mouse on cards
   */
  function initSpotlightEffect() {
    const spotlightCards = document.querySelectorAll('.feature-card, .expertise-area');

    spotlightCards.forEach(card => {
      card.classList.add('spotlight-card');

      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  /**
   * Parallax Scrolling
   * Creates smooth parallax effect on scroll
   */
  function initParallaxScroll() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return; // Respect user's motion preferences
    }

    const parallaxElements = document.querySelectorAll('.parallax-bg, .hero-gradient-bg');

    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateParallax(parallaxElements);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  function updateParallax(elements) {
    const scrolled = window.pageYOffset;

    elements.forEach(element => {
      const speed = element.dataset.parallaxSpeed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  /**
   * Stagger Animations
   * Reveals elements with a stagger effect on scroll
   */
  function initStaggerAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const staggerGroups = document.querySelectorAll('.feature-grid, .expertise-grid');

    staggerGroups.forEach(group => {
      group.classList.add('stagger-fade-in');
    });

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    staggerGroups.forEach(group => {
      observer.observe(group);
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   * Provides smooth scrolling for internal links
   */
  function initSmoothScrollLinks() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();

          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Magnetic Button Effect
   * Buttons slightly move toward cursor on hover
   */
  function initMagneticButtons() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const buttons = document.querySelectorAll('.hero-button, .btn-primary, .btn-secondary');

    buttons.forEach(button => {
      button.classList.add('magnetic-button');

      button.addEventListener('mousemove', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.15;
        const moveY = y * 0.15;

        button.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      });

      button.addEventListener('mouseleave', function() {
        button.style.transform = 'translate(0, 0) scale(1)';
      });
    });
  }

  /**
   * Add shimmer effect to headings
   */
  function initShimmerHeadings() {
    const mainHeading = document.querySelector('.hero-title');
    if (mainHeading) {
      const words = mainHeading.textContent.split(' ');
      if (words.length > 0) {
        // Add shimmer to first important word
        const firstWord = words[0];
        mainHeading.innerHTML = mainHeading.innerHTML.replace(
          firstWord,
          `<span class="shimmer-text">${firstWord}</span>`
        );
      }
    }
  }

  // Initialize shimmer headings
  initShimmerHeadings();

  /**
   * Performance optimization: Debounce function
   */
  function debounce(func, wait) {
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

  /**
   * Enhanced link styling
   */
  function initEnhancedLinks() {
    const contentLinks = document.querySelectorAll('.home-content a, .feature-link');
    contentLinks.forEach(link => {
      if (!link.classList.contains('btn-primary') &&
          !link.classList.contains('btn-secondary') &&
          !link.classList.contains('hero-button')) {
        link.classList.add('link-underline');
      }
    });
  }

  initEnhancedLinks();

  /**
   * Add ripple effect to buttons
   */
  function initRippleEffect() {
    const rippleButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

    rippleButtons.forEach(button => {
      button.classList.add('ripple');
    });
  }

  initRippleEffect();

  /**
   * Floating animation for certain elements
   */
  function initFloatingElements() {
    const updateItems = document.querySelectorAll('.update-item:nth-child(odd)');
    updateItems.forEach(item => {
      item.classList.add('float-gentle');
    });
  }

  initFloatingElements();

})();
