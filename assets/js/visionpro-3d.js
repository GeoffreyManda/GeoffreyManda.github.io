/**
 * Vision Pro 3D Depth Effects
 * Adds interactive 3D tilt and depth perception to cards
 */

(function() {
    'use strict';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize 3D tilt effect on cards
    function init3DTilt() {
        const cards = document.querySelectorAll('.feature-card, .expertise-area, .update-item, .contact-preview');

        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });
    }

    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        // Calculate mouse position relative to card center
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation angles (max ±8 degrees)
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        // Calculate mouse position as percentage for gradient
        const mouseX = (x / rect.width) * 100;
        const mouseY = (y / rect.height) * 100;

        // Apply 3D transform
        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(20px)
            scale3d(1.02, 1.02, 1.02)
        `;

        // Update CSS variables for gradient effect
        card.style.setProperty('--mouse-x', `${mouseX}%`);
        card.style.setProperty('--mouse-y', `${mouseY}%`);

        // Add enhanced shadow based on tilt
        const shadowX = rotateY * 2;
        const shadowY = -rotateX * 2;
        card.style.boxShadow = `
            ${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(14, 165, 233, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.6)
        `;
    }

    function handleMouseLeave(e) {
        const card = e.currentTarget;

        // Reset transform with smooth transition
        card.style.transform = '';
        card.style.boxShadow = '';
    }

    // Parallax scrolling effect for background layers
    function initParallaxScroll() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    function updateParallax() {
        const scrolled = window.pageYOffset;

        // Parallax for hero gradient
        const heroGradient = document.querySelector('.hero-gradient-bg');
        if (heroGradient) {
            heroGradient.style.transform = `translateY(${scrolled * 0.3}px) translateZ(-50px)`;
        }

        // Subtle parallax for sections
        const sections = document.querySelectorAll('.featured-section, .expertise-section, .recent-section');
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionScroll = scrolled - sectionTop;
            const rate = (index % 2 === 0) ? 0.1 : -0.1;

            if (sectionScroll > -window.innerHeight && sectionScroll < section.offsetHeight) {
                section.style.transform = `translateY(${sectionScroll * rate}px)`;
            }
        });
    }

    // Smooth reveal on scroll
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateZ(0)';
                }
            });
        }, observerOptions);

        // Observe cards and sections
        const elements = document.querySelectorAll('.feature-card, .expertise-area, .update-item');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) translateZ(-20px)';
            el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // Add glass shimmer effect
    function addGlassShimmer() {
        const cards = document.querySelectorAll('.feature-card, .expertise-area, .update-item');

        cards.forEach(card => {
            const shimmer = document.createElement('div');
            shimmer.className = 'glass-shimmer';
            shimmer.style.cssText = `
                position: absolute;
                inset: -100%;
                background: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.3) 50%,
                    transparent 100%
                );
                transform: translateX(-100%) rotate(45deg);
                transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
                z-index: 10;
            `;
            card.appendChild(shimmer);

            card.addEventListener('mouseenter', () => {
                shimmer.style.transform = 'translateX(100%) rotate(45deg)';
            });

            card.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    shimmer.style.transform = 'translateX(-100%) rotate(45deg)';
                }, 100);
            });
        });
    }

    // Initialize all effects when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEffects);
    } else {
        initEffects();
    }

    function initEffects() {
        init3DTilt();
        initParallaxScroll();
        initScrollReveal();
        addGlassShimmer();
    }
})();
