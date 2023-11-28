// Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

// Пример: поиск простого числа в массиве

// Следующий пример находит в массиве положительных чисел элемент, являющийся простым числом (либо возвращает undefined, если в массиве нет простых чисел).

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
  console.log([4, 5, 8, 12].find(isPrime)); // 5
  