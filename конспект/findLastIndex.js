// Метод findLastIndex() экземпляров Array выполняет итерацию по массиву в обратном порядке и возвращает индекс первого элемента, который удовлетворяет предоставленной функции тестирования. Если ни один элемент не удовлетворяет функции тестирования, возвращается -1.

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130