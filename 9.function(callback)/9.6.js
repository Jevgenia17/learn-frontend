/*
***Задача 9.6***

Используйте функцию `filter` из предыдущей задачи. Функция `filter` будет принимать массив с числами и строками. 
Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента `string`, возвращает `true`, иначе `false`. Callback-функцию можно создавать стрелочным способом.
*/

function filter(arr, myCallbackFuncThree) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        const result = myCallbackFuncThree(arr[i], i);
        if(result) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const myCallbackFuncThree = (element) => {
    if(typeof element === "string"){
        return true;
    } else {
        return false;
    }
}

const arrOne = [4, "i", 67, "phone", -434, "42"];
const arrTwo = [4, 67, -434, 0];

const newArrOne = filter(arrOne, myCallbackFuncThree);
const newArrTwo = filter(arrTwo, myCallbackFuncThree);

console.log(newArrOne); // ["i", "phone", "42"] 
console.log(newArrTwo); // []

// методом filter

const resultNewArr1 = arrOne.filter((element) => (typeof element === "string"));
console.log(resultNewArr1);

const resultNewArr2 = arrTwo.filter((element) => (typeof element === "string"));
console.log(resultNewArr2);