const strA = " Hello, my little bro ";

console.log(strA.length);
console.log(strA.toLowerCase());
console.log(strA.toLocaleUpperCase());

let substring = strA.substring(7, 9);
console.log(substring);

console.log(strA.replace('Hello', 'Привет'));
console.log(strA);
console.log(strA.trim());

console.log(strA.trim().split(' '));