const myTime = document.getElementById("time");

let start = function () {
    const myTime = new Date();
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const myMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 
    'Октября', 'Ноября', 'Декабря'];
    let textHours = 'час';
    let textMinutes = 'минут';
    let textSecond = 'секунд';

    let dayIndex = myTime.getDay() + 6;
    let date = myTime.getDate();
    let month = myTime.getMonth();
    let year = myTime.getFullYear();
    let hours = myTime.getHours();
    let minutes = myTime.getMinutes();
    let second = myTime.getSeconds();
    let month2 = myMonth[month];
    
    let funcData = function () {
    if (hours == 0 || (hours > 4 && hours < 21)) {
            textHours = textHours + 'ов';
        }
        if ((hours > 1 && hours < 5) || (hours > 21 && hours < 24)) {
            textHours = textHours + 'а';
        }
        
        
        if (minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
            textMinutes = textMinutes + 'а';
        }
        if ((minutes > 1 && minutes < 5) || (minutes > 21 && minutes < 25) ||
        (minutes > 31 && minutes < 35)  || (minutes > 41 && minutes < 45)  || (minutes > 51 && minutes < 55)) {
            textMinutes = textMinutes + 'ы';
        }
        
        if (second == 1 || second == 21 || second == 31 || second == 41 || second == 51) {
            textSecond = textSecond + 'а';
        }
        if ((second > 1 && second < 5) || (second> 21 && second < 25) ||
        (second > 31 && second < 35)  || (second > 41 && second < 45)  || (second > 51 && second < 55)) {
            textSecond = textSecond + 'ы';
        }
    
    };
    let funcData2 = function (el) {
        if (el.toString().length < 2) {
            el = '0' + el; 
        }
        return el;
    };
    let myDay = function (el) {
        if (el > 6) {
            el = el - 7;
        }
        return el;
    };
    
    funcData();
    
    let time = 'Сегодня ' + week[myDay(dayIndex)] + ', ' + date + ' ' + month2 + ' ' + year + 
    ' года, ' + hours + ' ' + textHours + ' ' + minutes + ' ' + textMinutes + ' ' + second + ' ' + textSecond;
    
    let time2 = funcData2(date) + '.' + funcData2(month) + '.' + funcData2(year) + 
    ' - ' + funcData2(hours) + ':' + funcData2(minutes) + ':' + funcData2(second);

    // let dev = 

    // myTime.textContent = dev;

    return `${time}` + ' \n ' +  `${time2}`;
};

let timerId = setInterval(() => myTime.innerText = start(), 1000);

