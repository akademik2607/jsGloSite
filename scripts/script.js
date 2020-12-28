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

   
    updateClock();

 //меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const actionMenu = () =>{
            menu.classList.toggle('active-menu');

        };

        btnMenu.addEventListener('click', actionMenu); 
                menu.addEventListener('click', (event) => {
            let target = event.target,
            targetLi = target.closest('menu ul li');
            if(target === closeBtn || targetLi){
                actionMenu();        
            }
        });

    };
    toggleMenu();    

//popup
    function popupAnimation() {
        const popUpContent = document.querySelector('.popup-content');
            popUpContent.style.top = '-100%';
        const indexInterval = setInterval(startAnimation, 10);
        function startAnimation (){
            popUpContent.style.top = `${popUpContent.offsetTop + 5}px`; 
            if(popUpContent.offsetTop > 50) clearInterval(indexInterval);
        };
    }


    const togglePopUp = () => {
        const popup = document.querySelector('.popup'), 
            popupBtn = document.querySelectorAll('.popup-btn');
        popupBtn.forEach((element) => {
            element.addEventListener('click', () => {


                popup.style.display = 'block';

                if(window.screen.width >= 768)popupAnimation();
            });
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            }
            else{
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                }
            }
        });
    };
    
    
togglePopUp();

//табы

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (element) => {
        for(let i = 0; i < tabContent.length; ++i){
            if(i === element){
                tabContent[i].classList.remove('d-none');
                tab[i].classList.add('active');
            }
            else{
                tabContent[i].classList.add('d-none');
                tab[i].classList.remove('active');
            }
        }
    };
    tabHeader.addEventListener('click', (event) => {
    let target = event.target.closest('.service-header-tab');

            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
                return;
            }
    });
};
tabs();

    });

