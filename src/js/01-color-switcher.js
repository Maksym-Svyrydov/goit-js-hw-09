const btnStartEl = document.querySelector('button[data-start]');
const btnStoptEl = document.querySelector('button[data-stop]');
const windowEl = document.querySelector('body');

btnStoptEl.disabled = true;

let intrval = null;

btnStartEl.addEventListener('click', onBtnStart);
btnStoptEl.addEventListener('click', onBtnStop);

function onBtnStart(e) {
  intrval = setInterval(colorSwitcher, 1000);
  btnStartEl.disabled = true;
  btnStoptEl.disabled = false;
}

function onBtnStop(e) {
  clearInterval(intrval);
  btnStartEl.disabled = false;
  btnStoptEl.disabled = true;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function colorSwitcher() {
  windowEl.style.backgroundColor = getRandomHexColor();
}
