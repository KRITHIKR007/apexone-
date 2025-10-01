// Pricing tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const pricingTabs = document.querySelectorAll('.pricing-tab');
    const pricingContents = document.querySelectorAll('.pricing-content');
    
    if (pricingTabs.length > 0) {
        pricingTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                
                // Deactivate all tabs
                pricingTabs.forEach(function(t) {
                    t.classList.remove('active');
                });
                
                // Activate clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                pricingContents.forEach(function(content) {
                    content.classList.remove('active');
                });
                
                // Show target content
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});
