// ==========================================
// PORTFOLIO TABS — Switch between tab panes
// ==========================================

const tabBtns  = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all
    tabBtns.forEach(b  => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));

    // Activate clicked
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
