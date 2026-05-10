const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); });

  const copy = {
    hu: {first:'#hu-elotelek', firstLabel:'Fogások böngészése', homeLabel:'Vissza a főoldalra'},
    en: {first:'#en-elotelek', firstLabel:'Browse dishes', homeLabel:'Back to homepage'},
    de: {first:'#de-elotelek', firstLabel:'Gerichte ansehen', homeLabel:'Zur Startseite'}
  };

  const buttons = document.querySelectorAll('[data-lang-btn]');
  const panels = document.querySelectorAll('[data-lang-panel]');
  const firstSectionLink = document.getElementById('first-section-link');
  const homeLink = document.getElementById('home-link');

  function setLanguage(lang, updateHash = true) {
    buttons.forEach(btn => btn.setAttribute('aria-selected', btn.dataset.langBtn === lang ? 'true' : 'false'));
    panels.forEach(panel => { panel.hidden = panel.dataset.langPanel !== lang; });
    document.documentElement.lang = lang;
    const data = copy[lang] || copy.hu;
    firstSectionLink.setAttribute('href', data.first);
    firstSectionLink.textContent = data.firstLabel;
    homeLink.textContent = data.homeLabel;
    if (updateHash) history.replaceState(null, '', '#' + lang);
    refreshReveals();
  }

  buttons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.langBtn)));

  function refreshReveals() {
    document.querySelectorAll('.reveal').forEach(el => {
      if (!el.closest('[hidden]')) observer.observe(el);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.09 });
  refreshReveals();

  const initial = (location.hash || '').replace('#','');
  if (['hu','en','de'].includes(initial)) setLanguage(initial, false);
