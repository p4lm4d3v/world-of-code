const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

const MAX_LENGTH = textareaEl.getAttribute("maxLength");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  const n = textareaEl.value.length;
  totalCounterEl.innerText = n;
  remainingCounterEl.innerText = MAX_LENGTH - n;
}
