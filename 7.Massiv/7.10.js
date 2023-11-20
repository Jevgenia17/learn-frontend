//Задача 10
//Дан массив `a`. Определите длину самой длинной возрастающей последовательности в массиве.

/*
let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];
let count = 0;
let lenght = count;

for (let i = 0; i < a.length; i++) {
  if (a[i + 1] && a[i + 1] > a[i]) {
    count++;
  } else {
    count = 0;
  }

  if (count >= lenght && count !== 0) {
    lenght = count + 1; 
  }
}

console.log(lenght);
*/