const numbers = [20, 39, 78, 90];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(39, 75, 89);
const maxArray = Math.max(...numbers);
// console.log(max, maxArray);

const numbers2 = [38, ...numbers, 99, 92];
numbers.push(100);
console.log(numbers);
console.log(numbers2);