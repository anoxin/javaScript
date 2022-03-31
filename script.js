let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 30;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let percentageOfRollback;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title =  prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
    }
    while(!isNumber(screenPrice));
    adaptive = confirm('Нужен ли адаптив на сайте?');
    screenPrice = +screenPrice;
};

const getAllServicePrices = function () {
    let sum = 0;
    let answer;

    for(let i = 0; i < 2; i++) {
        if (i === 0 ) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice1');
        } else if (i === 1 ) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice2');
        }

        do {
            answer = prompt('Сколько это будет стоить?', '1000');
        }
        while(!isNumber(answer));
        
        sum += +answer;
    }

    return sum;

};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
    return fullPrice - percentageOfRollback;

};

function getTitle(newTitle, startSymbol) {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
  
}

const getRollbackMessqage = function(price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price < 30000 && price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
    }  else {
        return 'Что то пошло не так';
    }
};

// screenPrice = parseFloat(screenPrice);
// servicePrice1 = parseFloat(servicePrice1);
// servicePrice2 = parseFloat(servicePrice2);

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
percentageOfRollback = fullPrice * (rollback/100);
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);



showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessqage(fullPrice));

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + 
' рублей и стоимость разработки сайта ' + fullPrice + ' рублей');