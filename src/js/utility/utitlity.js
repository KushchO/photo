function fitVideoToImage(container) {
  if (container) {
    const videoBlock = container.querySelector('.video-js');
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    videoBlock.style.width = width + 'px';
    videoBlock.style.height = height + 'px';
    window.addEventListener('resize', () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      videoBlock.style.width = width + 'px';
      videoBlock.style.height = height + 'px';
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

function posterClickHandler(wrapper) {
  openVideoPopup(wrapper);
}

const openVideoPopup = item => {
  const videoblock = item.cloneNode(true);
  videoblock.classList.add('video--popup');
  const popup = document.querySelector('.popup_overlay');
  const poster = videoblock.querySelector('.video-poster');
  const video = videoblock.querySelector('.video-js');
  let play = true;
  if (popup) {
    popup.classList.add('popup_overlay--visible-white');
    popup.innerHTML =
      "<button class='close-element close-element--popup'></button>";
    popup.appendChild(videoblock);
    poster.classList.add('hidden');
    video.classList.remove('video-js--hidden');
  }
  $('.close-element, .popup_overlay').on('click', function(e) {
    closeVideoPopup(e, video);
  });
  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      closeVideoPopup(e);
    }
  });

  const closeVideoPopup = (e, video) => {
    if (e.target.tagName !== 'VIDEO' || e.keyCode === 27) {
      const popup = document.querySelector('.popup_overlay');
      popup.classList.remove('popup_overlay--visible-white');
      return;
    }

    if (!play) {
      video.play();
      play = true;
      return;
    }
    video.pause();
    play = false;
  };
};

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
  posterClickHandler
};
