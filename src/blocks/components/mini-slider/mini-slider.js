import $ from 'jquery';
import 'slick-carousel';

import {
  initVideoSlides,
  initMiniSlider,
  fitVideoToImage
} from '../../../js/utility/utitlity';

$(document).ready(function() {
  initMiniSlider('.mini-slider__wrapper--clothes');
  initMiniSlider('.mini-slider__wrapper--things');
  initMiniSlider('.mini-slider__wrapper--children');
  initMiniSlider('.mini-slider__wrapper--things-3');
  initMiniSlider('.mini-slider__wrapper--children-3');

  const container = document.querySelectorAll('.video');

  const videoContainer = document.querySelectorAll('.video-slide');
  fitVideoToImage(videoContainer);
  initVideoSlides(videoContainer, container);
});
