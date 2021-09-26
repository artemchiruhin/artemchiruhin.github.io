const items = document.querySelectorAll('.car img');
const currentImage = document.querySelector('.current_image');
let src;

items.forEach(item => {
	item.addEventListener('dragstart', e => {
	    src = item.getAttribute('src');
	});
});

currentImage.addEventListener('dragover', e => {
    e.preventDefault();
});

currentImage.addEventListener('drop', e => {
    e.target.classList.remove('hovered');
    currentImage.style.backgroundImage = `url(${src})`;
});