// Задача 5.6




for (let i = 0; i < n; i++) {
    let str = '';
    
    for (let j = 0; j < n; j++) {
        if((i === j) || (j === n - i - 1) || (i === 0) || (i === n - 1)){
            str = str + '1';
        } else {
            str = str + '0'; 
        } 
    }
    console.log(str);
} 