// Урок 6 Область видимости и замыкание. Основное задание

"use strict";

// MDN Web Docs: Получение случайного целого числа в заданном интервале
// Максимум не включается, минимум включается
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const isNumber = function (str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

// игра угадайка число 
const gameRiddle = () => {
    let secretNumber = getRandomInt(1, 100);
    // оставила для проверки задания
    console.log('secretNumber=', secretNumber);

    // играем
    function goRiddle(message) {

        let answer = prompt(message);

        if (answer === null) {
            alert("Игра окончена !");
        } else if (!isNumber(answer) || +answer < 1 || +answer > 100) {
            goRiddle("Введите целое число от 1 до 100 :");
        } else if (+answer === secretNumber) {
            alert("Поздравляю, Вы угадали !!!");

        } else {
            goRiddle(`Загаданное число ${(+answer > secretNumber ? "меньше" : "больше") + " " + answer.trim()} .\nВедите новый вариант :`);
        }
    }
    // стратуем
    goRiddle("Угадай число от 1 до 100 :");
};

// стартует игра 
gameRiddle();

