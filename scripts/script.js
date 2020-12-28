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

    function updateClock(){

        const timer = getTimeRemaining('23 december 2020 22:03');

        if(timer.timeRemaining < 0){
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

        let indexInterval = setInterval(updateClock, 1000);     

   
    updateClock();

 //меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const actionMenu = () =>{
            /*if(!menu.style.transform || menu.style.transform === 'translate(-100%)'){
                menu.style.transform = 'translate(0)';
            } else{
                menu.style.transform = 'translate(-100%)';
            }*/
            menu.classList.toggle('active-menu');

        };

        btnMenu.addEventListener('click', actionMenu); 
        closeBtn.addEventListener('click', actionMenu);

        menuItems.forEach((item) => {
            item.addEventListener('click', actionMenu);
        });

    };
    toggleMenu();    

//popup
    function popupAnimation() {
        const popUpContent = document.querySelector('.popup-content');
            popUpContent.style.top = '-100%';
        const indexInterval = setInterval(startAnimation, 10);
        function startAnimation (){
            console.log('indexInervalPopup: ' + indexInterval); 
            popUpContent.style.top = `${popUpContent.offsetTop + 5}px`; 
            console.log(popUpContent.offsetTop);
            console.log(indexInterval);
            if(popUpContent.offsetTop > 50) clearInterval(indexInterval);
        };
    }


    const togglePopUp = () => {
        const popup = document.querySelector('.popup'), 
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');
        console.dir(popup);
        popupBtn.forEach((element) => {
            element.addEventListener('click', () => {


                popup.style.display = 'block';

                if(window.screen.width >= 768)popupAnimation();
            });
        });
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    
    
togglePopUp();




    });

