// Задание 4.3

// Дано n. Из первых n натуральных чисел выведете только те что делятся на 7.

// Пример (n = 100):

let n = 100;

for(let i = 0; i < n; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}