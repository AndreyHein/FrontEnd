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
    for(let i = Math.ceil(a); i <= Math.floor(b); i++) {
        if( i % 2 === 0) sum += i;
    }
    return sum;
}

const top = Math.random() * 100;            //first argument
const bottom = (Math.random() * 100) + top; //second argument
console.log(`Summe even numbers between ${top} and ${bottom} is ${sumOfEven(top, bottom)}`);

// Task #4
function eventArray(a) {
    const arrOfEven = [];
    const notEven = (x) => {
        if(x % 2 === 0) return true;
        return false
    }
    for(let i = 1; i <= a; i++) {
        if(notEven(i)) arrOfEven.push(i);
    }
    return arrOfEven;
}
console.log(`Even elements between 1 and ${top} is ${eventArray(Math.floor(top))}`)