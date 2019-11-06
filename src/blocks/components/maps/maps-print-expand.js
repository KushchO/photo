import $ from 'jquery';
$(function() {
	const overlay = document.querySelector('.popup_overlay');
	const withPritableList = document.querySelectorAll('.with-printable');

	// if (printMapButton) {
	// 	printMapButton.addEventListener('click', function() {
	// 		window.print();
	// 	});
	// }
	console.log(withPritableList);

	withPritableList.forEach(item => {
		const showButton = item.querySelector('.map-buttons__button--expand');
		const printButton = item.querySelector('.map-buttons__button--print');
		const printableBlock = item.querySelector('.printable');
		const closeElement = item.querySelector('.close-element');
		closeElement.classList.add('close-element--hidden');
		console.log(closeElement);
		printButton.addEventListener('click', () => {
			item.classList.add('print');
			window.print();
			item.classList.remove('print');
		});

		showButton.addEventListener('click', () => {
			console.log(window);
			printableBlock.classList.add('expanded');
			closeElement.classList.remove('close-element--hidden');
			closeElement.classList.add('close-element--visible');
			overlay.classList.add('popup_overlay--visible');
			$(window).resize(function() {
				resize();
			});
		});

		overlay.addEventListener('click', () => {
			printableBlock.classList.remove('expanded');
			closeElement.classList.add('close-element--hidden');
			closeElement.classList.remove('close-element--visible');
			overlay.classList.remove('popup_overlay--visible');
			$(window).resize(function() {
				resize();
			});
		});

		closeElement.addEventListener('click', () => {
			printableBlock.classList.remove('expanded');
			closeElement.classList.add('close-element--hidden');
			closeElement.classList.remove('close-element--visible');
			overlay.classList.remove('popup_overlay--visible');
			$(window).resize(function() {
				resize();
			});
		});
	});
});
