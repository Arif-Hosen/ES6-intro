// variable
let priyo = 'kopila';
priyoNew = 'momtaj';

const hubby = 'Akbar';

//default parameter
function getName(first, last = 'chowdury') {
    const name = first + ' ' + last;
    return name;
}
const name = getName('Sadik', 'talukder');
console.log(name);

//template string
const people = `My lovely person is ${hubby}.His name ${getName('akber')}. My name is ${priyoNew}`;
console.log(people);

//arrow function
const calculate = (a, b, c, d) => {
    const sum = a + b;
    const diff = b - c;
    const mul = a * d;
    const result = (sum + mul) * diff;
    return result;
}
const total = calculate(30, 40, 10, 15);
console.log(total);

//spread operator
const num = [20, 40, 78, 28];
const min = Math.min(...num);
console.log(min);

const newNum = [...num, 300, 400, 894];
console.log(newNum);
