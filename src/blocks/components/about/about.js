import $ from 'jquery';
import 'slick-carousel';

if (window.outerWidth <= 768) {
  const aboutSlider = document.querySelector('.about-wrapper');
  if (aboutSlider) {
    $('.about-wrapper').slick({
      arrows: false,
      dots: true,
      appendDots: $('.about-wrapper'),
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '24px',
      infinite: false
    });
  }
}

// const fadeUpBlocks = document.querySelectorAll('.fade-up-block');
// if(fadeUpBlocks) {
// 	for(let i = 0; i < fadeUpBlocks.length; i++) {
// 		fadeUpBlocks[i].
// 	}
// }
