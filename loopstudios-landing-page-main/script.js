const open = document.querySelector('.header__nav--hamburger');

const close = document.querySelector('.close__mob');
const mobMenu = document.querySelector('.header__nav--mob');

open.addEventListener('click', function(){
    mobMenu.classList.add('mobMenuSlider');
});

close.addEventListener('click', function() {
    mobMenu.classList.remove('mobMenuSlider');
});