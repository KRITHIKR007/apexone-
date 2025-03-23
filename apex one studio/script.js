const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinksContainer.classList.toggle('active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Intersection Observer for section animations
const sectionElements = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sectionElements.forEach(section => {
    sectionObserver.observe(section);
});

// Page Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Simulate loading time
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1500);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Form validation and animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    // Add success animation
    form.classList.add('success');
    setTimeout(() => {
        form.classList.remove('success');
        form.reset();
    }, 2000);
});

// Initialize card tilt effect
function initTiltEffect() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTiltEffect();
    setupGallery();
    initTestimonialsSlider();
    initInnovatorLines();
    initTouchSupport();
    initFlowLines();
    initInnovatorCards();
    initMinimalCards();
    
    // Initialize service cards click handlers
    initServiceCards();
    
    // Initialize particles
    particlesJS('hero-particles', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            opacity: {
                value: 0.1,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        }
    });

    // Initialize service tabs
    setTimeout(initializeTabs, 100);
    
    // Initialize theme based on localStorage
    initializeTheme();
    
    // Initialize scroll to top button
    initializeScrollToTop();
});

// Add a new function to handle service card interactions
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract service name for analytics or other purposes
            const serviceName = card.querySelector('h3').textContent;
            console.log(`Service selected: ${serviceName}`);
            
            // Redirect to contact section when clicked
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Initialize EmailJS
(function() {
    // Replace with your EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Contact form submission
function sendEmail(e) {
    e.preventDefault();

    const params = {
        to_email: "rkrithik795@gmail.com",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    // Replace with your EmailJS service ID and template ID
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
        .then(function(response) {
            showNotification('Message sent successfully!', 'success');
            document.getElementById('contactForm').reset();
        }, function(error) {
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('EmailJS Error:', error);
        });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <p>${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setupGallery() {
    const rows = document.querySelectorAll('.gallery-row');
    
    rows.forEach(row => {
        // Clone items for infinite scroll
        const items = row.innerHTML;
        row.innerHTML = items + items;
        
        // Add animation delay to items
        const galleryItems = row.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
    });
}

// Optional: Add intersection observer for performance
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        } else {
            entry.target.style.animationPlayState = 'paused';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-row').forEach(row => {
    galleryObserver.observe(row);
});

// Fix for stats animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const value = parseInt(stat.getAttribute('data-value'));
        let current = 0;
        const increment = value / 50; // Adjust speed here
        
        const updateValue = () => {
            if (current < value) {
                current += increment;
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateValue);
            } else {
                stat.textContent = value;
            }
        };
        
        updateValue();
    });
}

// Add to your Intersection Observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Find stats section and observe it
const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Testimonials Slider
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const dotsContainer = document.querySelector('.testimonial-dots');
    
    let currentIndex = 0;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
    
    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        goToSlide(currentIndex);
    });
    
    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        goToSlide(currentIndex);
    });
    
    // Auto-play
    let autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        goToSlide(currentIndex);
    }, 5000);
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            goToSlide(currentIndex);
        }, 5000);
    });
}

function initInnovatorLines() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.connection-line').forEach(line => {
        observer.observe(line);
    });
}

function initTouchSupport() {
    // Check if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.querySelectorAll('.innovator-card').forEach(card => {
            card.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
            });

            card.addEventListener('touchend', function(e) {
                this.classList.remove('touch-active');
            });
        });
    }
}

// Add resize handler for better responsive behavior
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize layout if needed
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.connection-line').forEach(line => {
                line.style.transition = 'none';
                // Reset any position-specific styles
                setTimeout(() => {
                    line.style.transition = '';
                }, 100);
            });
        }
    }, 250);
});

function initFlowLines() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.flow-line').forEach(line => {
        observer.observe(line);
    });
}

function initInnovatorCards() {
    const cards = document.querySelectorAll('.innovator-card');
    
    cards.forEach(card => {
        // Parallax effect for images
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            const image = card.querySelector('.member-image img');
            const decorations = card.querySelectorAll('.corner-decoration');
            
            image.style.transform = `scale(1.1) translate(${x * 10}px, ${y * 10}px)`;
            decorations.forEach(dec => {
                dec.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
            });
        });
        
        // Reset transforms on mouse leave
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.member-image img');
            const decorations = card.querySelectorAll('.corner-decoration');
            
            image.style.transform = '';
            decorations.forEach(dec => {
                dec.style.transform = '';
            });
        });
        
        // Action buttons functionality
        const viewProfileBtn = card.querySelector('.view-profile');
        const connectBtn = card.querySelector('.connect');
        
        if (viewProfileBtn) {
            viewProfileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Add your profile view logic here
                console.log('View Profile clicked');
            });
        }
        
        if (connectBtn) {
            connectBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Add your connect logic here
                connectBtn.innerHTML = '<span>Connected</span><i class="fas fa-check"></i>';
                connectBtn.classList.add('connected');
            });
        }
    });
}

function initMinimalCards() {
    const cards = document.querySelectorAll('.innovator-card');
    
    cards.forEach(card => {
        const image = card.querySelector('.member-image img');
        const info = card.querySelector('.member-info');
        const socialBar = card.querySelector('.social-bar');
        
        // Smooth parallax effect
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            image.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
            info.style.transform = `translateY(0) translate(${x * 5}px, ${y * 5}px)`;
            socialBar.style.transform = `translate(${-x * 5}px, ${-y * 5}px)`;
        });
        
        // Reset transforms
        card.addEventListener('mouseleave', () => {
            image.style.transform = '';
            info.style.transform = '';
            socialBar.style.transform = '';
        });
        
        // Connect button functionality
        const connectBtn = card.querySelector('.connect-btn');
        if (connectBtn) {
            connectBtn.addEventListener('click', () => {
                connectBtn.textContent = 'Connected';
                connectBtn.style.background = 'var(--accent-secondary)';
            });
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add active class to current nav link
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu animation
const navLinksLi = document.querySelectorAll('.nav-links li');
navLinksLi.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
});

// Logo Click Handler
document.querySelector('.logo').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Button Interactions
function initializeButtons() {
    // CTA Buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = button.getAttribute('href');
            if (href) {
                if (href.startsWith('#')) {
                    // Smooth scroll to section
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // External link
                    window.open(href, '_blank');
                }
            }
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Action Buttons in Innovator Cards
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.classList.contains('view-profile') ? 'view' : 'connect';
            const card = btn.closest('.innovator-card');
            const memberId = card.dataset.memberId;
            
            if (action === 'view') {
                // Handle view profile
                const profileUrl = btn.getAttribute('data-profile');
                if (profileUrl) {
                    window.open(profileUrl, '_blank');
                }
            } else {
                // Handle connect button
                if (!btn.classList.contains('connected')) {
                    btn.classList.add('connected');
                    btn.innerHTML = '<i class="fas fa-check"></i> Connected';
                    // You can add API call here to handle the connection
                    showNotification('Connection request sent!', 'success');
                }
            }
        });
    });

    // Social Media Links
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const url = link.getAttribute('href');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Floating Action Buttons
    const fabButtons = document.querySelectorAll('.fab-button');
    fabButtons.forEach(fab => {
        fab.addEventListener('click', () => {
            const action = fab.dataset.action;
            switch (action) {
                case 'top':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'contact':
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'share':
                    if (navigator.share) {
                        navigator.share({
                            title: document.title,
                            url: window.location.href
                        }).catch(console.error);
                    } else {
                        // Fallback for browsers that don't support Web Share API
                        copyToClipboard(window.location.href);
                        showNotification('Link copied to clipboard!', 'success');
                    }
                    break;
            }
        });
    });
}

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Initialize all interactive elements
document.addEventListener('DOMContentLoaded', () => {
    initializeButtons();
    
    // Initialize tooltips if any
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = element.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
            
            setTimeout(() => tooltip.classList.add('show'), 50);
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    
    // Add hover effects for cards
    const cards = document.querySelectorAll('.innovator-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Enhanced form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            const formData = new FormData(contactForm);
            const params = {
                to_email: "rkrithik795@gmail.com",
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
            };

            // Replace with your EmailJS service ID and template ID
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params);
            
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        }
    });
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize EmailJS if configured
if (typeof emailjs !== 'undefined') {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
}

// ULTRA-SIMPLE TAB SYSTEM - No fancy techniques, just pure reliable code
document.addEventListener('DOMContentLoaded', function() {
    // Remove all previous tab initialization functions
    // and replace with this single, simple implementation
    
    console.log("Initializing service tabs with ultra-simple approach");
    
    // Direct selection of all tab elements
    const tabs = document.querySelectorAll('.service-tab');
    
    // Add click listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            console.log('Tab clicked:', this.textContent.trim());
            
            // Get the target content ID from data-target attribute
            const targetId = this.getAttribute('data-target');
            
            if (!targetId) {
                console.error('Tab is missing data-target attribute');
                return;
            }
            
            console.log('Target content ID:', targetId);
            
            // Find the target content element
            const targetContent = document.getElementById(targetId);
            
            if (!targetContent) {
                console.error('Target content not found:', targetId);
                return;
            }
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get all content sections
            const allContent = document.querySelectorAll('.service-content');
            
            // Hide all content sections
            allContent.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Show the target content
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
            
            console.log('Tab switch completed successfully');
        });
    });
    
    // Initialize the first tab as active on page load
    if (tabs.length > 0) {
        // Trigger a click on the first tab to initialize everything
        tabs[0].click();
    }
});

// Remove or comment out the old tab initialization functions to prevent conflicts
// function initializeTabs() { ... }
// function directTabInitialization() { ... }

// Initialize theme functionality
function initializeTheme() {
    console.log("Using theme.js for theme management instead of built-in function");
    // This function is kept for backward compatibility only
    // All theme functionality is now in theme.js
}

function updateThemeIcon(isLightTheme) {
    // This function is kept for backward compatibility only
    // All theme functionality is now in theme.js
}

// Initialize scroll to top button
function initializeScrollToTop() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    if (scrollTopButton) {
        // Show button when user scrolls down
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.style.opacity = '1';
                scrollTopButton.style.visibility = 'visible';
            } else {
                scrollTopButton.style.opacity = '0';
                scrollTopButton.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top on click
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Call theme initialization in the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    
    // Initialize theme functionality
    initializeTheme();
    
    // ...existing code...
});