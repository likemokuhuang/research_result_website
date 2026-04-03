// ── Smooth scroll navigation ──
document.querySelectorAll('.nav-links a[data-target]').forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('data-target');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Animate bar chart fills on page load ──
function animateBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const targets = ['82%', '65%', '74%', '48%'];
  bars.forEach((bar, i) => {
    setTimeout(() => {
      bar.style.width = targets[i] || '0%';
    }, 200 + i * 100);
  });
}

// ── Run on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  animateBars();
});
