// Language switcher: English text lives in the HTML, other languages in I18N.
const I18N = {
  sv: {
    "nav.impact": "Resultat",
    "nav.exp": "Erfarenhet",
    "nav.proj": "Projekt",
    "nav.skills": "Kompetens",
    "nav.contact": "Kontakt",
    "hero.tag": "<span class=\"dot\"></span> Söker roller i Sverige · Göteborg",
    "hero.h1": "Jag bygger systemen som <em>i det tysta</em> får e‑handeln att växa.",
    "hero.lead": "Pappu Sah — backendutvecklare, data- och automationsingenjör samt specialist på webbskrapning. Över 7 års erfarenhet av Python, SQL, skrapare, pipelines och Google Ads-automation.",
    "hero.cta": "Hör av dig <span>→</span>",
    "hero.cv": "Ladda ner CV",
    "imp.label": "01 — Resultat",
    "imp.h2": "Resultat, inte bara <em>kodrepon</em>.",
    "imp.s1": "Månatlig omsättning, genom bättre datakvalitet, logistikautomation och kundverktyg.",
    "imp.s2": "Ökning av dagliga klick i Google Ads — 400 000 visningar per dag med samma budget.",
    "imp.s3": "Aktiva artiklar hanterade i flöden, ordrar och integrationer med leveranspartner.",
    "imp.s4": "Drifttid på Ubuntu/Linux-servrar genom att lösa MySQL-lås, minnesproblem och flaskhalsar i frågor.",
    "imp.a1": "Större delen av min karriär har varit på <strong>Honest Forwarder Technology</strong>, där jag har arbetat med nästan alla delar av verksamheten — från pipelines som håller produktdata ren och aktuell till automationen som visar rätt produkter för rätt kunder på Google. Den aktiva katalogen växte mer än <strong>tre gånger</strong> med <strong>36 nya segmentledare</strong>, och nya leverantörer kommer nu igång på timmar i stället för veckor.",
    "imp.a2": "Nu vill jag ta med mig det till ett team i Sverige — en strukturerad och tekniskt seriös arbetsplats som bygger saker som verkligen spelar roll.",
    "exp.label": "02 — Erfarenhet",
    "exp.h2": "Där jag har <em>arbetat</em>.",
    "exp.hf.role": "IT-chef / data- och automationsingenjör",
    "exp.tab2": "Annonsautomation",
    "exp.tab3": "E‑handel",
    "exp.tab4": "Webbskrapning",
    "exp.tab5": "Team &amp; infrastruktur",
    "exp.1a": "Byggde en Power BI-dashboard som gav ledningen tydlig överblick över månatliga intäktstrender och produktprestanda.",
    "exp.1b": "Arbetade med Databricks för databehandling och pipeline-experiment på Lakehouse-arkitekturen.",
    "exp.1c": "Utformade och underhöll MySQL-scheman, indexeringsstrategier och rensningsskript för över 330 000 aktiva produkter.",
    "exp.2a": "Ökade dagliga klick med över 230 % och nådde 400 000 visningar per dag genom att bygga om kampanjsegmenteringen med NLP-klassificering och linjär regression.",
    "exp.2b": "Byggde <strong>Fighter Program</strong> — ett verktyg på Google Ads API som klassificerar produkter med NLP, analyserar dagliga rapporter och roterar sortimentet automatiskt.",
    "exp.2c": "Samlade in konkurrenters priser via Zenserp API och införde dynamisk prissättning för att höja CTR på Google Shopping.",
    "exp.3a": "Ledde backend-automationen för hela e‑handelsflödet: produktflöden, orderhantering och integrationer med leveranspartner för över 330 000 artiklar.",
    "exp.3b": "Byggde ett eget ordersystem på Google Sheets och e-postaviserings-API:er för över 200 aktiva ordrar.",
    "exp.3c": "Integrerade flera leveranspartners API:er för spårning i realtid, automatiska fakturor och förhandsaviseringar till kunder.",
    "exp.3d": "Levererade ett system för volymrekommendationer baserat på regression av historisk fraktdata.",
    "exp.4a": "Utformade ett återanvändbart ramverk för webbskrapning med Scrapy, Selenium, Splash och Zyte för snabb anslutning av nya leverantörer.",
    "exp.4b": "Rensade och berikade flerspråkiga dataset med regex, översättnings-API:er och NLP-baserad nyckelordsmappning.",
    "exp.5a": "Ledde ett litet backend-team — satte prioriteringar, gav tekniskt stöd och gjorde slutlig QA före releaser.",
    "exp.5b": "Förvaltade Ubuntu-servrar på DigitalOcean: CPU- och minnesproblem, zombieprocesser, blockering av botar/IP-adresser och MySQL-lås.",
    "exp.gi.role": "Mjukvaruutvecklare",
    "exp.6a": "Anpassade och byggde ut Odoo ERP-moduler för inköp, fakturering, upphandling och skatteefterlevnad.",
    "exp.6b": "Byggde ett centralt faktureringssystem integrerat med Nepals skattemyndighet (IRD) — momsfakturor i realtid, huvudböcker och revisionsjournaler.",
    "exp.6c": "Effektiviserade rapporteringen av försäljnings- och inköpsordrar med automationsskript i Python.",
    "proj.label": "03 — Utvalda projekt",
    "proj.h2": "Saker jag har <em>levererat</em>.",
    "proj.chip": "Huvudprojekt · ETL",
    "proj.ft.h3": "Category Tracker — komplett ETL-pipeline",
    "proj.ft.p": "Ett modulärt system som samlar in, validerar och publicerar produktdata från externa källor till Google Ads. För att lägga till en ny källa behövs bara kategorier och CSS-selektorer — pipelinen sköter resten.",
    "proj.p1": "Genomsöker alla produkter, följer paginering, tolkar varianter och kategoriserar automatiskt.",
    "proj.p2": "Översätter, normaliserar mått, filtrerar bort irrelevanta annonser och rensar data.",
    "proj.p3": "Schemalagt jobb som håller lagersaldo och priser korrekta varje dag.",
    "proj.p4": "Skapar ett flöde enligt Google Merchant-kraven, direkt tillgängligt i Ads.",
    "proj.c1": "Samlar in kampanjdata via Google Ads API, klassificerar produkter med ML och roterar ut svaga produkter — en viktig drivkraft bakom klickökningen på över 230 %.",
    "proj.c2.h": "Dashboard för försäljningstillväxt",
    "proj.c2": "Interaktiv Power BI-dashboard för månatliga intäkter, kategoriprestanda och logistik-KPI:er, som används för strategiska beslut.",
    "proj.c3.h": "Ordersystem",
    "proj.c3": "Backend integrerad med Google Sheets som ersatte manuell uppföljning av över 200 ordrar, med automatiska statusuppdateringar och synk mot leverans-API:er.",
    "proj.c4.h": "Volymrekommendation",
    "proj.c4": "Regressionsmodeller tränade på historisk vikt- och måttdata som förutsäger fraktvolymer och minskar felbedömningar.",
    "sk.label": "04 — Verktygslåda",
    "sk.h2": "Det jag <em>arbetar</em> med.",
    "sk.lang": "Språk",
    "sk.scr": "Skrapning &amp; API:er",
    "sk.mkt": "Marknadsteknik",
    "sk.infra": "Infrastruktur",
    "sk.fw": "Ramverk &amp; övrigt",
    "sk.seg": "Kampanjsegmentering",
    "sk.mlc": "ML-klassificering",
    "sk.proxy": "Proxyrotation",
    "edu.be": "Kandidatexamen (B.E.) i datateknik",
    "edu.dip": "Diplom i byggteknik",
    "edu.lang": "Engelska · Svenska",
    "edu.lvl": "Professionell nivå · Nybörjare (lär mig aktivt)",
    "ct.label": "05 — Kontakt",
    "ct.h2": "Låt oss bygga något som <em>spelar roll</em>.",
    "ct.loc": "Göteborg, Sverige",
    "ft.top": "Till toppen ↑"
  }
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
