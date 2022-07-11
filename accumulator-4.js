let arr = ['Adam', 'Movsar', 'Alvi', 'Mokhmad', 'Isa', 'Adam', 'Deni', 'Khasan', 'Khasanbek', 'Idris'];
let  accumulator = [];

for (let i = 0; i <= 9; i++) {
    if (arr[i][0] === 'A')
    accumulator.push(arr[i]);
}

console.log(accumulator);