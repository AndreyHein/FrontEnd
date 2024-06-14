// functions


// 1. Function declaration
const resultFunction = printHello('John');
console.log(resultFunction);

function printHello(name) {
    const fullString = 'Hello ' + name;
    return fullString;
}


// 2. Function expression

const printHelloAlternative = function(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

const resultFunctionAlter = printHelloAlternative();
console.log(resultFunctionAlter);

// 3. Arrow function
const printHelloArrow = (name) => {
    const fullString = 'Hello ' + name;
    return fullString;
}
const nameJ = 'John';
const resultFunctionArrow = printHelloArrow(nameJ);
console.log(resultFunctionArrow);

// сокращение arrow function
const printHelloArrowShort = name => 'Hallo ' + name;

console.log(printHelloArrowShort('David'));