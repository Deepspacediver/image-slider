import {
  slideFrame,
  removeCurrentActiveClass,
  getCurrentActiveSlide,
} from "./slideShowFunctionality.js";

const navSlider = document.querySelector("ul.navbar");

function getArrayOfSlides() {
  const imgArray = Array.from(slideFrame.children);
  return imgArray;
}
console.log(getArrayOfSlides());

function changeSlide(target) {
  if (target.tagName === "LI") {
    const imgIndex = Number(target.dataset.slideId);
    const chosenNextSlide = getArrayOfSlides()[imgIndex];
    
    if (chosenNextSlide.classList.contains("active")) return;
    console.log(chosenNextSlide);
    removeCurrentActiveClass(getCurrentActiveSlide());
    chosenNextSlide.classList.add("active");
  }
}

navSlider.addEventListener("click", (e) => {
  changeSlide(e.target);
});
