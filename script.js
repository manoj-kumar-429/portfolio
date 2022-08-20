"use strict";
const mk = document.querySelector(`.mk`);
const nav = document.querySelector(`nav`);
const navLinks = document.querySelector(`.nav__links`);
const hamMenu = document.querySelector(`.ham-menu`);
const crossMenu = document.querySelector(`.cross-menu`);
let returnValue = false;
let x = window.matchMedia("(min-width: 1605px)");
const myFunction = function (x) {
  if (x.matches) {
    mk.setAttribute(`src`, `/images/mk-logo3.svg`);
    returnValue = true;
  } else {
    mk.setAttribute(`src`, `/images/mk-logo2.svg`);
  }
};
let y = window.matchMedia("(max-width: 520px)");
const myFunction2 = function (y) {
  if (y.matches) {
    mk.setAttribute(`src`, `/images/mk-logo.svg`);
    crossMenu.setAttribute(`src`, `/images/cross.svg`);
  } else {
    mk.setAttribute(`src`, `/images/mk-logo2.svg`);
    crossMenu.setAttribute(`src`, `/images/cross-2.svg`);
  }
};
let z = window.matchMedia("(min-width: 855px)");
const myFunction3 = function (z) {
  if (z.matches) {
    navLinks.classList.remove(`hidden`);
    hamMenu.classList.add(`hidden`);
  } else {
    navLinks.classList.add(`hidden`);
    hamMenu.classList.remove(`hidden`);
  }
};

myFunction(x);
x.addListener(myFunction);
if (!returnValue) {
  myFunction2(y);
  y.addListener(myFunction2);
}
myFunction3(z);
z.addListener(myFunction3);
// Nav bar scroll mechanism
navLinks.addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});
const menuToggle = function () {
  hamMenu.classList.toggle(`hidden`);
  crossMenu.classList.toggle(`hidden`);
};
hamMenu.addEventListener(`click`, function () {
  menuToggle();
  navLinks.classList.remove(`hidden`);
  // nav.style.backgroundColor = `#fff`;
  navLinks.style.display = `inline-block`;
  mk.classList.add(`icons-padding`);
  crossMenu.classList.add(`icons-padding`);
});
crossMenu.addEventListener(`click`, function () {
  menuToggle();
  navLinks.classList.add(`hidden`);
  // nav.style.backgroundColor = `#EAF6F6`;
  navLinks.style.display = `none`;
  mk.classList.remove(`icons-padding`);
  crossMenu.classList.remove(`icons-padding`);
});
// sticky nav mechanism

// const header = document.querySelector(`header`);
// const nav = document.querySelector(`nav`);
// const navHeight = nav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry.isIntersecting);
//   if (!entry.isIntersecting) nav.classList.add(`sticky`);
//   else nav.classList.remove(`sticky`);
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);
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
