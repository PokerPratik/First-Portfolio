// ==========================================
// SPLASH SCREEN — progress bar + hide logic
// ==========================================

// Lock scroll while splash is visible
document.body.style.overflow = 'hidden';

// Animate percentage counter in sync with the CSS bar (2.2s bar, 1s delay)
const percentEl = document.getElementById('splashPercent');
const barDuration = 2200; // ms — matches CSS splashLoad duration
const barDelay    = 1000; // ms — matches CSS animation-delay

setTimeout(() => {
  const startTime = performance.now();
  function updatePercent(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / barDuration, 1);
    const pct      = Math.round(progress * 100);
    percentEl.textContent = pct + '%';
    if (progress < 1) {
      requestAnimationFrame(updatePercent);
    } else {
      percentEl.textContent = '100%';
    }
  }
  requestAnimationFrame(updatePercent);
}, barDelay);

window.addEventListener('load', () => {
  // Wait for bar to finish: 2.2s + 1s delay + 0.6s buffer = 3.8s
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    splash.classList.add('hidden');
    // Re-enable scroll after fade-out transition (0.7s)
    setTimeout(() => {
      document.body.style.overflow = '';
      splash.style.display = 'none';
    }, 700);
  }, 3800);
});
