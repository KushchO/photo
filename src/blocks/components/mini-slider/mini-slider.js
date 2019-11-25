import $ from 'jquery';
import 'slick-carousel';
import videojs from 'video.js';

$(document).ready(function() {
	$('.mini-slider__wrapper--clothes').slick({
		arrows: false,
		dots: true,
		appendDots: $('.mini-slider__wrapper--clothes'),
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.mini-slider__wrapper--things').slick({
		arrows: false,
		dots: true,
		appendDots: $('.mini-slider__wrapper--things'),
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.mini-slider__wrapper--children').slick({
		arrows: false,
		dots: true,
		appendDots: $('.mini-slider__wrapper--children'),
		slidesToShow: 1,
		slidesToScroll: 1
	});

	const video = document.querySelector('#my-player');
	if (video) {
		const player = videojs('my-player', {
			controls: false, // включить кнопки на плеере
			autoplay: false, // Автозапуск
			preload: 'auto', // Загрузка видео
			loop: true, // Повтор видео
			sourceOrder: true,
			paused: true,
			sources: [
				{
					src: './videos/video.mp4',
					type: 'video/mp4'
				}
			],
			techOrder: ['html5']
		});
		const poster = document.querySelector('.about__poster');

		console.log(player);
		console.log(player.paused());

		if (video && poster) {
			poster.addEventListener('click', () => {
				poster.classList.add('about__poster--hidden');
				player.play();
			});
			video.addEventListener('click', function() {
				if (player.paused()) {
					player.play();
					return;
				}
				player.pause();
			});
		}
	}
});
