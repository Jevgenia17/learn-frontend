// Задача 5.9

//Дано n < 10 - размер матрицы. Выведете на экран:



for(let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n; j++) {
       let value = i < j ? j : i; //значение в матрице максимум из i и j
       str = str + value + '';
    }
    console.log(str);
} 