// arrays

const arr1 = [1, 4, 98, "abs", null, undefined, [1, 2, 3]];
console.log(arr1[2]);
console.log(arr1[6]);
console.log(arr1[6][2]);

console.log(arr1.length);

arr1.push(777); // add to end of array
const newLenght = arr1.push("Hello");
console.log(arr1);
console.log(newLenght);

arr1.pop();     // del from end of array
console.log(arr1);

arr1.unshift("first"); //add to top of array
console.log(arr1);
arr1.shift();          //del from top of array 
console.log(arr1);

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Feb');  // add to index of array
console.log(months);
months.splice(1, 1);  // del to index of array
console.log(months);
console.log(months.reverse());

let doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(doubleArr[0][2]);
console.log(doubleArr[2][1]);

const arrC = [1, 2, 3];
const arrY = [4, 5, 6];
const arr3 = [...arrC, ...arrY];
console.log(arr3);

console.log(Math.max(...arr3));

const a = arrC[0];
const b = arrC[1];

let d;
let e;
let f;
[d, e, f] = [arrC];
console.log(e);