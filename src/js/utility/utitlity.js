function fitVideoToImage(container) {
  if (container) {
    console.log(container);
    const videoBlock = container.querySelector('.video-js');
    let width = container.offsetWidth;
    videoBlock.style.width = width + 'px';
    videoBlock.style.height = width + 'px';
    window.addEventListener('resize', () => {
      width = container.offsetWidth;
      videoBlock.style.width = width + 'px';
      videoBlock.style.height = width + 'px';
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
  video.addEventListener('mouseenter', () => {
    if (!play) {
      video.play();
      play = true;
      return;
    }
    video.pause();
    play = false;
  });
}

function posterMouseOverHandler(wrapper) {
  const poster = wrapper.querySelector('.video-poster');
  const video = wrapper.querySelector('.video-js');
  poster.classList.add('hidden');
  video.classList.remove('video-js--hidden');
  video.play();
}

function initVideoSlides(slidesContainer, videoContainers, slider) {
  if (slidesContainer.length > 0 && videoContainers.length > 0) {
    slidesContainer.forEach(container => {
      container.addEventListener('mouseenter', e => {
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
  fitVideoToImage,
  posterMouseOverHandler
};
