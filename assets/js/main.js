// Small enhancements: mobile menu, header border on scroll, active nav link, current year.
(function () {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  // Mobile menu
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      })
    );
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Header border once the page scrolls
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Highlight the nav link (or project-page tab) for the section in view
  const links = document.querySelectorAll('[data-spy] a[href^="#"]');
  const targets = Array.from(links)
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if ('IntersectionObserver' in window && targets.length) {
    const byId = new Map(Array.from(links).map((a) => [a.getAttribute('href').slice(1), a]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((l) => l.classList.remove('is-active'));
          const link = byId.get(entry.target.id);
          if (link) {
            link.classList.add('is-active');
            // keep the active tab visible in the horizontally scrolling project-page tab bar
            const bar = link.closest('.toc ul');
            if (bar) bar.scrollLeft = link.offsetLeft - 16;
          }
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    targets.forEach((t) => observer.observe(t));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
