    'use strict';


    import countTimer from './modules/countTimer';
    import toggleMenu from './modules/toggleMenu';
    import togglePopUp from './modules/togglePopUp';
    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import togglePhoto from './modules/togglePhoto';
    import calc from './modules/calc';
    import formAction from './modules/formAction';
//Таймер
    countTimer();

//меню
    toggleMenu();    

//popup
    togglePopUp();

//табы
    tabs();

//Слайдер
    slider();

//Наведение на фото нашей команды
    togglePhoto();

//Калькулятор
    calc(100);

//send-AJAX-formb и валидация полей формы
    formAction();

