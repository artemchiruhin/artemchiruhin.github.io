const toSecondFromFirstBtn = document.querySelector('.to_second_from_first');
const toFirstFromSecondBtn = document.querySelector('.to_first_from_second');
const toThirdFromSecondBtn = document.querySelector('.to_third_from_second');
const toSecondFromThirdBtn = document.querySelector('.to_second_from_third');
const toFirstStageBtn = document.querySelector('.to_first_stage');

const blocks = document.querySelectorAll('.form_block');

toSecondFromFirstBtn.addEventListener('click', e => {
	e.preventDefault();
	blocks.forEach(block => block.classList.add('closed'));
	blocks[1].classList.remove('closed');
});

toFirstFromSecondBtn.addEventListener('click', e => {
	e.preventDefault();
	blocks.forEach(block => block.classList.add('closed'));
	blocks[0].classList.remove('closed');
});

toThirdFromSecondBtn.addEventListener('click', e => {
	e.preventDefault();
	blocks.forEach(block => block.classList.add('closed'));
	blocks[2].classList.remove('closed');
});

toSecondFromThirdBtn.addEventListener('click', e => {
	e.preventDefault();
	blocks.forEach(block => block.classList.add('closed'));
	blocks[1].classList.remove('closed');
});

toFirstStageBtn.addEventListener('click', e => {
	e.preventDefault();
	blocks.forEach(block => block.classList.add('closed'));
	blocks[0].classList.remove('closed');
});