let num = 266219;

let str = String(num);

const myArray = Array.from(str);

const newArray = myArray.map(i=>Number(i));

let sum = 0;

newArray.map(function (el) {
    sum = sum + el;
    return sum;
});

console.log(sum);

sum = sum ** 3;

console.log(sum);

str = String(sum);

str = str.slice(0, 2);

num = Number(str);

console.log(num);