// Метод toReversed() экземпляров Array является копирующим аналогом метода reverse(). Он возвращает новый массив с элементами в обратном порядке.

// В следующем примере создается элемент массива, содержащий три элемента, а затем создается новый массив, обратный элементам. Массив элементов остается неизменным.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// Использование toReversed() для разреженных массивов
// Возвращаемое значение toReversed() никогда не бывает разреженным. Пустые слоты в возвращаемом массиве становятся неопределенными.

console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]

// Вызов toReversed() для объектов, не являющихся массивами
// Метод toReversed() считывает свойство length этого объекта. Затем он посещает каждое свойство, имеющее целочисленный ключ длиной от 1 до 0 в порядке убывания, добавляя значение текущего свойства в конец возвращаемого массива.

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// The '0' and '1' indices are not present so they become undefined

