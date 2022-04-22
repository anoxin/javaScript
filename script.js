let correctsAndShowsTheTime = function () {
    const myTime = new Date();
    let date = myTime.toLocaleDateString("ru", {weekday: "long", year: "numeric", month: "long", day: "numeric"});
    let minutes = myTime.getMinutes();

    let correctsWordEndings = (num, array) => { 
      switch (true) {
        case +((num += '').substr(-2)) > 10  &&  
        +((num += '').substr(-2)) <= 20 : 
        return num  + ' ' + array[2];
        case num % 10 === 0: return num  + ' ' + array[2];
        case num % 10 === 1: return num  + ' ' + array[0];
        case num % 10 < 5: return num  + ' ' + array[1];
        default: return num  + ' ' + array[2];
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

