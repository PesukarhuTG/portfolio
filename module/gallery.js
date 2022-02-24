function changeGallery() {
  const portfolioImages = document.querySelectorAll('.portfolio-item-img')
  const portfolioBtnsList = document.querySelector('.portfolio-list');
  const portfolioBtns = document.querySelectorAll('.portfolio-list-tab');

  function changeImage(e) {
    if (e.target.classList.contains('portfolio-list-tab')) {
      portfolioBtns.forEach(item => {
        item.classList.remove('portfolio-list-tab-active');
      });
      e.target.classList.add('portfolio-list-tab-active');

      let season = e.target.dataset.season;
      portfolioImages.forEach((img, index) => {
        img.src = `assets/img/${season}/${season}-0${index + 1}.jpg`;
        img.alt = `${season}-photo`;
      })
    }
  }

  portfolioBtnsList.addEventListener('click', e => {
    changeImage(e);
  });

}

export default changeGallery;