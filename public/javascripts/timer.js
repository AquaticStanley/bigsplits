var time = 0;
var startTime;
var intervalTime = 10;
var timer;


function startTimer(){
    if(timer == undefined){
        startTime = new Date().getTime();
        timer = setInterval(addTime, intervalTime);
    }
}

function addTime(){
    time = new Date().getTime() - startTime;
    updateDisplay();
}

function updateDisplay(){
    sec = "" +  Math.floor((time%60000)/10);
    while(sec.length < 4) sec = "0" + sec;
    sec = sec.slice(0, 2) + "." + sec.slice(2);
    min = "" + Math.floor((time%3600000)/60000);
    while(min.length < 2) min = "0" + min;
    hour = "" + Math.floor(time/3600000);
    while(hour.length < 2) hour = "0" + hour;
    $("#timerDisplay").text( hour + ":" + min + ":" + sec);
}

function stopTimer(){
    time = new Date().getTime() - startTime;
    clearInterval(timer);
    timer = undefined;
    updateDisplay();
}