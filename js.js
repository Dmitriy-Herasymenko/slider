const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');
const bakcgrounds = document.querySelectorAll('.bg');

let index = 0;
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
        index === 0 ? index = 4 : index--;
        optionIndex === 0 ? optionIndex = 4 : optionIndex--;
    }

    else if (this.id === 'next') {
        index === 4 ? index = 0 : index++;
        optionIndex === 4 ? optionIndex = 0 : optionIndex++;
    }
    slide();
}

function optionFunc() {
    let i = Number(this.getAttribute('option-index'));
    index = i;
    optionIndex = i;
    slide();
}


options.forEach(option => option.addEventListener('click', optionFunc));
buttons.forEach(btn => btn.addEventListener('click', btnCheck));