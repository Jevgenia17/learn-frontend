// Выведете большую и меньшую цифры числа x


let x = 13817;
let maxNumber = -Infinity;
let minNumber = Infinity;

while(x > 0) {
    let number =  x % 10;

    if (number > maxNumber) {
        maxNumber = number;
    }

    if (number < minNumber) {
        minNumber = number;
    }

    x = Math.floor(x / 10);
}

console.log(`Большая цифра: ${maxNumber}`);
console.log(`Меньшая цифра: ${minNumber}`);
