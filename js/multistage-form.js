const toSecondFromFirstBtn = document.querySelector('.to_second_from_first');
const toFirstFromSecondBtn = document.querySelector('.to_first_from_second');
const toThirdFromSecondBtn = document.querySelector('.to_third_from_second');
const toSecondFromThirdBtn = document.querySelector('.to_second_from_third');
const toFirstStageBtn = document.querySelector('.to_first_stage');

const tabs = document.querySelectorAll('.tab');

const blocks = document.querySelectorAll('.form_block');

toSecondFromFirstBtn.addEventListener('click', e => {
	e.preventDefault();
	setActiveBlock(1);
	setActiveTab(1);
});

toFirstFromSecondBtn.addEventListener('click', e => {
	e.preventDefault();
	setActiveBlock(0);
	setActiveTab(0);
});

toThirdFromSecondBtn.addEventListener('click', e => {
	e.preventDefault();
	setActiveBlock(2);
	setActiveTab(2);
});

toSecondFromThirdBtn.addEventListener('click', e => {
	e.preventDefault();
	setActiveBlock(1);
	setActiveTab(1);
});

toFirstStageBtn.addEventListener('click', e => {
	e.preventDefault();
	setActiveBlock(0);
	setActiveTab(0);
});

tabs.forEach((tab, i) => tab.addEventListener('click', () => {
	setActiveTab(i);
	setActiveBlock(i);
}));

const setActiveBlock = index => {
	blocks.forEach(block => block.classList.remove('active_block'));
	blocks[index].classList.add('active_block');
}

const setActiveTab = index => {
	tabs.forEach(t => t.classList.remove('active_tab'));
	tabs[index].classList.add('active_tab');
}