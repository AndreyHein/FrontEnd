console.log("Hello");

let a = "b";
const b = 4;
a = "c";
// a= 4;

var c = "444";

// 1. string
// 2. number
// 3. boolean
// 4. symbol
// 5. bigInt
// 6. uderfined
// 7. null

let x;
console.log(x);
console.log(typeof x);

x= null;
console.log(x);
console.log(typeof x);

console.log(typeof a);
console.log(typeof b);

// arrays
let arr1 = [1, 2, 3];
let testA = a;

a = "cc";

console.log(a);
console.log(testA);

const arr2 = arr1;
arr1.push(4);
console.log(arr1);
console.log(arr2);