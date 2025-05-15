// Contact Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Initial state: open first FAQ item
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
    
    // AI Chat Demo
    const chatContainer = document.querySelector('.chat-container');
    const typingIndicator = document.querySelector('.typing-indicator');
    
    if (!chatContainer || !typingIndicator) return;
    
    const messages = [
        {
            text: "Can you tell me more about your AI solutions?",
            type: "user"
        },
        {
            text: "Our AI solutions include chatbots, predictive analytics, and business process automation that can transform how your business operates and engages with customers.",
            type: "bot"
        },
        {
            text: "What makes your approach different?",
            type: "user"
        },
        {
            text: "We combine cutting-edge AI with practical business solutions. Our team focuses on delivering measurable ROI and user-friendly implementations that solve real problems.",
            type: "bot"
        }
    ];
    
    let currentMessageIndex = 0;
    
    // Function to add a new message
    function addMessage(messageData) {
        // Hide typing indicator
        typingIndicator.style.display = 'none';
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', messageData.type);
        
        let messageHTML = '';
        
        if (messageData.type === 'bot') {
            messageHTML += `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
            `;
        }
        
        messageHTML += `
            <div class="message-content">
                <p>${messageData.text}</p>
            </div>
        `;
        
        messageDiv.innerHTML = messageHTML;
        
        // Insert before typing indicator
        chatContainer.insertBefore(messageDiv, typingIndicator);
        
        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    // Function to show typing and then add message
    function showTypingThenMessage(messageData, delay) {
        if (messageData.type === 'bot') {
            typingIndicator.style.display = 'flex';
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            setTimeout(() => {
                addMessage(messageData);
            }, delay);
        } else {
            addMessage(messageData);
        }
    }
    
    // Start demo conversation after a delay
    setTimeout(() => {
        const cycleConversation = () => {
            if (currentMessageIndex < messages.length) {
                const message = messages[currentMessageIndex];
                showTypingThenMessage(message, message.type === 'bot' ? 1800 : 0);
                currentMessageIndex++;
                
                // Schedule next message
                const nextDelay = message.type === 'bot' ? 4000 : 2000;
                setTimeout(cycleConversation, nextDelay);
            }
        };
        
        cycleConversation();
    }, 1000);
    
    // Feature hover effects
    const aiFeatures = document.querySelectorAll('.ai-feature');
    
    aiFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'translateY(-5px)';
        });
        
        feature.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'translateY(0)';
        });
    });
});
