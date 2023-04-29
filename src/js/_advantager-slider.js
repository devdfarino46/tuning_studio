const advantagerSlider = document.querySelectorAll('.content__advantager-slider-wripper').forEach((elem) => {
    const advantagerSliderImgs = elem.querySelector('.content__advantager-slider-imgs-wrapper');
    const advantagerSliderDescrs = elem.querySelector('.content__advantager-slider-descrs-wrapper');

    const advantagerSliderImgWidth = advantagerSliderImgs.getBoundingClientRect().width;
    const advantagerSliderDescrWidth = advantagerSliderDescrs.getBoundingClientRect().width;

    const advantagerSliderPrevBtn = elem.querySelector('.content__advantager-slider-prev-btn');
    const advantagerSliderNextBtn = elem.querySelector('.content__advantager-slider-next-btn');


    advantagerSliderNextBtn.addEventListener('click', () => {
        advantagerSliderImgs.scrollBy({
            left: advantagerSliderImgWidth
        });
        advantagerSliderDescrs.scrollBy({
            left: advantagerSliderDescrWidth
        });
    });

    advantagerSliderPrevBtn.addEventListener('click', () => {
        advantagerSliderImgs.scrollBy({
            left: -advantagerSliderImgWidth
        });
        advantagerSliderDescrs.scrollBy({
            left: -advantagerSliderDescrWidth
        });
    });
});

