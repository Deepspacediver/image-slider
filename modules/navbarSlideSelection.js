import {
  slideFrame,
  removeCurrentActiveClass,
  getCurrentActiveSlide,
  resetTimer,
  navSlider,
} from "./slideShowFunctionality.js";

/* function getArrayOfSlides() {
  const imgArray = Array.from(slideFrame.children);
  return imgArray;
}
 */
function changeSlide(target) {
  if (target.tagName === "LI") {
    const navIndex = target.dataset.slideId;
    const chosenNextSlide = slideFrame.querySelector(
      `[data-img-index="${navIndex}"]`
    );

    if (chosenNextSlide.classList.contains("active")) return;

    const currentActiveSlide = getCurrentActiveSlide()
    removeCurrentActiveClass(currentActiveSlide);
    chosenNextSlide.classList.add("active");

    const previousShownNav = navSlider.querySelector(".current-slide");
    previousShownNav.classList.remove("current-slide");
    target.classList.add("current-slide");
  }
}

navSlider.addEventListener("click", (e) => {
  changeSlide(e.target);
  resetTimer();
});
