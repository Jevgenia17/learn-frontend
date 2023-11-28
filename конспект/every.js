// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

//Пример: проверка размера всех элементов массива
// Следующий пример проверяет, являются ли все элементы массива числами, большими 10.
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

//Пример: использование стрелочных функций
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
  