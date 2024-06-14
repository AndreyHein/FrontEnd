// Task #1

console.log("/* to string */");
console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ' + String(-17.17));
console.log('false to string is ' + String(false));
console.log('null to string is ' + String(null));
console.log('undefined to string is ' + String(undefined));
console.log('0 to string is ' + String(0));

console.log("/* to number */");
console.log("'17' to number is " + Number("17"));
console.log('true to number is ' + Number(true));
console.log('false to number is ' + Number(false));
console.log('null to number is ' + Number(null));
console.log('undefined to number is ' + Number(undefined));
console.log("'   20   ' to number is " + Number("   20   "));
console.log("'      ' to number is " + Number("      "));
console.log("'   30d   ' to number is " + Number("   30d   "));

console.log("/* to boolean */");
console.log('null to boolean is ' + Boolean(null));
console.log('undefined to boolean is ' + Boolean(undefined));
console.log('0 to boolean is '+ Boolean(0));
console.log('-0 to boolean is ' + Boolean(-0));
console.log('NaN to boolean is ' + Boolean(NaN));
console.log("'' to boolean is " + Boolean(""));
console.log("' ' to boolean is " + Boolean(" "));
console.log('17 to boolean is ' + Boolean(17));
console.log("'Hello' to boolean is " + Boolean("Hello"));

// Task #2
console.log("======Comparison Operators=====");
const a = 17;
const b = 5;
console.log('a = ' + a + ' b = ' + b);
console.log('a > b is ' + (a > b));
console.log('a <= b is ' + (a <= b));
console.log('a == b is ' + (a == b));
console.log('a != b is ' + (a != b));

console.log("'a' < 'b' is " + ('a' < 'b'));
console.log("'ab' > 'a' is " + ('ab' > 'a'));


console.log("'17' > 1 is " + ('17' > 1));

console.log('17 === 1 is ' + (17 === 1));
console.log('17 === 17 is ' + (17 === 17));
console.log("17 === '17' is " + (17 === '17'));
console.log('17 === true is ' + (17 === true));
console.log("'0' === '' is " + ('0' === ''));
console.log('true === false is ' + (true === false));
console.log('true === true is ' + (true === true));
console.log('null === undefined is ' + (null === undefined));
console.log('false === 0 is ' + (false === 0));

console.log("17 == '17' is " + (17 == '17'));
console.log("'0' == '' is " + ('0' == ''));
console.log("0 == '' is " + (0 == ''));
console.log('null == undefined is ' + (null == undefined));
console.log('false == 0 is ' + (false == 0));

console.log('undefined == null is ' + (undefined == null));
console.log('undefined == 0 is ' + (undefined == 0));
console.log('null == 0 is ' + (null == 0));
console.log('undefined < 0 is ' + (undefined < 0));
console.log('undefined > 0 is ' + (undefined > 0));
