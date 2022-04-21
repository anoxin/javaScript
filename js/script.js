'use strinct';

const title = document.getElementsByTagName('h1')[0];
const buttonPluse = document.querySelector('.screen-btn'); 
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];


const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];


const range = document.querySelector('.rollback input[type="range"]');
const span = document.querySelector('span.range-value');

let screens = document.querySelectorAll('.screen');
let sumClickPluse = 0;

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  screenNumber: 0,
  adaptive: true,
  rollback: 0,
  fullPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle(); 
    buttonPluse.addEventListener('click', appData.addScreenBlock);
    startBtn.addEventListener('click', appData.selectValue);
    range.addEventListener('input', appData.spanRange);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    // appData.logger();
    appData.showResult(); 
    appData.default();
  },

  spanRange: function (event) {
    span.textContent = event.target.value + '%';
    appData.rollback = +event.target.value;
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback/100);
    totalCountRollback.value = appData.servicePercentPrice;
  },

  selectValue: function () {
    let stop = false;
    for (let i = 0; i <= sumClickPluse; i++) {
      let numSelect = +document.querySelectorAll('select')[i].value;
      let numInput = +document.querySelectorAll('input')[i].value;
      if (numSelect == 0 || numInput == 0) {
        stop = true;
      }
    }
    if (stop == false) {
      appData.start();
    }  
  },

  showResult: function() {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.screenNumber;

  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
         id: index,
         name: selectName,
         price: +select.value * +input.value,
         count: +input.value
      });
    });
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });

  },

  addScreenBlock: function () {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector('input').value = '';
  
    screens[screens.length - 1].after(cloneScreen);
    sumClickPluse++;
  },

  addPrices: function() {
    
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let screen of appData.screens) {
      appData.screenNumber += +screen.count;
    }


    for(let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for(let key in appData.servicesPercent) {
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100);
    }
    appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback/100);
  
  },

  default: function () {
    appData.title = '';
    appData.screens = [];
    appData.screenPrice = 0;
    appData.screenNumber = 0;
    appData.adaptive = true;
    // appData.fullPrice = 0;
    appData.servicePricesPercent = 0;
    appData.servicePricesNumber = 0;
    appData.servicePercentPrice = 0;
    appData.servicesPercent = {};
    appData.servicesNumber = {};
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  }
};

appData.init();
