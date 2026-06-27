// ==========================================
// SCROLL ANIMATIONS
//   1. Skills bar/radial trigger on scroll
//   2. Scroll reveal (data-reveal elements)
//   3. Active nav link highlight on scroll
// ==========================================

// ── 1. Skills animation (trigger when .skills-wrapper enters view) ──
const skillsWrapper = document.querySelector('.skills-wrapper');

if (skillsWrapper) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillsWrapper.classList.add('animate');
        skillsObserver.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });

  skillsObserver.observe(skillsWrapper);
}

// ── 2. Scroll reveal (data-reveal="up/left/right") ──
const revealEls = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el    = entry.target;
      const delay = parseInt(el.getAttribute('data-delay') || 0);
      setTimeout(() => el.classList.add('is-visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── 3. Active nav link highlight ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.navbar a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => navObserver.observe(section));
