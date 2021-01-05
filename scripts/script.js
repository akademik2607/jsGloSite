window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //Таймер
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


    const getTimeRemaining = (deadline) => {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
        const seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor(timeRemaining / 60) % 60,
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds};
    };

    const updateClock = () => {

        const timer = getTimeRemaining('1 january 2021 22:03');

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
            closeBtn = document.querySelector('.close-btn');
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


//Слайдер

    const slider = () => {

        const addDots = (slide) => {
            const portfolioDots = document.querySelector('.portfolio-dots');
            for(let i = 0; i < slide.length; ++i){
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                portfolioDots.append(newDot);
            }
        };

        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn');
        
        addDots(slide);
        const dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
        interval;
        dot[currentSlide].classList.add('dot-active');
        
        const prevSlide = (element, index, strClass) => {
            element[index].classList.remove(strClass);
        };

        const nextSlide = (element, index, strClass) => {
            element[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
           interval = setInterval(autoPlaySlide, time); 
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;    
            }
            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide, 'portfolio-item-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if (target.matches('#arrow-left')){
                currentSlide--;
            }else if (target.matches('.dot')){
                dot.forEach((item, index) => {
                    if(item === target){
                        currentSlide = index;
                    }
                });
            }
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
            
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')){
                stopSlide();
            }

        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')){
                startSlide();
            }
        });
        startSlide(1500);
    };
    slider();

//Наведение на фото нашей команды

const command = document.getElementById('command');

const swapPhoto = (event) => {
    const target = event.target;
    if(!target.matches('.command__photo')){
        return;
    }
const tempData = target.src;
    target.src = target.dataset.img;
    target.dataset.img = tempData;
}

command.addEventListener('mouseover', swapPhoto); 
command.addEventListener('mouseout', swapPhoto);

//Калькулятор
const calc = (price = 100) =>{
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if(+calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }

        if(calcDay.value && +calcDay.value < 5){
            dayValue *= 2;
        }else if(calcDay.value && +calcDay.value < 10){
            dayValue *= 1.5;
        }


        if(typeValue && squareValue){
            total = price * typeValue * squareValue * countValue * dayValue;
        }
        totalValue.textContent = Math.round(total);         
    };


    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        if(target === calcType || target === calcSquare ||
            target === calcCount || target === calcDay){
            countSum();
        }
    });

    calcBlock.addEventListener('input', (event) => {
        const target = event.target;
        if(target.matches('select')){
            return;
        }
        target.value = target.value.replace(/\D/, '');
    });
};

calc(100);


//send-AJAX-form

const sendForm = (formId) => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const form = document.getElementById(formId),
        formInputs = form.querySelectorAll('input'),
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form),
            body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1];
        }

        formInputs.forEach((elem) => {
            elem.value = '';
        });

        const errorData = (error) => {
            console.error(error);
            statusMessage.textContent = errorMessage;
        };
        const outputData = () => {
            statusMessage.textContent = succesMessage;
        };

        postData(body)
        .then(outputData)
        .catch(errorData);
        
    });
};


    const postData = (body) => {
            return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {

                if(request.readyState !== 4){
                    return;
                }

                if(request.status === 200){
                    resolve();
                }
                else{
                    reject(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');

            request.send(JSON.stringify(body));
        });
    };
//Валидация полей формы

const validForm = (event) => {
        const target = event.target;
            if(target.name === 'user_name'){
                target.value = target.value.replace(/[^А-Яа-я -]/, '');
                target.pattern = '[А-Яа-я -]{2,50}';
            }else if(target.name === 'user_phone'){
                target.value = target.value.replace(/[^\d\+]/, '');
                target.pattern = '[\\d+]{11,}';
            }else if(target.name === 'user_message'){
                target.value = target.value.replace(/[^\dА-Яа-я \.,\?\:\;\"\'!]/, '');
            }else if(target.name === 'user_email'){
                target.value = target.value.replace(/[^\w-@\.]/, '');
                target.pattern = '[\\w-]+@\\w+\\.[a-zA-z]{2,3}';
            }
             
        };

const formAction = () => {
    const forms = document.querySelectorAll('form');
    forms.forEach((elem) => {
        elem.addEventListener('input', validForm);
        sendForm(elem.id);
    });
};

formAction();

    



});
