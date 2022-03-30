let myMessage = prompt('Введите сообщение', 'Моё сообщение!');
let newAnswert;

const newMessage = function (message) {
    if (typeof message == 'string') {
        return message;
    } else {
        return 'В качестве аргумента передана не строка';
    }
};


newAnswert = newMessage(myMessage);

if (newAnswert == 'В качестве аргумента передана не строка') {
} else if (newAnswert.length > 30) {
    newAnswert = newAnswert.substr(0, 30) + '...';
  }


alert(newAnswert.trim());