// nav background on scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });

// mobile menu
const burger = document.getElementById('burger'), links = document.getElementById('links');
burger.addEventListener('click', () => { burger.classList.toggle('x'); links.classList.toggle('open'); });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('x'); links.classList.remove('open'); }));

document.getElementById('yr').textContent = new Date().getFullYear();
