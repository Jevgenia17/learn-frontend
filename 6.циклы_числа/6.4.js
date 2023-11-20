//(количество разрядов)


let num = 365;
let count = 0;

while(num > 1) {
    console.log(num);
    num = Math.floor(num / 10);
    count += 1;
}

console.log(`count ${count}`);
