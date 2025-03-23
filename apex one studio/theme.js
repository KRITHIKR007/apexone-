/**
 * Ultra-Simple Theme Manager - Super reliable light/dark theme toggle
 */
(function() {
    // Run theme init immediately
    initTheme();
    
    // Initialize theme functionality
    function initTheme() {
        console.log("Theme manager initializing");
        
        // Apply current theme
        applyThemeFromStorage();
        
        // Add click handler to theme toggle button
        document.addEventListener('click', function(e) {
            // Use event delegation to catch any theme toggle button clicks
            const toggleButton = e.target.closest('.theme-toggle');
            if (toggleButton) {
                console.log('Theme toggle clicked');
                e.preventDefault();
                toggleTheme();
            }
        });
        
        // Make sure theme is applied after DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            applyThemeFromStorage();
            console.log('Theme reinforced after DOM loaded');
        });
    }
    
    // Get theme from localStorage and apply it
    function applyThemeFromStorage() {
        const isLightTheme = localStorage.getItem('theme') === 'light';
        console.log('Applying theme from storage:', isLightTheme ? 'light' : 'dark');
        
        // Apply to document element
        document.documentElement.classList.toggle('light-theme', isLightTheme);
        
        // Apply to body if available
        if (document.body) {
            document.body.classList.toggle('light-theme', isLightTheme);
        }
        
        // Update the toggle button icon
        updateIcon(isLightTheme);
    }
    
    // Toggle between light and dark theme
    function toggleTheme() {
        // Check current theme
        const isCurrentlyLight = document.documentElement.classList.contains('light-theme');
        console.log('Current theme before toggle:', isCurrentlyLight ? 'light' : 'dark');
        
        // Set the opposite theme in localStorage
        const newTheme = isCurrentlyLight ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        console.log('New theme set in localStorage:', newTheme);
        
        // Apply the new theme
        applyThemeFromStorage();
    }
    
    // Update theme toggle icon
    function updateIcon(isLightTheme) {
        const icons = document.querySelectorAll('.theme-toggle i');
        icons.forEach(icon => {
            if (isLightTheme) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }
})();
