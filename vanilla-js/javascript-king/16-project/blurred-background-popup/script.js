const buttonEl = document.querySelector(".btn");
const containterEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

buttonEl.addEventListener("click", () => {
  containterEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  containterEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
