// Задание 5.1

for(let i = 0; i < 5; i++) {
    let str = '';
        for(let j = 0; j < 5; j++) {
        str += `${i}/${j} `;
        }
 console.log(str);
}

for (let i = 0; i < 6; i++) {
    let str = '';

    for (let j = 0; j < 6; j++) {
        if (i < 3 ) {
            str = str + 'x';
        } else {
            str = str + 'y';
        }
    }
    console.log(str);
} 
