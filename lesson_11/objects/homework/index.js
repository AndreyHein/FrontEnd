// Task #1
const array1 = ['a', 36.6, 'John Doe'];
function objectOfArray(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    return obj;
}
console.log(objectOfArray(array1));

// Task #2
const array2 = [['height', 170], ['weight', 80],
['sport', 'regbi'], ['full name', 'John Doe'],
['sing', 'love'], ['speed', 90]];

function dubleArrayToObject(arr) {
    const obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length = 2) {
            obj[arr[i][0]] = arr[i][1];
        }
    }
    return obj;
}
console.log(dubleArrayToObject(array2));

//Task #3
const object1 = objectOfArray(array1);

function strOfObect(obj) {
    const arrWords = [];
    for(let key in obj) {
        arrWords.push(obj[key]);
    }
    // return arrWords.toString();  или
    return arrWords.join(', ');
}
console.log(strOfObect(object1));

// task #4
const object2 = dubleArrayToObject(array2);
const changeValueOnType = function(obj) {
    newObj = {};
    for(let key in obj) {
        newObj[key] = typeof(obj[key]);
    }
    return newObj;
}
console.log(changeValueOnType(object1));
console.log(changeValueOnType(object2));

// Task #4*
const multipleObject = function(obj) {
    for(let key in obj) {
        newObj[key] = { value: obj[key], type: typeof(obj[key]) };
    }
    return newObj;
}
console.log(multipleObject(object1));
