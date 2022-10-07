const slideFrame = document.querySelector(".slide-frame");
const previousSlideArrow = document.querySelector(
  "img[data-previous-slide-arrow]"
);
const nextSlideArrow = document.querySelector("img[data-next-slide-arrow]");

function removeCurrentActiveClass(currentSlide) {
  const currentActiveSlide = currentSlide;
  currentActiveSlide.classList.remove("active");
}
function getCurrentActiveSlide() {
  const currentActiveSlide = document.querySelector(".active");
  return currentActiveSlide;
}

function changeNextSlide() {
  const currentActiveImg = getCurrentActiveSlide();
  removeCurrentActiveClass(currentActiveImg);

  if (currentActiveImg.nextElementSibling === null) slideFrame.firstElementChild.classList.add("active")
  else currentActiveImg.nextElementSibling.classList.add("active");
}

function changePreviousSlide() {
  const currentActiveImg = getCurrentActiveSlide();
  removeCurrentActiveClass(currentActiveImg);

  if (currentActiveImg.previousElementSibling === null)
    slideFrame.lastElementChild.classList.add("active");
  else currentActiveImg.previousElementSibling.classList.add("active");
}

let autoChangeSlide = setInterval(changeNextSlide, 5000)
function resetTimer() {
  clearInterval(autoChangeSlide)
  autoChangeSlide = setInterval(changeNextSlide, 5000)

}

nextSlideArrow.addEventListener("click", () => {
  changeNextSlide();
  resetTimer()
});

previousSlideArrow.addEventListener("click", () => {
  changePreviousSlide();
  resetTimer()
  
});

export { slideFrame, removeCurrentActiveClass, getCurrentActiveSlide, resetTimer };
