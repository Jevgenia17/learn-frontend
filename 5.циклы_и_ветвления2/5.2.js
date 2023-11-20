
//Задание 5.2

// 1-я матрица

for (let i = 1; i <= 10; i++) {
    let str = '';

    for(let j = 1; j <= 10; j++) {
        if(i <= 5) {
            str = str + '0 ';
        } else {
            str = str + '1 ';
        }
    }
    console.log(str);
}

// 2-я матрица 

for (let i = 0; i < 10; i++) {
    let str = '';

    for(let j = 0; j < 10; j++) {
        if(j < 5) {
            str = str + '0 ';
        } else {
            str = str + '1 ';
        }
    }
    console.log(str);
}

// 3-я матрица

for (let i = 0; i < 10; i++) {
    let str = '';
    
	for (let j = 0; j < 10; j++) {
	    if ((j < 5 && i < 5) || (i >= 5 && j >= 5)) {
            str = str + "1 ";
        } else {
      	   str = str + "0 ";
        }
	}

    console.log(str);
} 
