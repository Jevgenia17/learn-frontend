/*
Напишите функцию, которая очищает массив от нежелательных значений, таких как false, 
undefined, пустые строки (””), ноль (0), null.
*/

const arr = [1, false, "42", "", null, 67, undefined, -45, 0, "apple"];
const newArr = withoutEmpty(arr);
console.log(newArr); // [1, "42", 67, -45, "apple"]

/*
function withoutEmpty(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== false && array[i] !== null && array[i] !== undefined &&
            array[i] !== '' && array[i] !== 0){
            newArr.push(array[i]);
        } 
    }
    return newArr;
}
// "" === false
// null === false
// undefined === false;
// 1 === true ; 0 === false;

*/
function withoutEmpty(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i]) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
// let res = Boolean(array[i]); // преобразовывает в true || false.
// console.log(`${array[i]} ${res}`);  // 1 true; и тд.

