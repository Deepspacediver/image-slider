const slideFrame = document.querySelector(".slide-frame");
const navSlider = document.querySelector("ul.navbar");
const nextSlideArrow = document.querySelector("img[data-next-slide-arrow]");
const previousSlideArrow = document.querySelector(
  "img[data-previous-slide-arrow]"
);

function removeCurrentActiveClass(currentSlide) {
  const currentActiveSlide = currentSlide;
  currentActiveSlide.classList.remove("active");
}

function getCurrentActiveSlide() {
  const currentActiveSlide = document.querySelector(".active");
  return currentActiveSlide;
}

function representCurrentActiveSlide(subsequentSlide) {
  let nextImgIndex;
  const previousShownNav = navSlider.querySelector(".current-slide");

  if (subsequentSlide === null) {
    if (
      previousShownNav.dataset.slideId ===
      slideFrame.lastElementChild.dataset.imgIndex
    ) {
      nextImgIndex = 0;
    } else nextImgIndex = slideFrame.lastElementChild.dataset.imgIndex;
  } else nextImgIndex = Number(subsequentSlide.dataset.imgIndex);

  const correspondingNav = navSlider.querySelector(
    `li[data-slide-id ="${nextImgIndex}"]`
  );
  previousShownNav.classList.remove("current-slide");
  correspondingNav.classList.add("current-slide");
}

function changeNextSlide() {
  const currentActiveImg = getCurrentActiveSlide();
  removeCurrentActiveClass(currentActiveImg);

  const nextImg = currentActiveImg.nextElementSibling;
  if (nextImg === null) slideFrame.firstElementChild.classList.add("active");
  else {
    nextImg.classList.add("active");
  }

  representCurrentActiveSlide(nextImg);
}

function changePreviousSlide() {
  const currentActiveImg = getCurrentActiveSlide();
  removeCurrentActiveClass(currentActiveImg);
  
  const previousImg = currentActiveImg.previousElementSibling;
  if (previousImg === null) slideFrame.lastElementChild.classList.add("active");
  else previousImg.classList.add("active");

  representCurrentActiveSlide(previousImg);
}

//  Timer of automatic change of nav
let autoChangeSlide = setInterval(changeNextSlide, 5000);

function resetTimer() {
  clearInterval(autoChangeSlide);
  autoChangeSlide = setInterval(changeNextSlide, 5000);
}

nextSlideArrow.addEventListener("click", () => {
  changeNextSlide();
  resetTimer();
});

previousSlideArrow.addEventListener("click", () => {
  changePreviousSlide();
  resetTimer();
});

export {
  slideFrame,
  removeCurrentActiveClass,
  getCurrentActiveSlide,
  resetTimer,
  navSlider,
};
