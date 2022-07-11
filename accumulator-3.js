let arr = ['JavaScript', 'java', 'C#', 'C++', 'python', 'Ruby', 'Go', 'PHP', 'C', 'Scratch'];
let accumulator = [];

for (let i = 0; i <= 9; i++) {
    if (arr[i].length > 3) {
        accumulator.push(arr[i]);
    }
}
console.log(accumulator);