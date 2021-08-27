//breakup with var, we use let / const 
let amount = 200;
amount = 300;
console.log(amount);

const name = 'janpakhi';
const weTogther = 'ami' + name;
console.log(weTogther);
// name = 'moyna pakhi';

const numbers = [30, 10, 20, 10];
numbers.push(35);
console.log(numbers);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
    console.log(sum);
}

const student = { name: 'mofij', roll: 202, job: 'intern' };
student.name = 'mofajjol';
console.log(student);