function changeMode() {

  const modeBtn = document.querySelector('.mode');
  const iconModeSet = document.querySelector('.icon-mode-set');
  const header = document.querySelector('.header-container');
  const hero = document.querySelector('.hero');
  const contacts = document.querySelector('.contacts');
  const mainBtns = document.querySelectorAll('.btn-hero, .btn-contacts, .portfolio-list-tab, .price-btn');

  let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
  changeTheme();

  function setLocalStorageTheme() {
    localStorage.setItem('theme', theme);
  }

  function changeTheme() {
    if (theme === 'light') {
      document.documentElement.style.setProperty('--main-color', '#000');
      document.documentElement.style.setProperty('--contrast-color', '#fff');
      document.documentElement.style.setProperty('--hover-color', '#fff');
      document.documentElement.style.setProperty('--accent-color', '#000');
      document.documentElement.style.setProperty('--light-color', '#bdae82');
      document.documentElement.style.setProperty('--wrapper-form', 'rgba(255, 255, 255, 0.5)');
      document.documentElement.style.setProperty('--active-color', '#bdae82');

      header.classList.add('header-container-light');
      hero.classList.add('hero-light');
      contacts.classList.add('contacts-light');
      iconModeSet.setAttribute('href', 'assets/svg/sprite.svg#icon-dark-mode');
      mainBtns.forEach(btn => btn.classList.add('light-mode-hover'));
      setLocalStorageTheme(theme);
      theme = 'dark';

    } else if (theme === 'dark') {
      document.documentElement.style.setProperty('--main-color', '#fff');
      document.documentElement.style.setProperty('--contrast-color', '#000');
      document.documentElement.style.setProperty('--hover-color', '#bdae82');
      document.documentElement.style.setProperty('--accent-color', '#bdae82');
      document.documentElement.style.setProperty('--light-color', 'transparent');
      document.documentElement.style.setProperty('--wrapper-form', 'rgba(0, 0, 0, 0.5)');
      document.documentElement.style.setProperty('--active-color', '#000');

      header.classList.remove('header-container-light');
      hero.classList.remove('hero-light');
      contacts.classList.remove('contacts-light');
      iconModeSet.setAttribute('href', 'assets/svg/sprite.svg#icon-light-mode');
      mainBtns.forEach(btn => btn.classList.remove('light-mode-hover'));
      setLocalStorageTheme(theme);
      theme = 'light';
    }
  }

  modeBtn.addEventListener('click', () => {
    changeTheme();
  });
}

export default changeMode;