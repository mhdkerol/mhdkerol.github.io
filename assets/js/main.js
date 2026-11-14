// Project filter buttons on the homepage
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('[data-tags]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      cards.forEach((card) => {
        const tags = card.dataset.tags.split(' ');
        card.hidden = !(filter === 'all' || tags.includes(filter));
      });
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
