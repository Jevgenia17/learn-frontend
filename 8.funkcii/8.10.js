/* 
Задача 8.10

Написать функцию, принимающую массив чисел. 
Она должна возвращать `true`, если в массиве хотя бы одно число делятся на 5, иначе `false`.
*/


const arr1 = [1, 5, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function some(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            return true;
        }
    }
    return false;
}
   

console.log(some(arr1)); // true
console.log(some(arr2)); // false
