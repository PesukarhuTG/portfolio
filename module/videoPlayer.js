import { addZero } from './addZero.js'

const videoPlayer = () => {
  const videoPlayer = document.querySelector('.video-player');
  const iconPlaySvg = document.querySelector('.icon-play-svg');
  const navigationPlay = document.querySelector('.nav-01');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');
  const videoProgress = document.querySelector('.video-progress');
  const videoFullScreen = document.querySelector('.video-button__fullscreen');
  const videoVolume = document.querySelector('.video-volume');
  const iconSoundSvg = document.querySelector('.icon-sound-svg')
  const volumeDown = document.querySelector('.volume-down');
  const volumeUp = document.querySelector('.volume-up');
  const iconPlay = document.querySelector('.icon-play');
  const videoNavigation = document.querySelector('.video-navigation');

  const changeColorProgressBar = () => {
    const colorValue = (videoProgress.value - videoProgress.min) / (videoProgress.max - videoProgress.min) * 100;
    videoProgress.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + colorValue + '%, rgb(200, 200, 200) ' + colorValue + '%, rgb(200, 200, 200) 100%)';
  };

  const changeColorVolume = () => {
    const colorValue = videoVolume.value;
    videoVolume.style.background = 'linear-gradient(to right, rgb(189, 174, 130) 0%, rgb(189, 174, 130) ' + colorValue + '%, rgb(200, 200, 200) ' + colorValue + '%, rgb(200, 200, 200) 100%)';
  };

  const playVideo = () => {
    videoPlayer.play(); //запускаем видео
    iconPlay.closest('.video-btn').style.display = 'none'; //скрываем кнопку play на картинке
    iconPlaySvg.setAttribute('xlink:href', 'assets/svg/sprite.svg#icon-video-pause'); //меняем в панели на ||
  };

  const pauseVideo = () => {
    videoPlayer.pause(); //останавливаем видео
    iconPlay.closest('.video-btn').style.display = ''; //показываем кнопку play на картинке
    iconPlaySvg.setAttribute('xlink:href', 'assets/svg/sprite.svg#icon-video-play'); //меняем в панели на ►
  };

  const stopVideo = () => {
    pauseVideo();
    videoPlayer.currentTime = 0;//время сводим к 0
  }

  const changeInputThumb = () => {
    videoVolume.value = videoPlayer.volume * 100; //возвращаем бегунок
    changeColorVolume();
  };

  iconPlay.addEventListener('click', () => {
    playVideo();
    videoNavigation.style.opacity = '1';
  });

  navigationPlay.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.video-button__play')) videoPlayer.paused ? playVideo() : pauseVideo();
    if (target.closest('.video-button__stop')) stopVideo();
  });

  //progress bar
  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100; //определяем, ск прошло времени из всего времени
    changeColorProgressBar();

    let minutePassed = Math.floor(currentTime / 60) || '0';
    let secondsPassed = Math.floor(currentTime % 60) || '0';

    let minuteTotal = Math.floor(duration / 60) || '0';
    let secondsTotal = Math.floor(duration % 60) || '0';

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

    if (currentTime === duration) stopVideo();
  });

  //перемотка видео при клике на progress bar
  videoProgress.addEventListener('input', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value * duration) / 100;
    changeColorProgressBar();
  });

  //полноэкранный режим
  videoFullScreen.addEventListener('click', () => {
    videoPlayer.requestFullscreen();
  });

  //громкость
  videoPlayer.volume = 0.5;
  videoVolume.value = videoPlayer.volume * 100;

  videoVolume.addEventListener('input', () => {
    videoPlayer.volume = videoVolume.value / 100;
    changeColorVolume();

    if (videoPlayer.volume === 0) {
      iconSoundSvg.setAttribute('href', 'assets/svg/sprite.svg#icon-mute');
    } else {
      iconSoundSvg.setAttribute('href', 'assets/svg/sprite.svg#sound-on');
    }
  });

  volumeDown.addEventListener('click', () => {
    if (videoPlayer.volume != 0) {
      videoPlayer.volume = 0; //снижаем громкость
      iconSoundSvg.setAttribute('href', 'assets/svg/sprite.svg#icon-mute');
      changeInputThumb();
    } else {
      videoPlayer.volume = 0.5; //возвращаем громкость
      iconSoundSvg.setAttribute('href', 'assets/svg/sprite.svg#sound-on');
      changeInputThumb();
    }
  });

  volumeUp.addEventListener('click', () => {
    if (videoPlayer.volume != 1) {
      videoPlayer.volume = 1; //повышаем громкость
      changeInputThumb();
    } else {
      videoPlayer.volume = 0.5; //возвращаем громкость
      changeInputThumb();
    }
  });
}

export default videoPlayer;