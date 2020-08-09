// Калькулятор
let text = document.querySelector(".text");
let calc = document.querySelector(".calculator");
let bar = document.querySelector(".bar");
let codeOper;
let num1;
let num2;
calc.onclick = function(event){
	let target = event.target;
	if(target.textContent != "<=" && target.textContent != "+" && target.textContent != "=" && target.textContent != "/" && target.textContent != "*" && target.textContent != "-"){
		text.textContent += target.textContent;
	}
	if(target.textContent == "<="){
		text.textContent = text.textContent.slice(0, -1);
	}
	if(target.textContent == "/"){
		codeOper = 1;
		num1 = +text.textContent;
		text.textContent = "";
	}
	if(target.textContent == "*"){
		codeOper = 2;
		num1 = +text.textContent;
		text.textContent = "";
	}
	if(target.textContent == "-"){
		codeOper = 3;
		num1 = +text.textContent;
		text.textContent = "";
	}
	if(target.textContent == "+"){
		codeOper = 4;
		num1 = +text.textContent;
		text.textContent = "";
	}
	if(target == document.querySelector("#equal")){
		num2 = +text.textContent;
		switch(codeOper){
			case 1:
				text.textContent = num1 / num2;
				break;
			case 2:
				text.textContent = num1 * num2;
				break;
			case 3:
				text.textContent = num1 - num2;
				break;
			case 4:
				text.textContent = num1 + num2;
				break;
		}
	}
}
setInterval(function(){
	bar.classList.toggle("none");
}, 500);

// Случайный цвет

let str = "0123456789ABCDEF";
let res = "";
let btn = document.querySelector(".button");
let textColor = document.querySelector(".textColor");
let bg = document.querySelector(".randomColor");
btn.onclick = function(){
	for(let i = 0; i < 6; i++){
		let random = Math.floor(Math.random() * 15);
		res += str[random];
	}
	bg.style.background = "#" + res;
	textColor.style.color = "#" + res;
	textColor.textContent = "#" + res;
	btn.style.color = "#" + res;
	btn.style.borderColor = "#" + res;
	res = "";
};

// Scroll
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}
let animatedBg = document.querySelector('#animatedBackground-link');
animatedBg.addEventListener('click', () => {
	scrollTo(document.querySelector('.animatedBackground'));
});
let calculatorLink = document.querySelector('#calculator-link');
calculatorLink.addEventListener('click', () => {
	scrollTo(document.querySelector('.calculatorSection'));
});
let randomColorLink = document.querySelector('#randomColor-link');
randomColorLink.addEventListener('click', () => {
	scrollTo(document.querySelector('.randomColor'));
});
let arrow = document.querySelector('.arrow');
arrow.addEventListener('click', () => {
	scrollTo(document.querySelector('.animatedBackground'));
});