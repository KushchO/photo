(function() {
	const currentpath = window.location.href;
	const headerLinks = document.querySelectorAll('.main-nav__link');
	const headerSubLinks = document.querySelectorAll('.secondary-nav__link');
	const mobileBurger = document.querySelector('.header-top__burger');
	const mobileMenu = document.querySelector('.mobile-menu');
	const mobileMenuClose = document.querySelector('.mobile-menu__close');

	for (let i = 0; i < headerLinks.length; i++) {
		if (headerLinks[i].href === currentpath) {
			headerLinks[i].classList.add('active-link');
		}
	}

	for (let i = 0; i < headerSubLinks.length; i++) {
		if (headerSubLinks[i].href === currentpath) {
			headerSubLinks[i].classList.add('active-link');
		}
	}

	mobileBurger.addEventListener('click', () => {
		mobileMenu.classList.toggle('visually-hidden');
	});
	mobileMenuClose.addEventListener('click', () => {
		mobileMenu.classList.toggle('visually-hidden');
	});
})();
