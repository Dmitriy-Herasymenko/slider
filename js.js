const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');
const bakcgrounds = document.querySelectorAll('.bg');

let index = 1;
let optionIndex = 0;
let size = slides[index].clientWidth;

function update () {
    slider.style.transform = 'translateX(' + (-size * index) + 'px';
    
    options.forEach(option => option.classList.remove('colored'));
    options[optionIndex].classList.add('colored');

    bakcgrounds.forEach(bg => bg.classList.remove('show'));
    bakcgrounds[optionIndex].classList.add('show');

}
 function slide() {
     slider.style.transition = 'transform .5s ease-in-out';
     update();
 }

function btnCheck () {
    if(this.id === 'prev') {
        index--;

        if(optionIndex === 0) {
            optionIndex = 4;
        }
        else {
            optionIndex --;
        }
    }

    else if (this.id === 'next') {
        index++;

        if (optionIndex === 4) {
            optionIndex = 0;
        } else {
            optionIndex++;
        }
    }
    slide();
}

function optionFunc() {
    let i = Number(this.getAttribute('option-index'));
    index = i + 1;
    optionIndex = i;
    slide();
}
slider.addEventListener('transitionend', () => {
    if(slides[index].id === 'last') {
        slider.style.transition = 'none';
        index.slides.length - 2;
        slider.style.transform = 'translateX(' + (-size * index) + 'px';
    }
    else if (slides[index].id === 'first') {
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = 'translateX(' + (-size * index) + 'px';
    }
})
buttons.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(option => option.addEventListener('click', optionFunc));