// Project Section Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filtering
    initProjectFilters();
    
    // Initialize project controls (pagination/navigation)
    initProjectControls();
});

function initProjectFilters() {
    const categoryButtons = document.querySelectorAll('.project-category');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (cardCategory === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                }
            });
        });
    });
}

function initProjectControls() {
    // Get control buttons
    const prevButton = document.querySelector('.project-control.prev');
    const nextButton = document.querySelector('.project-control.next');
    
    if (!prevButton || !nextButton) return;
    
    // Add click events
    prevButton.addEventListener('click', function() {
        // Here you would implement previous page/slide logic
        // For now, we'll just trigger a different category for demonstration
        const categories = document.querySelectorAll('.project-category');
        const activeCategory = document.querySelector('.project-category.active');
        
        if (categories.length > 0) {
            let prevIndex = 0;
            
            // Find current active index
            categories.forEach((cat, index) => {
                if (cat === activeCategory) {
                    prevIndex = (index - 1 + categories.length) % categories.length;
                }
            });
            
            // Trigger click on previous category
            categories[prevIndex].click();
        }
    });
    
    nextButton.addEventListener('click', function() {
        // Here you would implement next page/slide logic
        const categories = document.querySelectorAll('.project-category');
        const activeCategory = document.querySelector('.project-category.active');
        
        if (categories.length > 0) {
            let nextIndex = 0;
            
            // Find current active index
            categories.forEach((cat, index) => {
                if (cat === activeCategory) {
                    nextIndex = (index + 1) % categories.length;
                }
            });
            
            // Trigger click on next category
            categories[nextIndex].click();
        }
    });
}
