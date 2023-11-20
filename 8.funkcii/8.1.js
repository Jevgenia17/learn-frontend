// Задача 8.1
// Написать функцию, получающую на вход одно число.
//Если число чётное - функция возвращает true , если нет - false.

function isEven(number) {
    let num = 0;
    if (number % 2 == 0) {
        num = true;
    } else {
        num = false;
    }
    return num;
};

console.log(isEven(42));
console.log(isEven(15));
console.log(isEven(-111));