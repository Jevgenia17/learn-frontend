/* 
Задача 8.7

Написать функцию, принимающую массив чисел. 
Она должна возвращать сумму всех элементов.
*/

function sum(a) {
    let sum = 0;

    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    console.log(sum);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-5, -10, 15])); // 0