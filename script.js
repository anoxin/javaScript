const title = 'lesson02';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 100;
const rollback = 50;
const fullPrice = 50000000;
const adaptive = true;

console.log(title)
console.log(screens)
console.log(adaptive)
console.log(screens.length)
console.log('Стоимость верстки экранов ' + `${screenPrice}` + ' долларов')
console.log('Стоимость разработки сайта ' + `${fullPrice}` + ' долларов')

const screensArray = screens.toLowerCase()

console.log(screensArray.split(', '))

const percentageOfRollback = fullPrice * (rollback/100)

console.log( 'Процент отката посреднику за работу ' + `${percentageOfRollback}`)