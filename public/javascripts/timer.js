var time = 0;
var startTime;
var intervalTime = 10;


function startTimer(){
    startTime = new Date().getTime();
    timer = setInterval(addTime, intervalTime);
}

function addTime(){
    time = new Date().getTime() - startTime;
    updateDisplay();
}

function updateDisplay(){
    sec = Math.floor((time%60000)/10);
    min = Math.floor((time%3600000)/60000);
    hour = Math.floor(time/3600000);
    $("#timerDisplay").text("" + hour + ":" + min + ":" + sec);
}

function stopTimer(){
    time = new Date().getTime() - startTime;
    clearInterval(timer);
    updateDisplay();
}