// Dedicated tab functionality with no dependencies
(function() {
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', function() {
        console.log("TABS.JS: Initializing isolated tab system");
        
        // Get all tabs and content sections
        const tabs = document.querySelectorAll('.service-tab');
        const contents = document.querySelectorAll('.service-content');
        
        console.log("TABS.JS: Found " + tabs.length + " tabs and " + contents.length + " content sections");
        
        // Function to activate a specific tab
        function activateTab(tabElement) {
            console.log("TABS.JS: Activating tab for ", tabElement.getAttribute('data-target'));
            
            // Get target content ID
            const targetId = tabElement.getAttribute('data-target');
            
            // Deactivate all tabs and hide all content sections
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Activate selected tab
            tabElement.classList.add('active');
            
            // Show target content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
                console.log("TABS.JS: Target content activated");
            } else {
                console.error("TABS.JS: Target content not found: " + targetId);
            }
        }
        
        // Add click event to each tab
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                activateTab(this);
            });
        });
        
        // Initialize first tab
        console.log("TABS.JS: Setting initial tab");
        if (tabs.length > 0) {
            activateTab(tabs[0]);
        }
        
        // Also add direct click handlers to all tabs to ensure they work
        document.addEventListener('click', function(event) {
            const clickedElement = event.target.closest('.service-tab');
            if (clickedElement) {
                event.preventDefault();
                event.stopPropagation();
                activateTab(clickedElement);
            }
        });
        
        console.log("TABS.JS: Tab system initialized");
    });
    
    // Backup initialization - runs after everything else
    window.addEventListener('load', function() {
        console.log("TABS.JS: Running backup initialization");
        const tabs = document.querySelectorAll('.service-tab');
        if (tabs.length > 0) {
            setTimeout(function() {
                console.log("TABS.JS: Forcing first tab activation");
                tabs[0].click();
            }, 500);
        }
    });
})();
