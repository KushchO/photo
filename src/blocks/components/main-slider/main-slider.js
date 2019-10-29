import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
	$('.slider__wrapper').slick({
		arrows: true,
		dots: true,
		appendDots: $('.slider__info'),
		//autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
