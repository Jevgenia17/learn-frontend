// Метод toSplied() экземпляров Array является копирующей версией метода splice(). Он возвращает новый массив с удаленными и/или замененными некоторыми элементами по заданному индексу.
// Метод toSplied(), как и метод splice(), выполняет несколько действий одновременно: удаляет заданное количество элементов из массива, 
// начиная с заданного индекса, а затем вставляет заданные элементы по тому же индексу. Однако он возвращает новый массив вместо изменения исходного массива. 
// Поэтому удаленные элементы не возвращаются из этого метода.

// синтаксис
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)

// добавление и замена элементов
// Вы можете использовать toSplied() для удаления, добавления и замены элементов в массиве и создания нового массива более эффективно, чем использование среза() и concat().

const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]

// Использование toSplied() для разреженных массивов
// Метод toSplied() всегда создает плотный массив.

const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
