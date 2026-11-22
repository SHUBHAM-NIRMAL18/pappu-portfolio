// Language switcher: English text lives in the HTML, other languages in I18N.
const I18N = {
  sv: {}
};
const META = {
  en: { title: 'Pappu Sah — Backend, Data & Automation Engineer' },
  sv: { title: 'Pappu Sah — Backend-, data- och automationsingenjör' }
};

const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; });
const langBtns = document.querySelectorAll('.lang button');

function setLang(lang) {
  if (!META[lang]) lang = 'en';
  const dict = I18N[lang] || {};
  i18nEls.forEach(el => {
    const t = lang === 'en' ? null : dict[el.dataset.i18n];
    el.innerHTML = t != null ? t : el.dataset.en;
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  langBtns.forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on);
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
setLang(saved || ((navigator.language || '').toLowerCase().startsWith('sv') ? 'sv' : 'en'));
