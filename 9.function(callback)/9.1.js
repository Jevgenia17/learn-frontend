/* - Напишите функцию `forEach`, которая принимает первым параметром массив, вторым - callback-функцию. callback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс (`callback(array[index], index)`). Функция `forEach` ничего не возвращает.
- Передайте в созданную функцию `forEach` любой массив, а в качестве callback-функции - функцию, которая будет выводит в консоль полученные аргументы с текстом `“Элемент … с индексом …”`, где первые `…` - это элемент массива, вторые `…` - это индекс элемента массива.
*/

function forEach(array, showElementAndIndex) {
    for(let i = 0; i < array.length; i++) {
        const elem = array[i];
        showElementAndIndex(elem, i); // элемент и индекс
    }
}

function showElementAndIndex(elem, i) {
    console.log(`Элемент ${elem} с идексом ${i}`);
}

const a = [1, 2, 3, 4, 5];
forEach(a, showElementAndIndex);