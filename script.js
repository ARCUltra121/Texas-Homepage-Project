document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        
        if (email !== confirmEmail) {
            event.preventDefault();
            alert('Email addresses do not match. Please check and try again.');
        }
    });
});
