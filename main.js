// nav background on scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });

// mobile menu
const burger = document.getElementById('burger'), links = document.getElementById('links');
burger.addEventListener('click', () => { burger.classList.toggle('x'); links.classList.toggle('open'); });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('x'); links.classList.remove('open'); }));

// tabs
document.querySelectorAll('.tabs').forEach(t => {
  t.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const body = t.parentElement;
    t.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    body.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.id === b.dataset.t));
  });
});

// counters
const count = el => {
  const to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '';
  const t0 = performance.now(), dur = 1600;
  const step = now => {
    const p = Math.min((now - t0) / dur, 1), v = to * (1 - Math.pow(1 - p, 3));
    el.textContent = v.toFixed(dec) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// reveal on scroll (staggered)
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.max(sibs.indexOf(el), 0) * 80 + 'ms';
    el.classList.add('in');
    el.querySelectorAll('[data-to]').forEach(count);
    io.unobserve(el);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// light / dark theme
const themeBtn = document.getElementById('theme');
const applyTheme = t => {
  document.documentElement.dataset.theme = t;
  themeBtn.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  document.getElementById('theme-color').content = t === 'light' ? '#f5f4ee' : '#0b0d0c';
};
applyTheme(document.documentElement.dataset.theme || 'dark');
themeBtn.addEventListener('click', () => {
  const t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(t);
  try { localStorage.setItem('theme', t); } catch (e) {}
});

document.getElementById('yr').textContent = new Date().getFullYear();
