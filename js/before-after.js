const slider = document.querySelector('.slider');
const before = document.querySelector('.before');
const beforeImg = document.querySelector('.before img');
const delimiter = document.querySelector('.delimiter');
let isSliderActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = slider.offsetWidth;
	beforeImg.style.width = `${width}px`;
});

const beforeAfterSlider = x => {
	let shift = Math.max(0, Math.min(x, slider.offsetWidth));
	before.style.width = `${shift}px`;
	delimiter.style.left = `${shift}px`;
};

const pauseEvents = e => {
	e.stopPropagation();
	e.preventDefault();
	return false;
};

slider.addEventListener('mousedown', () => {
	isSliderActive = true;
});

slider.addEventListener('mouseup', () => {
	isSliderActive = false;
});

slider.addEventListener('mouseleave', () => {
	isSliderActive = false;
});

slider.addEventListener('mousemove', e => {
	if(!isSliderActive) {
		return;
	}
	let x = e.pageX;
	x -= slider.getBoundingClientRect().left;
	beforeAfterSlider(x);
	pauseEvents(e);
});

slider.addEventListener('touchstart', () => {
	isSliderActive = true;
});

slider.addEventListener('touchend', () => {
	isSliderActive = false;
});

slider.addEventListener('touchcancel', () => {
	isSliderActive = false;
});

slider.addEventListener('touchmove', e => {
	if(!isSliderActive) {
		return;
	}

	let x;
	let i;

	for(i = 0; i < e.changedTouches.length; i++) {
		x = e.changedTouches[i].pageX;
	}

	x -= slider.getBoundingClientRect().left;
	beforeAfterSlider(x);
	isSliderActive = true;
});