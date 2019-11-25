import $ from 'jquery';
import { tns } from 'tiny-slider/src/tiny-slider';

var sliderContainer = document.querySelector('.photo-slider__slider');
if (sliderContainer) {
	var slider = tns({
		items: 3,
		//center: true,
		edgePadding: 160,
		container: '.photo-slider__slider',
		swipeAngle: false,
		speed: 400,
		controls: true,
		autoHeight: true
	});
}
