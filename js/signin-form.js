const loginInput = document.getElementById('login__input');
const passwordInput = document.getElementById('password__input');
const loginLabel = document.querySelector('.login label');
const passwordLabel = document.querySelector('.password label');
const signinBtn = document.querySelector('.signin_button');

loginInput.addEventListener('focus', () => {
	loginInput.placeholder = '';
	loginLabel.classList.add('active_label');
});

passwordInput.addEventListener('focus', () => {
	passwordInput.placeholder = '';
	passwordLabel.classList.add('active_label');
});

loginInput.addEventListener('blur', e => {
	if(e.target.value === '') {
		loginInput.placeholder = 'Логин';
		loginLabel.classList.remove('active_label');
	}
});

passwordInput.addEventListener('blur', e => {
	if(e.target.value === '') {
		passwordInput.placeholder = 'Пароль';
		passwordLabel.classList.remove('active_label');
	}
});

signinBtn.addEventListener('click', e => {
	e.preventDefault();
	document.querySelector('.signin_form form').classList.add('hidden');
	document.querySelector('.sent').classList.remove('hidden');
});