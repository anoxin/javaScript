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

console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    alert('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    alert('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    alert('Скидка не предусмотрена');
}  else {
    alert('Что то пошло не так');
}