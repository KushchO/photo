import $ from 'jquery';
import { tns } from 'tiny-slider/src/tiny-slider';
const windowWidth = window.innerWidth;
let slidesNumber = 4;
if (windowWidth < 769) {
  slidesNumber = 1;
}
if (windowWidth < 1080) {
  const photosList = document.querySelectorAll('.photos');

  for (let i = 0; i < photosList.length; i++) {
    console.log(photosList[i]);
    const container = photosList[i].querySelector('.photos__list');
    container.classList.add('photos__list--' + (i + 1));
    let slider1 = tns({
      items: slidesNumber,
      container: '.' + container.classList[1],
      swipeAngle: false,
      speed: 400,
      controls: true,
      preventScrollOnTouch: 'auto',
      loop: false
      //mouseDrag: true
    });
  }
}
