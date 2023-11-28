// Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

const result = isEqual(arr1, arr2);

/*
function isEqual(array1, array2){
    if(array1.length !== array2.length) {
        return false;
    }
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]) {
            return false;
        }
    }
    return true;
}
*/

// второе решение
/*
function isEqual(array1, array2){
    let result = false;

    if(array1.length === array2.length) {
        result = true;
        for(let i = 0; i < array1.length; i++) {
            if(array1[i] === array2[i]) {
            result = true;
            } else {
                result = false;
                break;
            }
        } 
    }
    return result;
}
*/
// метод массивов

function isEqual(arr1, arr2) {
    let result = true;

    if(arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((elem, index) => { //метод every
            if(elem !== arr2[index]) {
                return false;
            } else {
                return true;
            }
        })
    }
}

// более сокращенно

function isEqual(arr1, arr2) {
    let result = true;

    if (arr1.length !== arr2.length) {
        result = false;
    } else {
       result = arr1.every((elem, index) => elem === arr2[index]);
    }

    return result;
}

console.log(isEqual(arr1, arr2)); // true

