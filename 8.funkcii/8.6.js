/* 
Задача 8.6

Написать функцию, принимающую массив чисел. 
Она должна возвращать элемент с минимальным значением.
*/

function min(a) {
 let min = a[0];
 
    for( let i = 1; i < a.length; i++){
        if(min > a[i]){
            min = a[i];
        }
    }
    console.log(min);
}

console.log(min([1, 42, 34, 12])); // 1
console.log(min([-5, -10, -100])); // -100