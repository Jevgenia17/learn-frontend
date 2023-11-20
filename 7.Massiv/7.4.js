// Дан массив `a`. Выведете сумму только нечётных неотрицательных элементов массива. Нечётными элементами будем считать первый, третий, пятый и так далее по счёту. Однако их индексы: 0, 2, 4 и так далее.
//Пример: let a = [-2, 10, 5, 1, 2, 6];
//Здесь нечётные элементы (первый, третий и пятый): -2, 5, 2
//Неотрицательные из них: 5, 2

/*
let a = [-2, 10, 5, 1, 2, 6]; решение 1
let sum = 0;  
  
for(let i = 0; i < a.length; i++){
  if(((i + 1) % 2 === 1) && (a[i] > 0)){
    sum += a[i];		
  }
}  
console.log(sum);

let a = [-2, 10, 5, 1, 2, 6]; решение 2
let sum = 0

for (let i = 0; i < a.length; i += 2) { 
  if(a[i] > 0){
    sum += a[i];
  }
}
console.log(sum)
*/