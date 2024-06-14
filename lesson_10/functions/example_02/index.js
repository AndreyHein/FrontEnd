function sumOfNumbers(a, b) {
    return a + b;
}
console.log(sumOfNumbers(4, 6));

function powNumber(c) {
    return Math.pow(c, 2);
}

console.log(powNumber(5));

const powNumberArrow = (num, powN) => Math.pow(num,powN);
console.log(powNumberArrow(5, 2));

const makeOperations = (a, b) => {

    function sumOfNumbers(a, b) {
        return a + b;
    }


    console.log('Сумма наших чисел = ' + sumOfNumbers(a, b));
}
makeOperations(7, 4);

// callback function

const makeOperationWithCallBack = (a, b, operation1) => {
    return operation1(a, b);
}

console.log(makeOperationWithCallBack(5, 3, sumOfNumbers));

const sumOfNumbersArrow = (a, b) => a + b;

const makeOperationsSummeAndSquare = (a, b, sumOfNumbersArrow, powNumberArrow) => {
    console.log(sumOfNumbersArrow(a, b));
    console.log(powNumberArrow(a, b));
}

makeOperationsSummeAndSquare(5, 2, sumOfNumbersArrow, powNumberArrow);