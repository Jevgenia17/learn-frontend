// Выведите первые члены последовательности Фибоначчи, 
// которые не превышают числа x вместе с порядковым номером члена последовательности, 
// а также напишите чётное число или нечётное:


let x = 6;
let prev1 = 1;
let prev2 = 1;

for(let i = 1; i <= x; i++) {
    if (i < 3) {
        let evenPrev1 = prev1 % 2 === 0 ? 'чётное' : 'нечётное';
        console.log(`${i}. ${prev1} - ${evenPrev1}`);
    } else {
        let number = prev1 + prev2;
        prev1 = prev2;
        prev2 = number;
        evenNumber = number % 2 === 0 ? 'чётное' : 'нечётное';
        console.log(`${i}. ${number} - ${evenNumber}`);
    }
}
