// Задача 5.10



for(let i = 0; i < n; i++) {
    let str = '';

    for (let j = 0; j < n; j++){
        if (j >= i && i < n - j) {
            str = str + '1';
        } else {
            str = str + '0';
        }
    }
    console.log(str);
} 