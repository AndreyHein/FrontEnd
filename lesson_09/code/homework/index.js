// Task #1
const arr1 = [];
for (let i = 0; i < 10; i++) {
    const randNum = Math.random() * 100;
    arr1.push(Math.floor(randNum) + 1);
}
console.log(arr1);
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

// Task #2
const arr2 = ["Remover", 4, 98, "abs", null, undefined, [1, 2, 3], "Hello", true, -1.95];
console.log(arr2);
arr2.push(arr2.splice(0, 1));
console.log(arr2);

// Task #3
const arr3 = [];
for (let i = 0; i < 10; i++) {
    const randNum = Math.random() * 75;
    arr3.push(Math.floor(randNum) + 1);
}
console.log(arr3);
console.log(Math.max(...arr3) + Math.min(...arr3));

// Task #4
const arr4 = [];
for (let i = 0; i < 10; i++) {
    const randNum = Math.random() * 50;
    arr4.push(Math.floor(randNum) + 1);
}
let sum = 0;
console.log(arr4);
for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log(sum);

// Task #5
const arr5 = [];
for (let i = 0; i < 5; i++) {
    const randNum = Math.random() * 1000;
    arr5.push(Math.floor(randNum) + 1);
}
console.log(arr5);
let a, b, c, d, e;
[a, b, c, d, e] = [...arr5];
console.log(`a = ${a} b = ${b} c = ${c} d = ${d} e = ${e}`);

// Task #6
const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
let clearStr = str;
let punctuation = ['.', ',', ':', ';', '!', '?'];
for (let i = 0; i < punctuation.length; i++) {
    clearStr = clearStr.replaceAll(punctuation[i], '');
}
let words = clearStr.trim().split(' ');
for(let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

// Task #7 (reverse)
let reverseWords = [];
for (let i = words.length - 1; i >= 0; i--) {
    reverseWords.push(words[i]);
}
for(let i = 0; i < reverseWords.length; i++) {
    console.log(reverseWords[i]);
}

// Task #8 (palindrome)
const str1 = "А роза упала на лапу Азора";
const str2 = "Радар";
const str3 = "Racecar";
let reverseStr;
let strArray = [str, str1, str2, str3];
for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < punctuation.length; j++) {
        clearStr = strArray[i].replaceAll(punctuation[i], '');
    }
    clearStr = clearStr.toLowerCase().replaceAll(' ', '');
    reverseStr = clearStr.split('').reverse().join('');
    if(clearStr === reverseStr) {
        console.log(strArray[i] + " is palindrome");
    } else {
        console.log(strArray[i] + " is not palindrome");
    }
}