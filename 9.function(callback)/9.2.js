/*
Задача 9.2
Используйте функцию forEach из предыдущей задача. 
Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. 
Callback-функцию можно создавать стрелочным способом.
*/

function forEach(arr, myCallbackFunc) {
    for(let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        const sum = elem + i;
        myCallbackFunc(elem , i , sum);
    }
}

function myCallbackFunc(elem, i ,sum){
    console.log(`${elem} + ${i} = ${sum}`);
}

const arr = [1, 2, 3, 4, 5];

forEach(arr, myCallbackFunc);

// решением методом forEach 

arr.forEach((element, index) => {
  const sum = element + index;
  console.log(`${element} + ${index} = ${sum}`);
});
