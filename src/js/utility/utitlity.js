import videojs from 'video.js';
function fitVideoToImage(container, slider) {
  if (container.length > 0) {
    container.forEach(item => {
      //debugger;
      const videoSlide = item.querySelectorAll('.video');
      videoSlide.forEach(item => {
        const videoBlock = item.querySelector('.video-js');
        const img = item.querySelector('img');
        let width = img.offsetWidth;
        let height = img.offsetHeight;
        videoBlock.style.width = width + 'px';
        videoBlock.style.height = height + 'px';
        window.addEventListener('resize', () => {
          height = img.offsetHeight;
          width = img.offsetWidth;
          videoBlock.style.width = width + 'px';
          videoBlock.style.height = height + 'px';
        });
      });
    });
  }
}

function initMiniSlider(selector) {
  $(selector).slick({
    arrows: false,
    dots: true,
    appendDots: $(selector),
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

function posterAndVideoClickHandlers(wrapper) {
  const poster = wrapper.querySelector('.video-poster');
  const video = wrapper.querySelector('.video-js');
  let play = true;
  poster.classList.add('hidden');
  video.classList.remove('video-js--hidden');
  video.addEventListener('click', () => {
    if (!play) {
      video.play();
      play = true;
      return;
    }
    video.pause();
    play = false;
  });
}

function initVideoSlides(slidesContainer, videoContainers, slider) {
  if (slidesContainer.length > 0 && videoContainers.length > 0) {
    slidesContainer.forEach(item => {
      item.addEventListener('click', e => {
        if (
          !e.target.classList.contains('video-js') &&
          e.target.classList.contains('video-button')
        ) {
          posterAndVideoClickHandlers(e.target.parentNode);
          return;
        }
        if (
          !e.target.classList.contains('video-js') &&
          e.target.classList.contains('video-poster')
        ) {
          posterAndVideoClickHandlers(e.target.closest('.video'));
          return;
        }
      });
    });
  }
}

export {
  initVideoSlides,
  posterAndVideoClickHandlers,
  initMiniSlider,
  fitVideoToImage
};
