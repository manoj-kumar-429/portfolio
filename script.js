use`strict`;

/*
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);
  const slider = document.querySelector(`.slider`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  const dotContainer = document.querySelector(`.dots`);
  let curSlide = 0;
  const maxSlide = slides.length - 1;
  // slider.style.transform = `translateX(-400px) scale(0.3)`;
  // slider.style.overflow = `visible`;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
    activeDot(slide);
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide;
    else curSlide--;
    goToSlide(curSlide);
    // activeDot(curSlide);
  };
  btnRight.addEventListener(`click`, nextSlide);
  btnLeft.addEventListener(`click`, prevSlide);
  document.addEventListener(`keydown`, function (e) {
    if (e.key === `ArrowRight`) nextSlide();
    e.key === `ArrowLeft` && prevSlide();
  });
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class = "dots__dot" data-slide = ${i}></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll(`.dots__dot`)
      .forEach((dot) => dot.classList.remove(`dots__dot--active`));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  dotContainer.addEventListener(`click`, function (e) {
    if (!e.target.classList.contains(`dots__dot`)) return;
    // console.log(e.target.dataset.slide);
    curSlide = Number(e.target.dataset.slide);
    goToSlide(curSlide);
    // activeDot(slide);
  });
  const init = function () {
    createDots();
    goToSlide(0);
    // activeDot(0);
  };
  init();
};
*/
// slider();
