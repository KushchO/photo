import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
	$('.slider__wrapper').slick({
		arrows: true,
		dots: true,
		appendDots: $('.slider__wrapper'),
		//autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
