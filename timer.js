const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

const parentEl = document.querySelector("#timer-1");
parentEl.insertAdjacentHTML("afterbegin", '<span class="clockface"></span>');
const clockface = document.querySelector(".clockface");

const intervalId = setInterval(() => {
  const currentTime = Date.now();
  const targetDate = new Date("Jul 17, 2020");
  const deltaTime = targetDate - currentTime;

  daysRef.textContent = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
  hoursRef.textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minsRef.textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  secsRef.textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
  clockface.textContent = `${daysRef.textContent}:${hoursRef.textContent}:${minsRef.textContent}:${secsRef.textContent}`;
}, 1000);

function pad(value) {
  return String(value).padStart(2, "0");
}
