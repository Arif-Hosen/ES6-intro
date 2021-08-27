// two parameter
const add = (num1, num2) => num1 + num2;
const sum = add(10, 20);
//three parameter
const mul = (num1, num2, num3) => num1 * num2 * num3;
const result = mul(5, 6, 5);
// one parameter ,we can use bracket() or without bracket
const fiveTimes = (num) => num * 5;
const value = fiveTimes(20);

const tenTimes = num => num * 10;
const output = tenTimes(30);
// without parameter
const getName = () => 'Arman hosen';
const name = getName();
// multi line code operation
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const mul = x * y;
    const div = x / y;
    return div;
}
const solution = doMath(15, 7);
console.log(solution);