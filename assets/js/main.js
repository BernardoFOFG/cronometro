window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var minutes = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
  };
  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  };
  function startTime() {
    tens++;
    
    if (tens > 99) {
      seconds++;
      tens = 0;
    }
    if (seconds > 59) {
      minutes++;
      seconds = 0;
    }
    
    appendTens.innerHTML = (tens <= 9) ? "0" + tens : tens;
    appendSeconds.innerHTML = (seconds <= 9) ? "0" + seconds : seconds;
    appendMinutes.innerHTML = (minutes <= 9) ? "0" + minutes : minutes;
  }
};
