var time = 0;
var startTime;
var intervalTime = 10;
var timer;
var splitCounter = 0;
var splits = [10000, 20000, 30000, 40000];


function startTimer(){
    if(timer == undefined){
        startTime = new Date().getTime();
        timer = setInterval(clockLoop, intervalTime);
    }
}

function clockLoop(){
    time = new Date().getTime() - startTime;
    updateDisplay();
}

function updateDisplay(){
     $("#timerDisplay").text(formatTime(time));
}

function stopTimer(){
    time = new Date().getTime() - startTime;
    clearInterval(timer);
    timer = undefined;
    updateDisplay();
}

function formatTime(p_time){
    var sec = "" +  Math.floor((p_time%60000)/10);
    while(sec.length < 4) sec = "0" + sec;
    sec = sec.slice(0, 2) + "." + sec.slice(2);
    var min = "" + Math.floor((time%3600000)/60000);
    while(min.length < 2) min = "0" + min;
    var hour = "" + Math.floor(time/3600000);
    while(hour.length < 2) hour = "0" + hour;
    return hour + ":" + min + ":" + sec;
}

function split(){
    var split = new Date().getTime() - startTime;
    $("splitTime" + splitCounter).text(split);
    var splitDifference = split - splits[splitcounter];
    $("splitDifference" + splitCounter).text()
    splitCounter++;
}