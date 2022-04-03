'use strinct';

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 30;
// let fullPrice;
// let allServicePrices;
// let servicePercentPrice;
// let percentageOfRollback;
// let service1;
// let service2;

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  percentageOfRollback: 0,
  service1: '',
  service2: '',

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  asking: function () {
    appData.title =  prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    do {
        appData.screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
    }
    while(!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    appData.screenPrice = +appData.screenPrice;
  },

  getAllServicePrices: function () {
    let sum = 0;
    let answer;

    for(let i = 0; i < 2; i++) {
        if (i === 0 ) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice1');
        } else if (i === 1 ) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'servicePrice2');
        }

        do {
            answer = prompt('Сколько это будет стоить?', '1000');
        }
        while(!appData.isNumber(answer));
        
        sum += +answer;
    }

    return sum;

  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

getServicePercentPrices: function () {
    return appData.fullPrice - appData.percentageOfRollback;

},

getTitle: function (newTitle, startSymbol) {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  
},

  getRollbackMessqage: function(price) {
      if (price > 30000) {
          return 'Даем скидку в 10%';
      } else if (price < 30000 && price > 15000) {
          return 'Даем скидку в 5%';
      } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
      }  else {
         return 'Что то пошло не так';
      }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.percentageOfRollback = appData.fullPrice * (appData.rollback/100);
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle(appData.title);
    appData.logger();
  },

  logger: function () {
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrice);

    for (let key in appData) {
      console.log( key + ': ' + appData[key]);
    }

  }
};

appData.start();




