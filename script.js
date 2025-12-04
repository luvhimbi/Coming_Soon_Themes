// to change the target date just provide the date you set will be ready by

const target = new Date("2026-03-31T00:00:00").getTime();

function updateCountdown() {
  //initialization of variables
  const now = Date.now();
  const diff = target - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const liveMessage = document.getElementById("liveMessage");

  // this displays all zeros when the page reaches the target and becomes zero
  if (diff <= 0) {
    // Countdown finished
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    liveMessage.style.display = "block";
    clearInterval(timerInterval);
    return;
  }

  //here is to make sure the timer updates
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // displaying the days ,hours,minutes,seconds
  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Simple notify form handling
document.getElementById("notifyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) return;
  alert("Thanks! We will notify: " + email);
  this.reset();
});
