/* 

When I click the start, stop or reset button
Then start should start, stop or reset the timer.
If I click start, it will make the number rise and start 
the timer.
If I click stop, it will stop the timer where its at.
If I click reset, it will go back to zero.

*/

const timer = document.getElementById("stopwatch")
let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

// Start Timer

let startTimer = () => {
    if (stopTime == true) {
        stopTime = false;
        timerCycle()
    }
}

// Stop Timer 

let stopTimer = () => {
    if (stopTime == false) {
        stopTime = true;
    }
}

// Cycles through the time for start, stop and reset

let timerCycle = () => {
    if (stopTime == false) {
        sec = parseInt(sec);
        hr = parseInt(hr);
        min = parseInt(min);
        
        // Add seconds
        sec += 1;

        // Checks if seconds is equal to 60
        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        // Checks if minutes is equal to 60
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }

        // Makes sure that time is added to the zero

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if (min < 10 || min == 0) {
            min = "0" + min;
        }
        if (hr < 10 || min == 0) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec; 

        
        // Executes function timerCycle after one second 

        setTimeout("timerCycle()", 1000)
    }
}

let resetTimer = () => {
    if (stopTime == false) {
        stopTime = true;
        sec = 0;
        min = 0;
        hr = 0;
        
        timer.innerHTML = "00:00:00"
    }
    
    
}



