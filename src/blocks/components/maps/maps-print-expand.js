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
		function openPopup(item) {
			item.classList.add('print');
			printableBlock.classList.add('expanded');
			closeElement.classList.remove('close-element--hidden');
			closeElement.classList.add('close-element--visible');
			overlay.classList.add('popup_overlay--visible');
			$(window).resize(function() {
				resize();
			});
		}

		function closePopup(item) {
			item.classList.remove('print');
			printableBlock.classList.remove('expanded');
			closeElement.classList.add('close-element--hidden');
			closeElement.classList.remove('close-element--visible');
			overlay.classList.remove('popup_overlay--visible');
			$(window).resize(function() {
				resize();
			});
		}

		printButton.addEventListener('click', () => {
			openPopup(item);
			setTimeout(function() {
				window.print();
				closePopup(item);
			}, 500);
		});

		showButton.addEventListener('click', () => {
			openPopup(item);
		});

		overlay.addEventListener('click', () => {
			closePopup(item);
		});

		closeElement.addEventListener('click', () => {
			closePopup(item);
		});
	});
});
