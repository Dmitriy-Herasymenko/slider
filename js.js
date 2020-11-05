const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');

let index = 1;
let size = slides[index].clientWidth;

function update () {
    slider.style.transform = 'translateX(' + (-size * index) + 'px';
}
 function slide() {
     slider.style.transition = 'transform .5s ease-in-out';
     update();
 }

function btnCheck () {
    if(this.id === 'prev') {
        index--;
    }

    else if (this.id === 'next') {
        index++;
    }
    slide();
}

buttons.forEach(btn => btn.addEventListener('click', btnCheck));