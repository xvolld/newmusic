// Set the date of the new music release
var releaseDate = new Date("July 20, 2023 00:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function() {

  // Get the current date and time
  var currentDate = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = releaseDate - currentDate;

  // Calculate the days, hours, minutes and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display the release message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "The new music is now available!";
  }
}, 1000);