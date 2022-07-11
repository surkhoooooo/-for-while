let arr = [12, 33, 45, 12, 67, 83, 100, 32, 11, 21];
let accumulatorEven = [];

for (let i = 0; i <= 9; i++) {
    if (arr[i] % 2 === 0) {
        accumulatorEven.push(arr[i]);
    }
}

console.log(accumulatorEven)