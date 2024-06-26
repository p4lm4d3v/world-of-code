const containerEl = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColor();

function generateColor() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColor = "#" + randomColor();
    colorContainerEl.style.backgroundColor = newColor;
    colorContainerEl.innerHTML = newColor;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let color = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const rndNum = Math.floor(Math.random() * chars.length);
    color += chars[rndNum];
  }
  return color;
}
