/* ***Задача 3.4****

Использовав два цикла выведете на экран в одну строку 8 нолей, затем единицу, затем 8 нолей, затем единицу и так 4 раза:

*для выполнения задания потребуется дополнительная переменная и условный оператор `if` */

let row = '';

for(let j = 0; j < 4; j++){
    for (let i = 0; i < 8; i++){
     if (i === 7) {
        row = row + '01';
        } else {
        row = row + '0';
        }
    }
}
console.log(row);