'use strinct';

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 30,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str) {
    let myCheck = +str;
    return !isNaN(myCheck);
  },

  asking: function () {
    do {
      appData.title =  prompt('Как называется ваш проект?', 'Калькулятор верстки');
      console.log(appData.title);
    } while (appData.isString(appData.title));

    for(let i = 0; i < 2; i++) {
      let name = '';
      let price = 0;
      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (appData.isString(name));
      do {
          price = prompt('Сколько будет стоить данная работа?', '12000');
      } while (!appData.isNumber(price));

        appData.screens.push({id: i, name: name, price: price});
    }

    for(let i = 0; i < 2; i++) {
      let name = '';
      let price = 0;
      do {
        name = prompt('Какой дополнительный тип услуги нужен?') + i;
      } while (appData.isString(name));
        do {
            price = prompt('Сколько это будет стоить?', '1000');
        }
        while(!appData.isNumber(price));

        appData.services[name] = +price;
      
    }   
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    appData.screenPrice = +appData.screenPrice;
  },

  addPrices: function() {
    
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }

    appData.screenPrice = appData.screens.reduce(function(sum, item) {
      return sum += +item.price;
    }, 0);

    for(let key in appData.servise) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
      appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

getServicePercentPrices: function () {
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback/100);

},

getTitle: function (newTitle, startSymbol) {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  
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

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
};

appData.start();
console.log(appData.services);
