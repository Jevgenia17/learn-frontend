// Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1

// Пример: использование lastIndexOf()
// В следующем примере метод lastIndexOf() используется для поиска значений в массиве.

/*
Синтаксис
arr.lastIndexOf(searchElement[, fromIndex = arr.length])

Параметры
searchElement
Искомый элемент в массиве.

fromIndex
Необязательный параметр. Индекс, с которого начинать поиск в обратном направлении. 
Если индекс больше или равен длине массива, просматривается весь массив. 
Если индекс является отрицательным числом, он трактуется как смещение с конца массива. 
Обратите внимание: если индекс отрицателен, массив всё равно просматривается от конца к началу. Если рассчитанный индекс оказывается меньше 0, массив даже не просматривается. 
Значение по умолчанию равно длине массива, что означает, что просматривается весь массив.
*/

let arr = [2, 5, 9, 2];
arr.lastIndexOf(2); // 3
arr.lastIndexOf(7); // -1
arr.lastIndexOf(2, 3); // 3
arr.lastIndexOf(2, 2); // 0
arr.lastIndexOf(2, -2); // 0
arr.lastIndexOf(2, -1); // 3

// Пример: нахождение всех вхождений элемента
// В следующем примере метод lastIndexOf() используется для поиска всех индексов элемента в указанном массиве, которые с помощью метода push() добавляются в другой массив.

let indices = [];
let array = ["a", "b", "a", "c", "a", "d"];
let element = "a";
let idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]