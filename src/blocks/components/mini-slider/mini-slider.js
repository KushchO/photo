import $ from 'jquery';
import 'slick-carousel';

import {
  initMiniSlider,
  fitVideoToImage,
  posterMouseOverHandler
} from '../../../js/utility/utitlity';

$(document).ready(function() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    initMiniSlider('.about-wrapper ');
  } else {
    initMiniSlider('.mini-slider__wrapper--clothes');
    initMiniSlider('.mini-slider__wrapper--things');
    initMiniSlider('.mini-slider__wrapper--children');
    initMiniSlider('.mini-slider__wrapper--things-3');
    initMiniSlider('.mini-slider__wrapper--children-3');
  }

  const posterWrappers = document.querySelectorAll('.video');
  posterWrappers.forEach(item => {
    console.log(item);
    fitVideoToImage(item);
    item.addEventListener('mouseover', () => {
      posterMouseOverHandler(item);
    });
  });
});
