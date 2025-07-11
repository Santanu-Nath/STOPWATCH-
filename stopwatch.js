let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0o0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

    /*let msecString;
    if(msec < 10){
        msecString = `0${msec}`;

    }
    else{
        msecString = msec;
    }

    let secsString;
    if(secs < 10){
        secsString = `0${secs}`;

    }
    else{
        secsString = secs;
    }

    let minsString;
    if(mins < 10){
        minsString = `0${mins}`;

    }
    else{
        minsString = mins;
    }*/

}

