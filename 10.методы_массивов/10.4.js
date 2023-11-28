// Задача 10.4
// Напишите функцию, которая убирает повторяющиеся элементы в массиве. 
//Постараться сохранить исходный порядок элементов в массиве.

const arrayOne = [1, 2, 2, 3, 3, 4, 5, 6, 6];
const newArray = unique(arrayOne);
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

function unique(arr) {
let newArr = [];
  for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
  
  return newArr;
}
