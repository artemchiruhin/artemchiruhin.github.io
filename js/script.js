// Секундомер
let time = 0;
let isPaused = false;
let timerId = setInterval(() => {
	if(!isPaused){
		if(time > 59){
			timer.innerHTML = '01:00';
		} else if(time < 10){
			timer.innerHTML = '00:0' + time;
		} else{
			timer.innerHTML = '00:' + time;
		}
		time++;
	}
}, 1000);
let cvs = document.querySelector('#canvas'); // Канвас
let ctx = cvs.getContext('2d'); // Контекст
// Изображения
let bg = new Image();
let basket = new Image();
let banana = new Image();
// Пути файлов
bg.src = "../img/bg.png";
basket.src = '../img/basket.svg';
banana.src = '../img/banana.png';
// Позиция корзины
let xBasketPos = document.querySelector('.gameArea').width / 2;
let yBasketPos = document.querySelector('.gameArea').height - 145;
// Счёт
let score = document.querySelector('#score');
// Жизни
let livesCounter = document.querySelector('#livesCounter');
// Массив фруктов
let fruits = [];
fruits[0] = {
	x: Math.floor(Math.random() * 800),
	y: 20,
	
};
// Нужна, чтобы работала пауза
let animationGame;
// Отрисовка изображений
function draw(){
	ctx.drawImage(bg, 0, 0, 800, 600);
	// Отрисовка фруктов
	for(let i = 0; i < fruits.length; i++){
		ctx.drawImage(banana, fruits[i].x, fruits[i].y, 25, 25);
		//fruits[i].y += fruits[i].speed; // Падение фрукта
		fruits[i].y++;
		// Проверка на падение на землю
		if(fruits[i].y >= 470){
			fruits[i].y = 20; // Возвращение на исходную
			fruits[i].x = Math.floor(Math.random() * 800); // Рандомное место по Х
			livesCounter.textContent--; // Вычитание жизни
		}
		// Проверка на попадание в корзину
		if(fruits[i].x >= xBasketPos && fruits[i].x + 25 <= xBasketPos + 45 && fruits[i].y > yBasketPos){
			score.textContent++; // Увеличение счета
			fruits[i].y = 20; // Возвращение на исходную
			fruits[i].x = Math.floor(Math.random() * 800); // Рандомное место по Х
		}
	}
	ctx.drawImage(basket, xBasketPos, yBasketPos, 45, 45);
	// Проверка на победу/поражение
	if(livesCounter.textContent === '0' && time > 10){
		// Переход на страницу с результатами, плюс get параметры для php
		window.location = `../pages/results.php?score=` + score.textContent + `&time=` + timer.textContent + `&is_winner=` + true;
	} else if(livesCounter.textContent <= '0' && time < 10){
		window.location = `../pages/results.php?score=` + score.textContent + `&time=` + timer.textContent + `&is_winner=` + false;
	}
	animationGame = requestAnimationFrame(draw);
}
// Отрисовка происходит, когда последнее изображение загрузится
banana.onload = draw;
// Движение корзины и пауза
document.addEventListener('keydown', e => {
	if(e.keyCode == 37) {
		if(xBasketPos > 0){
			xBasketPos -= 12.5;
		}
	}
	if(e.keyCode == 39) {
		if(xBasketPos < 755){
			xBasketPos += 12.5;
		}
	}
	if(e.keyCode == 27){
		if(!isPaused){
			cancelAnimationFrame(animationGame);
			isPaused = true;
		} else if(isPaused){
			requestAnimationFrame(draw);
			isPaused = false;
		}
	}
});
// Тут должна быть фича с пробелом
/*document.addEventListener('keypress', e => {
	if(e.keyCode == 32){
		ultimate = setTimeout(() => {
			console.log("Работает");
		}, 4000);
	}
})
document.addEventListener('keyup', e => {
	if(e.keyCode == 32){
		clearInterval(ultimate);
	}
})*/
// Добавление фрукта каждую секунду
setInterval(() => {
	fruits.push({
		x: Math.floor(Math.random() * 400),
		y: 20,
		speed: Math.random() * 2 + 1
	});
}, 1000);
