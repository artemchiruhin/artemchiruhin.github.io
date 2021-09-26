const links = document.querySelectorAll('.menu_item a');
const mainBtn = document.querySelector('.main_button');

links.forEach(link => link.addEventListener('click', e => {
	e.preventDefault();
	const href = e.target.getAttribute('href').slice(1);

	document.getElementById(href).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}));

mainBtn.addEventListener('click', () => {
	document.getElementById('second_section').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
});
