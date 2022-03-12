// Set the date we're counting down to
var daysCount = new Date("dec 31, 2022 00:00:00").getTime();


// Update the count down every 1 second
var count = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var time = daysCount - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("Time-diplay").innerHTML = days + " " + hours + " "
  + minutes + " " + seconds + " ";
    
  // If the count down is over, write some text 
  if (time < 0) {
    clearInterval(count);
    document.getElementById("sphe").innerHTML = "happy New Year";
  }
}, 1000);
