'use strict';

let lang = confirm('Выберите язык (ДА - "ru", Нет - "en")');

if (lang == true) {
    alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == false) {
    alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    // alert('Язык не определён!');
}

switch (lang) {
    case true:
        alert('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
    case false:
        alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
    // default:
    //     alert('Язык не определён!');
}    

let myLang = [true, false];
let myWeek = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье', 
'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];

let index = myLang.findIndex(i => i == lang);

alert(myWeek[index]);

let namePerson = prompt('Введите имя', 'Артем');
let namePerson2 = namePerson == 'Артем' ? 'Директор' : 'Студент';

namePerson == 'Александр' ? console.log('Преподаватель') : console.log(namePerson2);

