const board = document.querySelector('.board');
let str = "0123456789ABCDEF";
let randomColor = "";
const squaresCount = 560;

for(let i = 0; i < squaresCount; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    randomColor = "";
    element.style.background = `#${color}`;
    element.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    for(let i = 0; i < 6; i++){
		let random = Math.floor(Math.random() * 15);
		randomColor += str[random];
	}
    return randomColor;
}