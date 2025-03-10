/**
 * main.js - Sophisticated animations and interactions
 * Author: Geoffrey Manda
 * 
 * This file contains advanced animations and interactive elements using GSAP
 * and vanilla JavaScript for a world-class web experience.
 */

// Check if GSAP is loaded and provide a fallback if not
const gsapLoaded = typeof gsap !== 'undefined';
if (!gsapLoaded) {
  console.warn('GSAP library not loaded. Some animations will be disabled.');
}

// ============================================================================
// INITIALIZATION AND HELPER FUNCTIONS
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initSmoothScrolling();
  initMicroInteractions();
  initPageTransitions();
  initScrollAnimations();
  initLazyLoading();
  initContactFormAnimations();
  initParallaxEffects();
  initCursorEffects();
});

// Utility function for debouncing events
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Check for animation support
function supportsAnimation() {
  return typeof document.body.animate === 'function';
}

// ============================================================================
// DARK MODE TOGGLE
// ============================================================================

function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Apply the theme on initial load
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateDarkModeElements(true);
  } else {
    document.body.classList.remove('dark-mode');
    updateDarkModeElements(false);
  }
  
  // Add toggle functionality if the button exists
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      // Save the preference
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      
      // Update elements and animate transition
      updateDarkModeElements(isDarkMode);
      animateModeTransition(isDarkMode);
    });
  }
}

function updateDarkModeElements(isDarkMode) {
  // Update icon states based on mode
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  
  if (moonIcon && sunIcon) {
    if (isDarkMode) {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  }
  
  // You can update additional elements based on mode here
}

function animateModeTransition(isDarkMode) {
  if (!gsapLoaded) return;
  
  // Create a smooth transition animation for dark mode toggle
  gsap.to('body', {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#f5f5f5' : '#333333',
    duration: 0.5,
    ease: 'power2.inOut'
  });
  
  // Animate text elements
  gsap.to('h1, h2, h3, h4, h5, h6', {
    color: isDarkMode ? '#ffffff' : '#333333',
    duration: 0.5,
    ease: 'power2.inOut'
  });
  
  // Animate links
  gsap.to('a', {
    color: isDarkMode ? '#64b5f6' : '#1976d2',
    duration: 0.5,
    ease: 'power2.inOut'
  });
  
  // Add a flash of light/dark
  const flashOverlay = document.createElement('div');
  flashOverlay.style.position = 'fixed';
  flashOverlay.style.top = '0';
  flashOverlay.style.left = '0';
  flashOverlay.style.width = '100%';
  flashOverlay.style.height = '100%';
  flashOverlay.style.backgroundColor = isDarkMode ? '#ffffff' : '#000000';
  flashOverlay.style.zIndex = '9999';
  flashOverlay.style.opacity = '0';
  document.body.appendChild(flashOverlay);
  
  gsap.to(flashOverlay, {
    opacity: 0.1,
    duration: 0.1,
    ease: 'power1.in',
    onComplete: () => {
      gsap.to(flashOverlay, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        ease: 'power1.out',
        onComplete: () => {
          document.body.removeChild(flashOverlay);
        }
      });
    }
  });
}

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

function initSmoothScrolling() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      
      if (gsapLoaded) {
        // Use GSAP for smoother scrolling with easing
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: headerOffset
          },
          ease: "power3.inOut"
        });
      } else {
        // Fallback to native smooth scrolling
        window.scrollTo({
          top: window.pageYOffset + offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================================================
// MICRO-INTERACTIONS
// ============================================================================

function initMicroInteractions() {
  // Button hover effects
  const buttons = document.querySelectorAll('button, .btn, input[type="submit"]');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if (gsapLoaded) {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power1.out'
        });
      } else {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s ease';
      }
    });
    
    button.addEventListener('mouseleave', () => {
      if (gsapLoaded) {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: 'power1.in'
        });
      } else {
        button.style.transform = 'scale(1)';
      }
    });
    
    // Click ripple effect
    button.addEventListener('click', (e) => {
      if (!supportsAnimation()) return;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      
      // Position the ripple where clicked
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size/2}px`;
      ripple.style.top = `${e.clientY - rect.top - size/2}px`;
      
      button.appendChild(ripple);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        button.removeChild(ripple);
      }, 600);
    });
  });
  
  // Form input animations
  const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
  formInputs.forEach(input => {
    // Label float animation
    input.addEventListener('focus', () => {
      const label = input.previousElementSibling;
      if (label && label.tagName === 'LABEL') {
        if (gsapLoaded) {
          gsap.to(label, {
            y: -20,
            scale: 0.85,
            color: '#1976d2',
            duration: 0.3,
            ease: 'power2.out'
          });
        } else {
          label.style.transform = 'translateY(-20px) scale(0.85)';
          label.style.color = '#1976d2';
          label.style.transition = 'transform 0.3s, color 0.3s';
        }
      }
    });
    
    input.addEventListener('blur', () => {
      const label = input.previousElementSibling;
      if (label && label.tagName === 'LABEL' && !input.value) {
        if (gsapLoaded) {
          gsap.to(label, {
            y: 0,
            scale: 1,
            color: '#666',
            duration: 0.3,
            ease: 'power2.in'
          });
        } else {
          label.style.transform = 'translateY(0) scale(1)';
          label.style.color = '#666';
        }
      }
    });
  });
  
  // Links hover effect
  const navLinks = document.querySelectorAll('nav a, .menu a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (gsapLoaded) {
        gsap.to(link, {
          y: -2,
          duration: 0.2,
          ease: 'power1.out'
        });
      } else {
        link.style.transform = 'translateY(-2px)';
        link.style.transition = 'transform 0.2s ease';
      }
    });
    
    link.addEventListener('mouseleave', () => {
      if (gsapLoaded) {
        gsap.to(link, {
          y: 0,
          duration: 0.2,
          ease: 'power1.in'
        });
      } else {
        link.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Social media icon animation
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      if (gsapLoaded) {
        gsap.to(icon, {
          rotation: 360,
          scale: 1.2,
          duration: 0.5,
          ease: 'back.out(1.7)'
        });
      } else {
        icon.style.transform = 'rotate(360deg) scale(1.2)';
        icon.style.transition = 'transform 0.5s ease';
      }
    });
    
    icon.addEventListener('mouseleave', () => {
      if (gsapLoaded) {
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)'
        });
      } else {
        icon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });
}

// ============================================================================
// PAGE TRANSITIONS
// ============================================================================

function initPageTransitions() {
  if (!gsapLoaded) return;
  
  // Create page transition overlay if it doesn't exist
  let transitionOverlay = document.querySelector('.page-transition-overlay');
  if (!transitionOverlay) {
    transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('page-transition-overlay');
    transitionOverlay.style.position = 'fixed';
    transitionOverlay.style.top = '0';
    transitionOverlay.style.left = '0';
    transitionOverlay.style.width = '100%';
    transitionOverlay.style.height = '100%';
    transitionOverlay.style.backgroundColor = '#000';
    transitionOverlay.style.zIndex = '9999';
    transitionOverlay.style.opacity = '0';
    transitionOverlay.style.pointerEvents = 'none';
    document.body.appendChild(transitionOverlay);
  }
  
  // Initial page load animation
  gsap.fromTo('.hero-section', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
  );
  
  gsap.fromTo('.hero-text h1', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.5 }
  );
  
  gsap.fromTo('.hero-text p', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.7 }
  );
  
  // Staggered appearance for grid items
  gsap.fromTo('.grid-item', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.8 }
  );
  
  // Handle internal link navigation with transitions
  document.querySelectorAll('a:not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])').forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href');
        
        // Animate overlay
        gsap.to(transitionOverlay, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            window

