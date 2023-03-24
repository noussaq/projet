const countdown = document.querySelector('.countdown');

// Set launch date (in milliseconds)
const launchDate = new Date('December 31, 2023 23:59:59').getTime();

// Update countdown every second
const interval = setInterval(() => {
  // Get current date and time (in milliseconds)
  const now = new Date().getTime();

  // Calculate time remaining until launch date
  const timeRemaining = launchDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update HTML with countdown values
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // If launch date has passed, stop countdown
  if (timeRemaining < 0) {
    clearInterval(interval);
    countdown.innerHTML = 'Launch time!';
  }
}, 1000);