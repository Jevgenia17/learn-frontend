// let n = 7;
// let prev1 = 1;
// let prev2 = 2;

let i = 1;
while (i <= n) {
    if(i < 3) {
        console.log(prev1);
    } else {
    let number = prev1 + prev2;
    prev1 = prev2;
    prev2 = number;
    console.log(number);
    }
    i++;
} // цикл while 
