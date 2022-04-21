const newMessage = function (message) {
    let newAnswert;
    if (typeof message == 'string') {
        message = message.trim();
        if (message.length > 30) { 
            message = message.substr(0, 30) + '...';
        }
        return alert(message);
    } else {
        return alert('В качестве аргумента передана не строка');
    }
};
newMessage(prompt('Введите сообщение', 'Моё сообщение!'));