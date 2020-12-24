'use strict';


const goodDay = document.querySelector('.good-day'),
    day = document.querySelector('.day'),
    currentTime = document.querySelector('.current-time'),
    dayCount = document.querySelector('.day-count'),
    weekDays = ['Воскресение',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'];

let timeNow = new Date(),
    timeStr = timeNow.toTimeString().slice(0, 8);

const getHello = () => {
    const hours = timeNow.getHours();
    let helloStr;

    if(hours> 5 && hours < 12){
        helloStr = 'Доброе утро!';
    }
    else if(hours >= 12 && hours < 16){
        helloStr = 'Добрый день!';
    }
    else if(hours >= 16 && hours < 24){
        helloStr = 'Добрый вечер!';
    }
    else{
        helloStr = 'Доброй ночи!';
    }
    return helloStr;
};

const getDayOfWeek = () => `Сегодня ${weekDays[timeNow.getDay()]}`;
;

const getCurrentTime = () => {
    if(timeNow.getHours() > 12){
        timeStr += ' PM';
        const temp = timeNow.getHours() - 12;
        if(temp < 10){
            timeStr = timeStr.replace(/\d+/, '0' + temp);
        }
        else{
            timeStr = timeStr.replace(/\d+/, temp);

        }
    }
    else{
        timeStr += ' AM';
    }
    return timeStr;
};

const newYearTimer = () => {
   const newYearTime = new Date('1 january 2021 00:00:00').getTime(), 
        days = Math.floor((newYearTime - timeNow.getTime()) / 1000 / 60 / 60 / 24); 
        console.log("Новый год: " + newYearTime);
   return `До нового года осталось ${days} дней`;
};

const showResult = () => {
       goodDay.textContent = getHello();
       day.textContent = getDayOfWeek();
       currentTime.textContent = `Текущее время: ${getCurrentTime()}`;
       dayCount.textContent = newYearTimer();
};

showResult();
console.log(timeStr);
console.log(timeNow.toTimeString());
console.log(timeNow.getHours());
console.log(timeStr);
console.log(timeNow);
