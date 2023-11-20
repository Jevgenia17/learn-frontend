
let x = 10819;
let str = x.toString(); // преобразуем число в строку
let length = str.length; // получаем количество символов в строке

for (let i = length - 1; i >= 0; i--) {
  let digit = str.charAt(i);
  console.log(`${length - i} цифра равна ${digit}`);
}
