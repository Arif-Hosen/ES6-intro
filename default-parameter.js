function add(num1, num2 = 0) {
    console.log(num1, num2);

    // option-1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    //option-2
    // num2 = num2 || 0;

    const sum = num1 + num2;
    return sum;
}
const total = add(20);
console.log(total);

function name(first, second = 'vuiyan') {
    console.log(first, second);
    const fullName = first + ' ' + second;
    return fullName;
}
const result2 = name('Sojib');
console.log(result2);