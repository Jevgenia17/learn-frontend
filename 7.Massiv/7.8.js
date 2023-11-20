//Дан массив `a`. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.
//Пример: `let a = [7, 2, 3, 0];`


let a = [7, 2, 3, 0];

let max = a[0];
  
let min = a[0];

let maxIndex = 0;
  
let minIndex = 0;  
 
for( let i = 1; i < a.length; i++){
  if(a[i] > max){
    max = a[i];
    maxIndex = i;
  }
}
  
console.log(max); 

for( let i = 1; i < a.length; i++){
  if(min > a[i]){
    min = a[i];
    minIndex = i;
  }
}
  
console.log(min);
  
let copy = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = copy;

console.log(a); 
