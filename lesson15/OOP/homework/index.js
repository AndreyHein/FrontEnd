// Task #1
const names = ["Alex", "Boris", "Kirill", "Andrey", "Oleg", "Roman", "Arnold", "Leonid", "Eugene"];
const namesFilterA = (arr) => {
    return arr.filter(name => name[0].toLowerCase() === 'a');
}
console.log(namesFilterA(names));

// Task #2
const numbers = [1, 2, 3, 4, 5];
function sumNumArr(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumNumArr(numbers));

// Task #3
function reverseNumArr(arr) {
    return arr.slice().reverse();
}
console.log(reverseNumArr(numbers));

// Task #4
const object1 = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
}

const arrayOfObjects = (obj) => {
    return Object.keys(obj).map(key => ({
        ...obj[key],
        id: key
    }));
}
console.log(arrayOfObjects(object1));
