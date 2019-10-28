import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
	$('.slider-wrapper').slick({
		arrows: true,
		dots: true,
		appendDots: $('.slide-info'),
		//autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
});
