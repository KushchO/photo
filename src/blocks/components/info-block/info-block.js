import $ from 'jquery';
import 'slick-carousel';

if (window.outerWidth <= 768) {
	const aboutSlider = document.querySelector('.info-block');
	if (aboutSlider) {
		$('.info-block').slick({
			arrows: false,
			dots: true,
			appendDots: $('.info-block'),
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '24px',
			infinite: false
		});
	}
}
