// Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
// В противном случае возвращается -1.

// Пример: поиск индекса простого числа в массиве
// Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1, если в массиве нет простых чисел).

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
}
  
console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
  