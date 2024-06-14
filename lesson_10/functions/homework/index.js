// Task #1
function evenOrOdd(a) {
    if(Math.floor(a) % 2 === 0) {
        console.log(`Number ${a} is even`);
    } else {
        console.log(`Number ${a} is odd`);
    }
}

// Task #2
const returnSquare = (a) => Math.floor(a) **2;

let number;
for (let i = 0; i < 5; i++) {
    number = Math.random() * 10;
    evenOrOdd(number);                              //task#1
    console.log('Square = ' + returnSquare(number));//task#2
}

// Task #3
function sumOfEven(a, b) {
    let sum = 0;
    for(let i = Math.floor(a); i <= Math.floor(b); i++) {
        if( i % 2 === 0) sum += i;
    }
    return sum;
}

const top = Math.random() * 100;            //first argument
const bottom = (Math.random() * 100) + top; //second argument
console.log(`Summe even numbers between ${top} and ${bottom} is ${sumOfEven(top, bottom)}`);

// Task #4  (Решето Эратосфена)

const notPrime = (x, y) => {
    if(x % y === 0) return true;
    return false;
}

function primeArray(a) {
    const arrOfPrimeNumber = [];
for(let i = 2; i < a; i++) {
    arrOfPrimeNumber.push(i);
}
     let divIndex = 0;

    while(divIndex <= arrOfPrimeNumber.length) {
        let divider = arrOfPrimeNumber[divIndex];
        for(let i = arrOfPrimeNumber.length - 1; i > divIndex; i--) {
            if(notPrime(arrOfPrimeNumber[i], divider)) {
                arrOfPrimeNumber.splice(i, 1);
            }
        }
        divIndex++;
    }
    return arrOfPrimeNumber;
}
console.log(`Prime elements between 1 and ${20} is ${primeArray(20)}`);
console.log(`Prime elements between 1 and ${50} is ${primeArray(50)}`);
console.log(`Prime elements between 1 and ${20} is ${primeArray(20)}`);