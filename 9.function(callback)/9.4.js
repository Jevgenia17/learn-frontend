/*
***Задача 9.4***

Используйте функцию `map` из предыдущей задачи. 
Функция `map` будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. 
Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и возвращать это инвертированное значение. 
Callback-функцию можно создавать стрелочным способом.
*/

function map(arr1, callback){
    let newArray = [];
    for(let i = 0; i < arr1.length; i++) {
        const newElem = callback(arr1[i], i)
        newArray.push(newElem);
    }
    return newArray;
}

function myCallback(element){
    if (element === 1){
        return 0;
    } else {
        return 1;
    }
}

const arr1 = [1, 1, 0, 0, 1, 0, 1];
const newArr1 = map(arr, myCallback);

const resultFunc = map(arr1, myCallback);
console.log(resultFunc); // [0, 0, 1, 1, 0, 1, 0]

// решение методом map

const resultFunc1 = arr1.map((element) => {
    if(element === 1) {
        return 0;
    } else {
        return 1;
    }
});
console.log(resultFunc1);