/* 
Задача 8.5

Написать функцию, принимающую массив чисел. 
Она должна возвращать элемент с максимальным значением.
*/

function max(a){
    let max = a[0];
 
    for( let i = 1; i < a.length; i++){
        if(a[i] > max){
            max = a[i];
        }
    }
    console.log(max); 
}


console.log(max([1, 42, 34, 12])); // 42
console.log(max([-5, -10, -100])); // -5