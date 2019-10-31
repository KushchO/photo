const currentpath = window.location.href;
const headerLinks = document.querySelectorAll('.main-nav__link');
const headerSubLinks = document.querySelectorAll('.secondary-nav__link');

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
