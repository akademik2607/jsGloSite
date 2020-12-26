window.addEventListener('DOMContentLoaded', function(){
    'use strict';


    //Таймер
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

    function updateClock(indexInterval){

        const timer = getTimeRemaining('31 december 2020 22:03');

        if(timer.timeRemaining < 0){
            clearInterval(indexInterval);
            timerHours.textContent = '00'; 
            timerMinutes.textContent = '00'; 
            timerSeconds.textContent = '00'; 
            return;
        }

        timerHours.textContent = (timer.hours > 9) ? timer.hours : '0' + timer.hours;
        timerMinutes.textContent = (timer.minutes > 9) ? timer.minutes : '0' + timer.minutes;
        timerSeconds.textContent = (timer.seconds > 9) ? timer.seconds : '0' + timer.seconds;

    }

        let indexInterval = setInterval(updateClock, 1000);     
    updateClock(indexInterval);


    //Меню
        const toggleMenu = () => {
            const btnMenu = document.querySelector('.btn-menu'),
                menu = document.querySelector('menu');
        };
    });

