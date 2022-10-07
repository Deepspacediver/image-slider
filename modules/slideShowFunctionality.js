const slideFrame = document.querySelector(".slide-frame");
const previousSlideArrow = document.querySelector(
  "img[data-previous-slide-arrow]"
);
const nextSlideArrow = document.querySelector("img[data-next-slide-arrow]");

function removeCurrentActiveClass(currentSlide) {
  const currentActiveSlide = currentSlide;
  currentActiveSlide.classList.remove("active")

}
function getCurrentActiveSlide() {
  const currentActiveSlide = document.querySelector(".active");
  return currentActiveSlide;
}

function changeNextSlide(currentSlide) {
  const currentActiveImg = currentSlide;
  removeCurrentActiveClass(currentActiveImg)

  if (currentActiveImg.nextElementSibling === null)
    slideFrame.firstElementChild.classList.add("active");
  currentActiveImg.nextElementSibling.classList.add("active");
}

function changePreviousSlide(currentSlide) {
  const currentActiveImg = currentSlide;
  removeCurrentActiveClass(currentActiveImg);

  if (currentActiveImg.previousElementSibling === null)
    slideFrame.lastElementChild.classList.add("active");
  currentActiveImg.previousElementSibling.classList.add("active");
}

nextSlideArrow.addEventListener("click", () => {
  changeNextSlide(getCurrentActiveSlide());
});

previousSlideArrow.addEventListener("click", () => {
  changePreviousSlide(getCurrentActiveSlide());
});
