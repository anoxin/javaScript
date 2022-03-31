// Задание №1

const arr = [34355, 2444, 64455, 46433, 344423, 44344, 56667];

let num;

for (let i = 0; i < 7; i++) {
    num = arr[i] + '';
    if (+num[0] === 2 || +num[0] === 4) {
        console.log(+num);
    }
}

//Задание №2

let number = 100;

for (let i = 2; i <= number; i++) {
  let v;
  for (let n = 2; n < i; n++) { 
    if (i % n == 0) {
      v = i;
      break;
    }
  }
  if (i != v) {
    console.log(i, 'Делители этого числа: 1 и ' + i);
  }
}

