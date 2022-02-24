import i18Obj from "./translate.js";

function changeLanguage() {
  const langSwitch = document.querySelector('.lang-switch');
  const langBtns = document.querySelectorAll('.btn-lang');
  let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

  getTranslate(lang);
  changeActiveClass();

  function setLocalStorageLang() {
    localStorage.setItem('lang', lang);
  }

  function changeActiveClass() {
    langBtns.forEach(btn => {
      btn.classList.remove('active-lang');

      if (lang === btn.dataset.lang) {
        btn.classList.add('active-lang');
      }
    })
  }

  function getTranslate(language) {
    const translateWords = document.querySelectorAll('[data-i18]');
    translateWords.forEach(item => {

      const key = item.dataset.i18;
      const translation = i18Obj[language][key];
      item.textContent = translation;

      if (item.placeholder) {
        item.placeholder = translation;
        item.textContent = '';
      }

      lang = language;
      setLocalStorageLang();
    });
  }

  langSwitch.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('btn-lang')) {
      langBtns.forEach(item => {
        item.classList.remove('active-lang');
      });

      if (e.target.classList.contains('btn-en')) {
        e.target.classList.add('active-lang');
        getTranslate('en');
      }

      if (e.target.classList.contains('btn-ru')) {
        e.target.classList.add('active-lang');
        getTranslate('ru');
      }
    }
  });
}

export default changeLanguage;