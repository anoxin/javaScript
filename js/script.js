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
const customCheckbox = document.querySelector('[for="cms-open"]');
const customCheckbox2 = document.querySelector('.custom-checkbox');
const cmsSelect = document.getElementById('cms-select');
const cmsInput = document.querySelector('input#cms-other-input');

let screens = document.querySelectorAll('.screen');
let sumClickPluse = 0;
let cmsIndex = 0;
let cmsValue = 0;
let inputIndex;

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
  showCms: true,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle(); 
    buttonPluse.addEventListener('click', this.addScreenBlock);
    startBtn.addEventListener('click', this.selectValue);
    resetBtn.addEventListener('click', this.reset);
    range.addEventListener('input', this.spanRange);
    customCheckbox.addEventListener('click', this.showElem);
    cmsSelect.addEventListener('click', this.clickSelest);
    cmsInput.addEventListener('input', this.clickSelest);
    
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();

    // this.logger();
    this.showResult(); 
    this.default();
  },

  spanRange: function (event) {
    span.textContent = event.target.value + '%';
    appData.rollback = +event.target.value;
  },

  selectValue: function () {
    let stop = false;

    for (let i = 0; i <= sumClickPluse; i++) {
      let numSelect = +document.querySelectorAll('select')[i].value;
      let numInput = +document.querySelectorAll('input')[i].value;
      if (numSelect == 0 || numInput == 0 || isNaN(numInput) || isNaN(cmsValue)) {
        stop = true;
      }
    }
    if (stop == false) {
      buttonPluse.setAttribute('disabled', '');
      range.setAttribute('disabled', '');
      cmsInput.setAttribute('disabled', '');
      document.querySelector('input[type="text"]').setAttribute('disabled', '');
  
      document.querySelectorAll('select[name="views-select"]').forEach(function(item, i, arr) {
        document.querySelectorAll('select[name="views-select"]')[i].setAttribute('disabled', '');
      });
  
      let newObj = document.querySelectorAll('.new_obj');
  
      newObj.forEach(function(item, n, arr) {
        newObj[n].querySelectorAll('input[type="text"]').forEach(function(item, i, arr) {
          newObj[n].querySelectorAll('input[type="text"]')[i].setAttribute('disabled', '');
        }); 
      });
  
      document.querySelectorAll('.custom-checkbox').forEach(function(item, i, arr) {
        document.querySelectorAll('.custom-checkbox')[i].setAttribute('disabled', '');
      });

      startBtn.style.display = "none";
      resetBtn.style.display = "inline-block"; 
      cmsIndex = 1;

      appData.start();
    } 

    appData.clickSelest();

  },

  reset: function () {

    buttonPluse.removeAttribute('disabled');
    range.removeAttribute('disabled');
    cmsInput.removeAttribute('disabled');
    document.querySelector('input[type="text"]').removeAttribute('disabled');

    document.querySelectorAll('select[name="views-select"]').forEach(function(item, i, arr) {
      document.querySelectorAll('select[name="views-select"]')[i].removeAttribute('disabled');
    });

    let newObj = document.querySelectorAll('.new_obj');

    newObj.forEach(function(item, i, arr) {
      newObj[i].remove();
    });

    document.querySelectorAll('.custom-checkbox').forEach(function(item, i, arr) {
      document.querySelectorAll('.custom-checkbox')[i].removeAttribute('disabled');
    });
  
    resetBtn.style.display = "none"; 
    startBtn.style.display = "inline-block";

    cmsIndex = 0;
    document.getElementById('cms-select').value = "";
  
    appData.clickSelest();
    document.querySelectorAll('.main-controls__input')[inputIndex].style.display = "none";
    appData.start();
    appData.defaultValue();

  },

  showElem: function () {
    let cms = document.querySelector('.hidden-cms-variants').style.display;
    if (cms == "none" && cmsIndex == 0) {
      document.querySelector('.hidden-cms-variants').style.display = "flex";
      this.showCms = true;
    } else if (cms !== "none" && cmsIndex == 0) {
      document.querySelector('.hidden-cms-variants').style.display = "none";
      this.showCms = false;
    }  
  },

  clickSelest: function () {
       
    let mainControlsInput = document.querySelectorAll('.main-controls__input');
    
    
    for (let i = 0; i < mainControlsInput.length; i++) {
      let searchIndex = mainControlsInput[i].querySelector('input#cms-other-input');
      if (searchIndex) {
        inputIndex = i;
      }
    }

    if (cmsSelect.value == "other") {
      document.querySelectorAll('.main-controls__input')[inputIndex].style.display = "flex";
      cmsValue = +document.getElementById('cms-other-input').value;
    } else if (cmsSelect.value == "50") {
      document.querySelectorAll('.main-controls__input')[inputIndex].style.display = "none";
      cmsValue = 50;
      
    } else {
      document.querySelectorAll('.main-controls__input')[inputIndex].style.display = "none";
      cmsValue = 0;
    }

  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenNumber;

  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      this.screens.push({
         id: index,
         name: selectName,
         price: +select.value * +input.value,
         count: +input.value
      });
    });
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });

  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.classList.add('new_obj'); 

    screens[screens.length - 1].after(cloneScreen);
    sumClickPluse++;
  },

  addPrices: function () {
    
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let screen of this.screens) {
      this.screenNumber += +screen.count;
    }


    for(let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for(let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100);
    }
    this.fullPrice = this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    if (this.showCms == true) {
      this.fullPrice = this.fullPrice + this.fullPrice/100 * cmsValue;
    }
    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback/100);
  },

  default: function () {
    this.title = '';
    this.screens = [];
    this.screenPrice = 0;
    this.screenNumber = 0;
    this.adaptive = true;
    this.fullPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

    
  },

  defaultValue: function () {
    total.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    totalCount.value = 0;
    sumClickPluse = 0;
    cmsValue = 0;
  },

  // logger: function () {
  //   console.log(this.fullPrice);
  //   console.log(this.servicePercentPrice);
  //   console.log(this.screens);
  // }
};

appData.init();
