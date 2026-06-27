// ==========================================
// EMAILJS — Contact form submission
// ==========================================

emailjs.init('xmh9Oocmf8ZYuDljF');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('service_7fi1qz5', 'template_66jmzqe', this)
    .then(
      function () {
        alert('✅ Message sent successfully!');
        document.getElementById('contact-form').reset();
      },
      function (error) {
        console.error('EmailJS error:', error);
        alert('❌ Failed: ' + error.text);
      }
    );
});
