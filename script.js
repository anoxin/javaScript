let title =  prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', '12000 рублей');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice1');
let servicePrice1 = prompt('Сколько это будет стоить?', '1000 рублей');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice2');
let servicePrice2 = prompt('Сколько это будет стоить?', '1500 рублей');
let fullPrice = parseFloat(screenPrice) + parseFloat(servicePrice1) + parseFloat(servicePrice2);
let rollback = 30;
const percentageOfRollback = fullPrice * (rollback/100);
let servicePercentPrice = fullPrice - percentageOfRollback;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessqage = function(price) {
    if (fullPrice > 30000) {
        return 'Даем скидку в 10%';
    } else if (price < 30000 && price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
    }  else {
        return 'Что то пошло не так';
    }
};


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessqage(fullPrice));
console.log(Math.ceil(servicePercentPrice));