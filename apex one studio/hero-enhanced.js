// Enhanced Hero Animation JS

document.addEventListener('DOMContentLoaded', function() {
    // Check if the elements exist
    const counters = document.querySelectorAll('.stat-counter');
    if (!counters.length) return;
    
    // Intersection Observer for triggering animations when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the counter animation
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const interval = duration / target;
                
                const timer = setInterval(() => {
                    count += 1;
                    counter.textContent = count;
                    
                    if (count >= target) {
                        clearInterval(timer);
                        counter.textContent = target;
                    }
                }, interval);
                
                // Unobserve after triggering
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all stat counters
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    // Tech stack icon hover animation
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-10px)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });
    
    // Add subtle animation to the floating badges
    const badges = document.querySelectorAll('.floating-badge');
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.5}s`;
    });
});
