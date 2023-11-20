// Задача 5.4

for (let i = 0; i < n; i++) {
    let str = '';
    
    for (let j = 0; j < n; j++) {
        if((i === j)){
            str = str + '1';
        } else {
            str = str + '0'; 
        } 
    }
    console.log(str);
} 