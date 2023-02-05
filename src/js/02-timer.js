import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
      return;
    } else {
      options.defaultDate = selectedDates[0];
    }
  },
};

flatpickr('input[id=datetime-picker]', options);

const buttonStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let intervalId = null;

buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  return (intervalId = setInterval(countDownTimeToSelectedDate, 1000));
}

function countDownTimeToSelectedDate() {
  const currentDate = Date.now();
  let diff = options.defaultDate - currentDate;

  if (diff <= 0) {
    diff = 0;
    clearInterval(intervalId);
  }

  const { days, hours, minutes, seconds } = convertMs(diff);

  daysEl.textContent = `${addZero(days)}`;
  hoursEl.textContent = `${addZero(hours)}`;
  minutesEl.textContent = `${addZero(minutes)}`;
  secondsEl.textContent = `${addZero(seconds)}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(number) {
  return String(number).padStart(2, 0);
}
