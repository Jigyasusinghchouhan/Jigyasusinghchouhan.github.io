/**
 * @fileoverview Production-ready Portfolio Website JavaScript
 * @author Jigyasu Singh Chouhan
 * @version 2.0.0
 * @description Modular, performance-optimized class-based architecture
 */

'use strict';

// ==========================================
// Utility: Touch Device Detection
// ==========================================
const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
};

// ==========================================
// Class: Navigation Handler
// ==========================================
/**
 * Manages navigation menu interactions and active link highlighting
 */
class Navigation {
  /**
   * @param {string} hamburgerSelector - Hamburger menu button selector
   * @param {string} navMenuSelector - Navigation menu selector
   * @param {string} navLinkSelector - Navigation link selector
   */
  constructor(hamburgerSelector, navMenuSelector, navLinkSelector) {
    this.hamburger = document.querySelector(hamburgerSelector);
    this.navMenu = document.querySelector(navMenuSelector);
    this.navLinks = document.querySelectorAll(navLinkSelector);
    this.sections = document.querySelectorAll('section[id]');
    
    if (this.hamburger && this.navMenu) {
      this.init();
    }
  }

  /**
   * Initialize navigation functionality
   */
  init() {
    this.setupHamburgerMenu();
    this.setupSmoothScroll();
    this.updateActiveLink();
  }

  /**
   * Setup hamburger menu toggle
   */
  setupHamburgerMenu() {
    this.hamburger.addEventListener('click', () => {
      this.toggleMenu();
    });

    // Close menu when clicking on links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  /**
   * Toggle mobile menu
   */
  toggleMenu() {
    const isActive = this.hamburger?.classList.toggle('active');
    this.navMenu?.classList.toggle('active');
    
    // Update aria-expanded for accessibility
    if (this.hamburger) {
      this.hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }
  }

  /**
   * Close mobile menu
   */
  closeMenu() {
    this.hamburger?.classList.remove('active');
    this.navMenu?.classList.remove('active');
    
    // Update aria-expanded for accessibility
    if (this.hamburger) {
      this.hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  /**
   * Setup smooth scrolling for anchor links
   */
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Update active navigation link based on scroll position
   */
  updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    this.sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }
}

// ==========================================
// Class: Consolidated Scroll Handler
// ==========================================
/**
 * Manages all scroll-based effects with optimized RAF throttling
 */
class ScrollHandler {
  /**
   * @param {Object} options - Configuration options
   */
  constructor(options = {}) {
    this.navbar = document.querySelector(options.navbarSelector || '#navbar');
    this.backToTopButton = document.querySelector(options.backToTopSelector || '#back-to-top');
    this.navigation = options.navigation;
    
    this.ticking = false;
    this.lastScrollTop = 0;
    
    this.init();
  }

  /**
   * Initialize scroll handler with passive listeners
   */
  init() {
    window.addEventListener('scroll', () => this.requestTick(), { passive: true });
    this.setupBackToTop();
  }

  /**
   * Request animation frame for scroll handling
   */
  requestTick() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.handleScroll();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  /**
   * Handle all scroll-based updates
   */
  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Update navbar scroll effect
    this.updateNavbar(scrollTop);
    
    // Update back-to-top button visibility
    this.updateBackToTop(scrollTop);
    
    // Update active navigation link
    if (this.navigation) {
      this.navigation.updateActiveLink();
    }
    
    this.lastScrollTop = scrollTop;
  }

  /**
   * Update navbar scroll styling
   * @param {number} scrollTop - Current scroll position
   */
  updateNavbar(scrollTop) {
    if (!this.navbar) return;
    
    if (scrollTop > 100) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  /**
   * Update back-to-top button visibility
   * @param {number} scrollTop - Current scroll position
   */
  updateBackToTop(scrollTop) {
    if (!this.backToTopButton) return;
    
    if (scrollTop > 500) {
      this.backToTopButton.style.opacity = '1';
      this.backToTopButton.style.pointerEvents = 'auto';
    } else {
      this.backToTopButton.style.opacity = '0';
      this.backToTopButton.style.pointerEvents = 'none';
    }
  }

  /**
   * Setup back-to-top button click handler
   */
  setupBackToTop() {
    if (!this.backToTopButton) return;
    
    this.backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ==========================================
// Class: Typing Animation
// ==========================================
/**
 * Manages hero section typing animation effect
 */
class TypingAnimation {
  /**
   * @param {string} selector - Target element selector
   * @param {Array<string>} phrases - Phrases to cycle through
   */
  constructor(selector, phrases) {
    this.element = document.querySelector(selector);
    this.phrases = phrases;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.typingSpeed = 100;
    this.timeoutId = null;
    
    if (this.element) {
      this.start();
    }
  }

  /**
   * Start typing animation
   */
  start() {
    this.timeoutId = setTimeout(() => this.type(), 1000);
  }

  /**
   * Type or delete characters
   */
  type() {
    const currentPhrase = this.phrases[this.phraseIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentPhrase.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 50;
    } else {
      this.element.textContent = currentPhrase.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100;
    }
    
    // Check if phrase is complete
    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      this.typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.typingSpeed = 500;
    }
    
    this.timeoutId = setTimeout(() => this.type(), this.typingSpeed);
  }

  /**
   * Cleanup and stop animation
   */
  destroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}

// ==========================================
// Class: Animation Observer
// ==========================================
/**
 * Manages scroll-triggered animations using IntersectionObserver
 */
class AnimationObserver {
  /**
   * @param {Object} options - Observer configuration
   */
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    };
    
    this.observer = null;
    this.init();
  }

  /**
   * Initialize IntersectionObserver
   */
  init() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.options
    );
    
    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
      this.observer.observe(element);
    });
  }

  /**
   * Handle intersection changes
   * @param {Array<IntersectionObserverEntry>} entries - Observed entries
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        
        // Unobserve after animation for performance
        this.observer.unobserve(entry.target);
      }
    });
  }

  /**
   * Cleanup observer
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// ==========================================
// Class: Skill Bars Animation
// ==========================================
/**
 * Manages skill progress bar animations
 */
class SkillBars {
  /**
   * @param {string} triggerSelector - Element that triggers animation when visible
   */
  constructor(triggerSelector) {
    this.trigger = document.querySelector(triggerSelector);
    this.animated = false;
    
    if (this.trigger) {
      this.init();
    }
  }

  /**
   * Initialize skill bars observer
   */
  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animated) {
            this.animate();
            this.animated = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    observer.observe(this.trigger);
  }

  /**
   * Animate skill progress bars
   */
  animate() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    skillBars.forEach((bar, index) => {
      const width = bar.getAttribute('data-width');
      
      if (width) {
        setTimeout(() => {
          bar.style.width = width + '%';
        }, index * 100);
      }
    });
  }
}

// ==========================================
// Class: Project Filter
// ==========================================
/**
 * Manages project filtering by category
 */
class ProjectFilter {
  /**
   * @param {string} buttonSelector - Filter button selector
   * @param {string} cardSelector - Project card selector
   */
  constructor(buttonSelector, cardSelector) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.cards = document.querySelectorAll(cardSelector);
    
    if (this.buttons.length > 0 && this.cards.length > 0) {
      this.init();
    }
  }

  /**
   * Initialize filter functionality
   */
  init() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.filter(button);
      });
    });
  }

  /**
   * Filter projects by category
   * @param {HTMLElement} button - Clicked filter button
   */
  filter(button) {
    // Update active button state
    this.buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    this.cards.forEach(card => {
      if (filter === 'all') {
        this.showCard(card);
      } else {
        const categories = card.getAttribute('data-category') || '';
        
        if (categories.includes(filter)) {
          this.showCard(card);
        } else {
          this.hideCard(card);
        }
      }
    });
  }

  /**
   * Show card with smooth transition
   * @param {HTMLElement} card - Card to show
   */
  showCard(card) {
    card.classList.remove('hidden');
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, 10);
  }

  /**
   * Hide card with smooth transition
   * @param {HTMLElement} card - Card to hide
   */
  hideCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    setTimeout(() => {
      card.classList.add('hidden');
    }, 300);
  }
}

// ==========================================
// Class: 3D Tilt Effect (Desktop Only)
// ==========================================
/**
 * Manages 3D tilt effect for cards
 */
class TiltEffect {
  /**
   * @param {string} selector - Card selector
   * @param {number} maxTilt - Maximum tilt angle in degrees
   */
  constructor(selector, maxTilt = 10) {
    this.cards = document.querySelectorAll(selector);
    this.maxTilt = maxTilt;
    this.isTouch = isTouchDevice();
    
    // Only initialize on desktop
    if (!this.isTouch && this.cards.length > 0) {
      this.init();
    }
  }

  /**
   * Initialize tilt effect for all cards
   */
  init() {
    this.cards.forEach(card => {
      card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
    });
  }

  /**
   * Handle mouse move over card
   * @param {MouseEvent} e - Mouse event
   * @param {HTMLElement} card - Card element
   */
  handleMouseMove(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation with max tilt limit
    const rotateX = ((y - centerY) / centerY) * this.maxTilt;
    const rotateY = ((centerX - x) / centerX) * this.maxTilt;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  }

  /**
   * Handle mouse leave from card
   * @param {HTMLElement} card - Card element
   */
  handleMouseLeave(card) {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  }
}

// ==========================================
// Class: Custom Cursor Glow (Desktop Only)
// ==========================================
/**
 * Manages custom cursor glow effect
 */
class CursorGlow {
  /**
   * @param {string} selector - Cursor glow element selector
   */
  constructor(selector) {
    this.cursorGlow = document.querySelector(selector);
    this.isTouch = isTouchDevice();
    this.ticking = false;
    this.mouseX = 0;
    this.mouseY = 0;
    
    // Only initialize on desktop
    if (!this.isTouch && this.cursorGlow) {
      this.init();
    }
  }

  /**
   * Initialize cursor glow tracking
   */
  init() {
    document.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
    document.addEventListener('mouseleave', () => this.handleMouseLeave());
  }

  /**
   * Handle mouse move
   * @param {MouseEvent} e - Mouse event
   */
  handleMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updatePosition();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  /**
   * Update cursor glow position
   */
  updatePosition() {
    if (this.cursorGlow) {
      this.cursorGlow.style.left = this.mouseX + 'px';
      this.cursorGlow.style.top = this.mouseY + 'px';
      this.cursorGlow.style.opacity = '1';
    }
  }

  /**
   * Handle mouse leave from document
   */
  handleMouseLeave() {
    if (this.cursorGlow) {
      this.cursorGlow.style.opacity = '0';
    }
  }
}

// ==========================================
// Class: Contact Form Handler
// ==========================================
/**
 * Manages contact form validation and submission
 */
class ContactForm {
  /**
   * @param {string} formSelector - Form selector
   */
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    
    if (this.form) {
      this.init();
    }
  }

  /**
   * Initialize form handling
   */
  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  handleSubmit(e) {
    e.preventDefault();
    
    // Clear previous errors
    this.clearErrors();
    
    // Get form data
    const formData = new FormData(this.form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // Validate form
    if (!this.validate(data)) {
      return;
    }
    
    // Create mailto link
    this.sendEmail(data);
  }

  /**
   * Validate form data
   * @param {Object} data - Form data
   * @return {boolean} - Validation result
   */
  validate(data) {
    let isValid = true;
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
      this.showError('name', 'Please enter a valid name (minimum 2 characters)');
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      this.showError('email', 'Please enter a valid email address');
      isValid = false;
    }
    
    // Validate subject
    if (!data.subject || data.subject.trim().length < 3) {
      this.showError('subject', 'Please enter a subject (minimum 3 characters)');
      isValid = false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
      this.showError('message', 'Please enter a message (minimum 10 characters)');
      isValid = false;
    }
    
    return isValid;
  }

  /**
   * Show validation error for field
   * @param {string} fieldName - Field name
   * @param {string} message - Error message
   */
  showError(fieldName, message) {
    const field = this.form.querySelector(`[name="${fieldName}"]`);
    
    if (!field) return;
    
    // Add error class to field
    field.classList.add('error');
    
    // Create and insert error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
  }

  /**
   * Clear all error messages
   */
  clearErrors() {
    // Remove error classes
    this.form.querySelectorAll('.error').forEach(field => {
      field.classList.remove('error');
    });
    
    // Remove error messages
    this.form.querySelectorAll('.error-message').forEach(msg => {
      msg.remove();
    });
  }

  /**
   * Send email via mailto
   * @param {Object} data - Form data
   */
  sendEmail(data) {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:jigyashu2001@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success feedback
    this.showSuccess();
    
    // Reset form after short delay
    setTimeout(() => {
      this.form.reset();
    }, 1000);
  }

  /**
   * Show success message
   */
  showSuccess() {
    const submitBtn = this.form.querySelector('button[type="submit"]');
    
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Opening email client...';
      submitBtn.style.backgroundColor = '#10b981';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
      }, 2000);
    }
  }
}

// ==========================================
// Application Initialization
// ==========================================
/**
 * Initialize all application modules
 */
class App {
  constructor() {
    this.navigation = null;
    this.scrollHandler = null;
    this.typingAnimation = null;
    this.animationObserver = null;
    this.skillBars = null;
    this.projectFilter = null;
    this.tiltEffect = null;
    this.cursorGlow = null;
    this.contactForm = null;
  }

  /**
   * Initialize all components
   */
  init() {
    // Initialize Navigation
    this.navigation = new Navigation('#hamburger', '#nav-menu', '.nav-link');
    
    // Initialize Scroll Handler (with navigation reference for active link updates)
    this.scrollHandler = new ScrollHandler({
      navbarSelector: '#navbar',
      backToTopSelector: '#back-to-top',
      navigation: this.navigation
    });
    
    // Initialize Typing Animation
    this.typingAnimation = new TypingAnimation('#typing-text', [
      'DevOps Engineer',
      'Cloud Architect',
      'Kubernetes Expert',
      'CI/CD Specialist',
      'Infrastructure Automation',
      'Platform Engineer'
    ]);
    
    // Initialize Animation Observer
    this.animationObserver = new AnimationObserver({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Initialize Skill Bars
    this.skillBars = new SkillBars('.about-skills');
    
    // Initialize Project Filter
    this.projectFilter = new ProjectFilter('.filter-btn', '.project-card');
    
    // Initialize Tilt Effect (Desktop Only)
    this.tiltEffect = new TiltEffect('.skill-card, .project-card', 10);
    
    // Initialize Cursor Glow (Desktop Only)
    this.cursorGlow = new CursorGlow('#cursor-glow');
    
    // Initialize Contact Form
    this.contactForm = new ContactForm('#contact-form');
    
    // Page load animation
    this.pageLoadAnimation();
    
    // Console branding
    this.consoleBranding();
  }

  /**
   * Page load fade-in animation
   */
  pageLoadAnimation() {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  }

  /**
   * Console branding message
   */
  consoleBranding() {
    console.log('%c👋 Hello, Developer!', 'color: #00F5D4; font-size: 20px; font-weight: bold;');
    console.log('%cLooking to collaborate? Reach out at jigyashu2001@gmail.com', 'color: #7C3AED; font-size: 14px;');
  }

  /**
   * Cleanup all components (for SPA navigation if needed)
   */
  destroy() {
    this.typingAnimation?.destroy();
    this.animationObserver?.destroy();
  }
}

// ==========================================
// Initialize Application
// ==========================================
let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new App();
  app.init();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Navigation,
    ScrollHandler,
    TypingAnimation,
    AnimationObserver,
    SkillBars,
    ProjectFilter,
    TiltEffect,
    CursorGlow,
    ContactForm,
    App
  };
}
