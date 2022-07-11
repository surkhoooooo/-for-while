let arr = [12, 34, -2, 56, 76, -6, 93, 11, -999, 41];
let accumulator = 0;
let num = 0;

while (num <=9) {
    if (arr[num] > 0) {
        accumulator += arr[num];
    }
    
    num++;
}

console.log(accumulator)