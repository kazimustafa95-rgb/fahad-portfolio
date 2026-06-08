// ── PROJECT FILTER ──
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.25s ease';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── SMOOTH SCROLL FOR ANCHOR LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── FADE-IN ANIMATION ──
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
