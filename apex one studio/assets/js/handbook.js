// Handbook Navigation and Interaction

document.addEventListener('DOMContentLoaded', () => {
    initHandbookNavigation();
    initSmoothScrolling();
    applyGlassCardEffects();
    initializeTheme();
    initializeScrollToTop();
});

// Initialize handbook navigation
function initHandbookNavigation() {
    const navLinks = document.querySelectorAll('.handbook-nav-link');
    const sections = document.querySelectorAll('.handbook-section');

    // Set first section as active by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }

    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll to section on mobile
                if (window.innerWidth < 992) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Handle scroll-based navigation (for desktop)
    if (window.innerWidth >= 992) {
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
    
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Initialize smooth scrolling for in-page links
function initSmoothScrolling() {
    // Get URL hash if any and scroll to that section
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            // Activate the section
            document.querySelectorAll('.handbook-section').forEach(s => s.classList.remove('active'));
            targetSection.classList.add('active');
            
            // Activate the nav link
            document.querySelectorAll('.handbook-nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector(`.handbook-nav-link[href="${window.location.hash}"]`).classList.add('active');
            
            // Scroll to it after a slight delay
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }
    }
}

// Apply card hover effects
function applyGlassCardEffects() {
    const cards = document.querySelectorAll('.glass-effect');
    
    cards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
}

// Theme management for handbook
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true); // true = light mode
    }
    
    // Add click event to theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle theme class on body
            document.body.classList.toggle('light-theme');
            
            // Check if light theme is active after toggling
            const isLightTheme = document.body.classList.contains('light-theme');
            
            // Update the icon
            updateThemeIcon(isLightTheme);
            
            // Save theme preference to localStorage
            localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        });
    }
}

// Helper function to update theme icon
function updateThemeIcon(isLightTheme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        if (isLightTheme) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// Initialize scroll to top button
function initializeScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top when clicked
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
