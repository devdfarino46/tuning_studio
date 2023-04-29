const slider = document.querySelector('.content__slider-wrapper');
let sliderItem = document.querySelector('.content__slider-item');
let sliderItemWidth = sliderItem.getBoundingClientRect().width;
let sliderColumnGap = parseInt(window.getComputedStyle(slider).getPropertyValue('column-gap'));

const sliderPrevBtn = document.querySelector('.content__slider-prev-btn');
const sliderNextBtn = document.querySelector('.content__slider-next-btn');

sliderNextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: sliderItemWidth+sliderColumnGap,
        behavior: 'smooth'
    })
});

sliderPrevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -(sliderItemWidth+sliderColumnGap),
        behavior: 'smooth'
    })
});