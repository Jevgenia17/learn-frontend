/*
Задача 9.3 (аналог метода map)

- Напишите функцию `map`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `map` должна создавать новый массив и возвращать его. сallback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс, а также возвращать элемент нового массива (`const newElem = callback(array[index], index)`). Созданный новый элемент должен записываться в новый массив.
- Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и возвращать его. Callback-функцию можно создавать стрелочным способом.
*/

function map(arr, callback){
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        const newElem = callback(arr[i], i)
        newArray.push(newElem);
    }
    return newArray;
}

function myCallbackFunc(elem) {
    return elem * elem;
}

const array = [1, 2, 3, 4, 5];

const result = map(array, myCallbackFunc);
console.log(result); // [1, 4, 9, 16, 25]

//решение методом map

const result1 = array.map((elem) => elem * elem);

console.log(result1); 