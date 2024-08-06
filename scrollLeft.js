function scrollLeft() {
  const slider = document.querySelector(".products-slider-with-price");
  slider.scrollBy({
    left: -200,
    behavior: "smooth",
  });
}
function scrollRight() {
  const slider = document.querySelector(".products-slider-with-price");
  slider.scrollBy({
    left: 200,
    behavior: "smooth",
  });
}
showSlides(); // Show initial slide

function scrollLeft() {
  const slider = document.querySelector(".products-slider-with-price");
  slider.scrollBy({
    left: -200,
    behavior: "smooth",
  });
}
