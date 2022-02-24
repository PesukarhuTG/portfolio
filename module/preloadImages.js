function preloadImages(arr) {
  arr.forEach(item => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `assets/img/${item}/${item}-0${i}.jpg`;
    }
  })
}

export default preloadImages;