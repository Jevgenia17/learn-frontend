/*
***Задача 9.8***

Используйте функцию `find` из предыдущей задачи. 
Функция `find` будет принимать числовой массив. 
Напишите callback-функцию, которая будет проверять элемент на условие - его остаток от деления на `5` должен равняться `3`. 
Если элемент удовлетворяет условию, возвращает `true`, иначе `false`. 
Callback-функцию можно создавать стрелочным способом.
*/

function find(arr, myCallbackFuncFive) {
    for(let i = 0; i < arr.length; i++){
        const result = myCallbackFuncFive(arr[i], i);
        if (result) {
            return arr[i];
        }
    }

    return undefined;
}

const myCallbackFuncFive = (element) => {
    if (element % 5 === 3) {
        return true;
    } else {
        return false;
    }
}

const arr5 = [3, 8, 13, 18];
const arr6 = [4, 7, 9, 10];

const resultOne = find(arr5, myCallbackFuncFive);
const resultTwo = find(arr6, myCallbackFuncFive);

console.log(resultOne); // 3
console.log(resultTwo); // undefined

// const resultOne = arr5.find((element) => element % 5 === 3);
// const resultTwo = arr6.find((element) => element % 5 === 3);