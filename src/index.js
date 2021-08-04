const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// получаем ссылки на элементы
const refs = {
  bodyElement: document.querySelector("#body"),
  buttonStart: document.querySelector("#start"),
  buttonStop: document.querySelector("#stop"),
};

let switchId = null;

function colorSwitch() {
  refs.buttonStart.setAttribute("disabled", true);
  switchId = setInterval(() => {
    refs.bodyElement.style.backgroundColor =
      colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
}

function stopColorSwitch() {
  refs.buttonStart.removeAttribute("disabled");
  clearInterval(switchId);
}

refs.buttonStart.addEventListener("click", colorSwitch);
refs.buttonStop.addEventListener("click", stopColorSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
