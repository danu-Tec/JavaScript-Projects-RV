document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      if (!name || !email || !message) {
        showMessage('Please fill in all fields.', 'danger');
        return;
      }
  
      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'warning');
        return;
      }
  
      // Simulate message sending (e.g., via API)
      showMessage(Thank you, ${name}! Your message has been sent., 'success');
      contactForm.reset();
    });
  
    // Simple alert/feedback function using Bootstrap classes
    function showMessage(message, type = 'info') {
      let existingAlert = document.querySelector('.form-alert');
      if (existingAlert) {
        existingAlert.remove();
      }
  
      const alert = document.createElement('div');
      alert.className = alert alert-${type} form-alert mt-3;
      alert.textContent = message;
  
      contactForm.appendChild(alert);
  
      // Auto-remove after 5 seconds
      setTimeout(() => alert.remove(), 5000);
    }
  });
  // Handle gallery image modal
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('data-bs-src');
      document.getElementById('modalImage').src = src;
    });
  });