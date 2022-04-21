let correctsAndShowsTheTime = function () {
    const myTime = new Date();
    let date = myTime.toLocaleDateString("ru", {weekday: "long", year: "numeric", month: "long", day: "numeric"});
    let minutes = myTime.getMinutes();
    
    let correctsWordEndings = function (num, array) {
        num = +(num + '').substr(-2);
        if (num == 0 || (num > 4 && num < 21)) {
            return `${num} ${array[2]}`;
        }
        else if ((num > 1 && num < 5) || (minutes > 21 && minutes < 25) ||
        (num > 31 && num < 35)  || (num > 41 && num < 45)  || (num > 51 && num < 55) ||
        (num > 61 && num < 65)  || (num > 71 && num < 75)  || (num > 81 && num < 85) || (num > 91 && num < 95)) {
            return `${num} ${array[1]}`;
        } 
        else  if (num == 1 || num == 21 || num == 31 || num == 41 || num == 51 || num == 61 ||
          num == 71 || num == 81 || num == 91) {
            return `${num} ${array[0]}`;
        } else {
            return `${num} ${array[2]}`;
        }
    
    };

    let addsZero  = function (el) {
        if (el.toString().length < 2) {
            el = '0' + el; 
        }
        return el;
    };
    
    let typeOfTime1 = 'Сегодня ' + `${date.toUpperCase()[0]}${date.slice(1, -1)}ода` +
    ' ' + `${
        correctsWordEndings(myTime.getHours(), ['час', 'часа', 'часов'])
      } ${
        correctsWordEndings(myTime.getMinutes(), ['минута', 'минуты', 'минут'])
      } ${
        correctsWordEndings(myTime.getSeconds(), ['секунда', 'секунды', 'секунд'])
      }`;
    
    let typeOfTime2 = myTime.toLocaleDateString("ru", {year:"numeric", month:"numeric", day: "numeric"}) + 
    ' - ' + myTime.toLocaleTimeString("ru", {hour: "numeric", minute: "numeric", second: "numeric"});

    return `${typeOfTime1}` + ' \n ' +  `${typeOfTime2}`;
};

setInterval(() => document.getElementById("time").innerText = correctsAndShowsTheTime(), 1000);

