//Задача 5.11


for (let i = 0; i < n; i++){
    let str = '';

    for (let j = 0; j < n; j++) {
        if ((i === j) || (j === n - i - 1)) {
            str = str + '0 ';
        } else if (j >= i && i < n - j) {
            str = str + '1 ';
        } else if(i >= j && i < n - j) {
            str = str + '4 ';
        } else if (i >= j && j > i - n) {
            str = str + '3 ';
        } else {
            str = str + '2 ';
        }
    }
    console.log(str);
} 