/* Задача 8.3

Написать функцию, получающую на вход два числа. 
Если оба числа чётные - функция возвращает их произведение. 
Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
*/

function operationsWithEvenOdd(num1, num2) {
    if (num1 % 2 && num2 % 2) {
        return num1 + num2;
    } else if (num1 % 2 || num2 % 2) {
        if (num1 % 2) {
            return num1;
        }
        return num2;
    } else {
        return num1 * num2;
    }
};

console.log(operationsWithEvenOdd(2, 4)); // 8
console.log(operationsWithEvenOdd(11, 31)); // 42
console.log(operationsWithEvenOdd(-8, -15)); // -15
