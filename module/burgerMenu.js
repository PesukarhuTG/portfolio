function burger() {
  const burgerMenu = document.querySelector('.burger-menu');
  const modal = document.querySelector('#modal');
  const menuBody = document.querySelector('.menu-body');

  let disabled = false;

  function disabledScroll() {
    if (document.disabledScroll) return;

    const widthScroll = window.innerWidth - document.body.offsetWidth;  //right scroll's width
    disabled = true;

    document.body.style.cssText = `
                overflow: hidden;
                padding-right: ${widthScroll}px;
            `;
  }

  function enabledScroll() {
    disabled = false;
    document.body.style.cssText = '';
  }

  function hideMenu() {
    modal.classList.add('hidden'); //hide black background
    burgerMenu.classList.remove('burger-menu_active'); //change burger icon =
    menuBody.classList.remove('_active'); //hide menu
  }

  burgerMenu.addEventListener('click', () => {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden'); //show black background
      burgerMenu.classList.add('burger-menu_active'); //change burger icon Х
      menuBody.classList.add('_active'); //show menu
      disabledScroll();
    } else {
      hideMenu();
      enabledScroll();
    }
  });

  menuBody.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link')) {

      if (!modal.classList.contains('hidden')) { //if black bgrnd is shown
        hideMenu();
        enabledScroll();
      }
    }
  });
}

export default burger;