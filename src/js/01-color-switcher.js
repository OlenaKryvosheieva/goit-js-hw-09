const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick);

let intervalId = null;
buttonStop.setAttribute('disabled', '');

function onButtonStartClick() {
  if (buttonStart.hasAttribute('disabled')) {
    return;
  }

  buttonStart.setAttribute('disabled', '');
  buttonStop.removeAttribute('disabled', '');

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(document.body.style.backgroundColor);
  }, 1000);
}

function onButtonStopClick() {
  clearInterval(intervalId);
  buttonStop.setAttribute('disabled', '');
  buttonStart.removeAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
