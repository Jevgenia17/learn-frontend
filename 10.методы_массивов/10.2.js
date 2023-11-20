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
console.log(isEqual(arr1, arr2)); // true

// конспект , переписать задачи предыдущие, и 1 и 2 задачу переписать