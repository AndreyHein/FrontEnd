// Task #5
const bucket = { display: 20, videocard: 100, cpu: 40, }

const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }

function calculateCost(bucket, products) {
    let result = 0;
    for (let key in bucket) {
        const posOfCart = key;
        const amountOfPos = bucket[key];
        for (key in products) {
            const warehouse = products[key];
            for (key in warehouse) {
                if (posOfCart === key) {
                    result += warehouse[key] * amountOfPos;
                }
            }
        }
    }
    return result;
}
console.log(calculateCost(bucket, products));


// Task #6
const obj1 = { name: 'John', age: 17, };

const obj2 = { name: 'Mark', age: 17, };

const obj3 = { name: 'Mark', age: 17, student: false, };

const obj4 = { name: 'John', age: 17, };

function compareObjects(firstObj, secondObj) {
    if (Object.keys(firstObj).length !== Object.keys(secondObj).length) { return false }
    for (let key in firstObj) {
        if (key in secondObj) {
            if (firstObj[key] !== secondObj[key]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
console.log(compareObjects(obj1, obj2));    // false
console.log(compareObjects(obj1, obj3));    // false
console.log(compareObjects(obj1, obj4));    // true
console.log(compareObjects(obj2, obj3));    // false
console.log(compareObjects(obj2, obj4));    // false
console.log(compareObjects(obj3, obj4));    // false
