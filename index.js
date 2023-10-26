const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elepsedTime = 0;
let currentTime = 0;
let pause = true;
let intervalID;
let mins = 0;
let secs = 0;
let ms = 0;

startBtn.addEventListener("click", () => {
  if(pause){
    pause = false;
    startTime = Date.now() - elepsedTime;
    intervalID = setInterval(updateTime, 75) // timer begin with display is refresh using setInterval method
  }
});

pauseBtn.addEventListener("click", () => {
  if(!pause){
    pause = true;
    elepsedTime = Date.now() - startTime;
    clearInterval(intervalID);
  }
});

resetBtn.addEventListener("click", () => {
  pause = true;
  clearInterval(intervalID);
  startTime = 0;
  elepsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timeDisplay.textContent = "00:00:00"
});

function updateTime(){
  elepsedTime = Date.now() - startTime;

  ms = Math.floor((elepsedTime) % 60);
  secs = Math.floor((elepsedTime) / 1000 % 60);
  mins = Math.floor((elepsedTime) / (1000 * 60) % 60);
  
  function pad(unit){
    return (("0" + unit).length > 2) ? unit : "0" + unit;  
  }

  ms = pad(ms)
  secs = pad(secs);
  mins = pad(mins);
  ;

  timeDisplay.textContent = `${mins}:${secs}:${ms}`
};  