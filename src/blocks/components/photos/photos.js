import $ from 'jquery';
import { tns } from 'tiny-slider/src/tiny-slider';
const windowWidth = window.innerWidth;

if (windowWidth < 1080) {
  const photosList = document.querySelectorAll('.photos');

  for (let i = 0; i < photosList.length; i++) {
    console.log(photosList[i]);
    const container = photosList[i].querySelector('.photos__list');
    container.classList.add('photos__list--' + (i + 1));
    let slider1 = tns({
      items: 4,
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
