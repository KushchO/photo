import $ from 'jquery';
import { tns } from 'tiny-slider/src/tiny-slider';
import { initVideoSlides, fitVideoToImage } from '../../../js/utility/utitlity';
let expanded = false;
const sliderContainer = document.querySelector('.photo-slider__slider');
let windowWidth = window.innerWidth;
let slidesNumber = 4;
if (windowWidth < 769) {
  slidesNumber = 1;
}
if (sliderContainer) {
  let slider = tns({
    items: slidesNumber,
    center: true,
    container: '.photo-slider__slider',
    swipeAngle: false,
    speed: 400,
    controls: true,
    preventScrollOnTouch: 'auto'
    //mouseDrag: true
  });

  const container = document.querySelectorAll('.video');

  const videoContainer = document.querySelectorAll('.video-slider');
  //fitVideoToImage(videoContainer);
  initVideoSlides(videoContainer, container, slider);
  console.log(videoContainer);
  if (videoContainer.length === 0) {
    $('.photo-slider').on('click', function(e) {
      if (e.target.classList.contains('photo-slider__image') && !expanded) {
        slider.destroy();
        slider = tns({
          items: 1,
          center: true,
          container: '.photo-slider__slider',
          swipeAngle: false,
          speed: 400,
          controls: true,
          mouseDrag: true
        });
        expanded = true;
        $('.popup_overlay').addClass('popup_overlay--visible-white');
        $('.tns-outer').addClass('tns-outer--popup');
        $('.tns-ovh').addClass('tns-ovh--popup');
        $('.photo-slider').addClass('photo-slider--popup');
        $('.popup_overlay').append(
          "<button class='close-element close-element--popup'></button>"
        );
        $('.close-element, .popup_overlay').on('click', function(e) {
          slider.destroy();
          slider = tns({
            items: 4,
            center: true,
            container: '.photo-slider__slider',
            swipeAngle: false,
            speed: 400,
            controls: true,
            mouseDrag: true
          });
          $('.popup_overlay .close-element').remove();
          $('.popup_overlay').removeClass('popup_overlay--visible-white');
          $('.tns-outer').removeClass('photo-slider--popup');
          $('.photo-slider').removeClass('examples__slider--popup');
          $('.tns-ovh').removeClass('tns-ovh--popup');
          expanded = false;
        });
      }
    });
  }
}
