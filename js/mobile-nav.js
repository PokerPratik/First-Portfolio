// ==========================================
// MOBILE NAV — Hamburger drawer open/close
// ==========================================

const hamburger       = document.getElementById('hamburger');
const mobileNav       = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose  = document.getElementById('mobileNavClose');
const mobileLinks     = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
  mobileNav.classList.add('open');
  mobileNavOverlay.classList.add('open');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileNav.classList.remove('open');
  mobileNavOverlay.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileNavClose.addEventListener('click', closeMenu);
mobileNavOverlay.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
