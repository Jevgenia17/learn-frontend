// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

// Пример

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// Синтаксис
// arr.slice([begin[, end]])

// Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию, содержащую копии элементов, вырезанных из исходного массива. Элементы исходного массива копируются в новый массив по следующим правилам:

// Ссылки на объекты (но не фактические объекты): метод slice() копирует ссылки на объекты в новый массив. И оригинал, и новый массив ссылаются на один и тот же объект. То есть, если объект по ссылке будет изменён, изменения будут видны и в новом, и в исходном массивах.
// Строки и числа (но не объекты String и Number): метод slice() копирует значения строк и чисел в новый массив. Изменения строки или числа в одном массиве никак не затрагивает другой.
// Если к любому массиву будет добавлен новый элемент, это никак не повлияет на другой массив.

// Примеры

// Пример: возврат части существующего массива


// Пример: наши хорошие друзья цитрусовые среди фруктов
let fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
let citrus = fruits.slice(1, 3);

// citrus содержит ['Апельсин', 'Лимон']

// Пример: использование метода slice()
// В следующем примере метод slice() создаёт новый массив, newCar, из массива myCar. Оба содержат ссылку на объект myHonda. Когда цвет в объекте myHonda изменяется на багровый, оба массива замечают это изменение.

// Используя slice, создаём newCar из myCar.
let myHonda = {
    color: "красный",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
let myCar = [myHonda, 2, "в хорошем состоянии", "приобретена в 1997"];
let newCar = myCar.slice(0, 2);
  
// Отображаем значения myCar, newCar и цвет myHonda
//  по ссылкам из обоих массивов.
console.log("myCar = " + myCar.toSource());
console.log("newCar = " + newCar.toSource());
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
  
// Изменяем цвет myHonda.
myHonda.color = "багровый";
console.log("Новый цвет моей Honda - " + myHonda.color);
  
// Отображаем цвет myHonda по ссылкам из обоих массивов.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

//Этот скрипт выведет:


myCar = [{color:'красный', wheels:4, engine:{cylinders:4, size:2.2}}, 2,
           'в хорошем состоянии', 'приобретена в 1997']
newCar = [{color:'красный', wheels:4, engine:{cylinders:4, size:2.2}}, 2]
myCar[0].color = красный
newCar[0].color = красный
// Новый цвет моей Honda - багровый
myCar[0].color = багровый
newCar[0].color = багровый