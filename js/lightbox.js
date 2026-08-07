// ==========================================
// LIGHTBOX — Image modal / zoom viewer
// ==========================================

const modal     = document.getElementById('imageModal');
const modalImg  = document.getElementById('modalImg');
const closeBtn  = document.querySelector('.close-modal');
const certImages = document.querySelectorAll('.cert-card img, .edu-logo-img');

// Open modal on cert/edu image click
certImages.forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden';
  });
});

// Close modal helper
function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Close on × button
closeBtn.addEventListener('click', closeModal);

// Close clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
});
