window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


    function getTimeRemaining(deadline){
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor(timeRemaining / 60) % 60,
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds};
    }

    function updateClock(){

        const timer = getTimeRemaining('23 december 2020 22:03');

        let indexInterval; 
        if(!indexInterval && timer.timeRemaining > 0){ 
            indexInterval = setInterval(updateClock, 1000);     
        }
        else if(timer.timeRemaining < 0){
            console.log(indexInterval);
            clearInterval(indexInterval);
            console.log(indexInterval);
            timerHours.textContent = '00'; 
            timerMinutes.textContent = '00'; 
            timerSeconds.textContent = '00'; 
            return;
        }

        timerHours.textContent = (timer.hours > 9) ? timer.hours : '0' + timer.hours;
        timerMinutes.textContent = (timer.minutes > 9) ? timer.minutes : '0' + timer.minutes;
        timerSeconds.textContent = (timer.seconds > 9) ? timer.seconds : '0' + timer.seconds;

    }

    updateClock();
    });

