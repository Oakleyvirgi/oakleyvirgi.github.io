const temperature = document.getElementById('temperature').innerHTML;
const wspeed = document.getElementById('wspeed').innerHTML;


let windc = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wspeed, .16)) + (0.4275 * temperature * Math.pow(wspeed, .16));
  if (temperature <= 50 && wspeed > 3) {
     windc = Math.round(windc);
  } else {
     windc = "N/A";
  }
document.getElementById('windc').innerHTML = windc;
