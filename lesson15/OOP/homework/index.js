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

// Task #5
object2 = {key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4', key5: 'value5'};
object3 = {key3: 'new_value3', key4: 'new_value4', key5: 'new_value5', key6: 'value6', key7: 'value7'};

const mergeObjects = (obj1, obj2) => {
    const mergeObj = {};
    for(let key in obj1) {
        if(key in obj2) {
            mergeObj[key] = obj2[key];
        } else {
            mergeObj[key] = obj1[key];
        }
    }
    return mergeObj;
}
console.log(mergeObjects(object2, object3));

console.log("======Alternative======");
const mergeObjectsAlternative = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjectsAlternative(object2, object3));
