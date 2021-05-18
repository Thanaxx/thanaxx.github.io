var ms = 0, s = 0, m = 0;
var timer;

const stopwatchh = document.querySelector(".stopwatchPart");
const timeLapse = document.querySelector(".laps");

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run(){
    getTimer();
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;
    }
}

function pause(){
    stopTimer();
}

function stop(){
    clearInterval(timer);
    timer = false;
    m = 0 ;
    s = 0;
    ms = 0;
    stopwatchh.textContent = getTimer();
}
function stopTimer(){
    clearInterval(timer);
    timer = false;
}

function getTimer(){
    return stopwatchh.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s: s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart(){
    stop();
    start();
}

function lap(){
    if(timer){
        var li = document.createElement("li");
        li.innerText = getTimer();
        timeLapse.appendChild(li);
    }
}

function resetLapse(){
    timeLapse.innerHTML = "";
}