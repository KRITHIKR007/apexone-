/**
 * Theme Debugging Tool - Add to any page to troubleshoot theme issues
 */
(function() {
    console.log('Theme Debugger Starting...');
    
    // Create debug panel
    const debugPanel = document.createElement('div');
    debugPanel.style.cssText = `
        position: fixed;
        bottom: 10px;
        left: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        z-index: 10000;
        max-width: 300px;
        font-size: 12px;
    `;
    
    // Status display
    const statusEl = document.createElement('div');
    debugPanel.appendChild(statusEl);
    
    // Buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '10px';
    
    const lightBtn = createButton('Force Light', () => forceTheme('light'));
    const darkBtn = createButton('Force Dark', () => forceTheme('dark'));
    const resetBtn = createButton('Reset', resetTheme);
    const toggleBtn = createButton('Toggle', toggleDebugPanel);
    
    buttonContainer.appendChild(lightBtn);
    buttonContainer.appendChild(darkBtn);
    buttonContainer.appendChild(resetBtn);
    buttonContainer.appendChild(toggleBtn);
    
    debugPanel.appendChild(buttonContainer);
    
    // Add to page
    document.body.appendChild(debugPanel);
    
    // Initial status update
    updateStatus();
    
    // Update status every second
    setInterval(updateStatus, 1000);
    
    // Helper functions
    function updateStatus() {
        const html = document.documentElement;
        const body = document.body;
        
        const savedTheme = localStorage.getItem('theme') || 'Not set';
        const htmlClass = html.classList.contains('light-theme') ? 'light-theme' : 'no-light-theme';
        const bodyClass = body.classList.contains('light-theme') ? 'light-theme' : 'no-light-theme';
        
        statusEl.innerHTML = `
            <div><strong>LocalStorage:</strong> ${savedTheme}</div>
            <div><strong>HTML Class:</strong> ${htmlClass}</div>
            <div><strong>Body Class:</strong> ${bodyClass}</div>
        `;
    }
    
    function createButton(text, clickHandler) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.style.cssText = `
            background: #333;
            color: white;
            border: 1px solid #555;
            margin-right: 5px;
            padding: 4px 8px;
            border-radius: 3px;
            cursor: pointer;
        `;
        btn.addEventListener('click', clickHandler);
        return btn;
    }
    
    function forceTheme(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('light-theme', theme === 'light');
        document.body.classList.toggle('light-theme', theme === 'light');
        updateStatus();
    }
    
    function resetTheme() {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
        updateStatus();
    }
    
    let panelVisible = true;
    function toggleDebugPanel() {
        panelVisible = !panelVisible;
        statusEl.style.display = panelVisible ? 'block' : 'none';
        buttonContainer.style.display = panelVisible ? 'block' : 'none';
        debugPanel.style.width = panelVisible ? 'auto' : '30px';
        debugPanel.style.height = panelVisible ? 'auto' : '30px';
    }
    
    console.log('Theme Debugger Initialized');
})();
