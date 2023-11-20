/*
***Задача 9.5 (аналог метода filter)***

> ***Примечание**:* Метод **`filter()`** создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
> 
- Напишите функцию `filter`,  которая принимает первым параметром массив, вторым - callback-функцию. 
Функция `filter` должна создавать новый отфильтрованный массив и возвращать его или возвращать пустой массив `[]`. 
сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. 
Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). 
Если `result` равен `true`, то проверяемый элемент попадает новый массив, если `false`, то не попадает в новый массив.
- Передайте в созданную функцию `filter` числовой массив, а в качестве callback-функции - функцию, которая будет проверять элемент на чётность. 
Если элемент чётный, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.
*/

function filter(arr, myCallbackFuncTwo){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        const result = myCallbackFuncTwo(arr[i], i);
        if (result) {  // тоже самое, что и (result === true)
            newArray.push(arr[i]);
        } 
    }
    return newArray;
}

function myCallbackFuncTwo (element){
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const arr2 = [2, 3, 42, 15, 99, 5, 8];
const arr3 = [1, 3, 5];

const newArr2 = filter(arr2, myCallbackFuncTwo);
const newArr3 = filter(arr3, myCallbackFuncTwo);

console.log(newArr2); // [2, 42, 8]
console.log(newArr3); // [];

