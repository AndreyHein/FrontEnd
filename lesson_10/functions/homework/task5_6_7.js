// Task #5
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 5) {
            console.log('buzz');
        } else {
            console.log('none')
        }
    }
}
fizzBuzz(100);

// Task #6
const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
function reverseWords(str) {
    const punctuation = ['.', ',', ':', ';', '!', '?'];
    let clearStr = str;

    for (let i = 0; i < punctuation.length; i++) {
        clearStr = clearStr.replaceAll(punctuation[i], '');
    }
    let tokens = clearStr.trim().split(' ');
    let reverseTokens = [];
    for(let i = tokens.length - 1; i >= 0; i--) {
        reverseTokens.push(tokens[i]);
    }
    return reverseTokens.join(' ').toLowerCase();
}
console.log(reverseWords(str));

// Task #7
function intersection(arr1, arr2) {
    const resultArr = [];
    if(arr1.length > arr2.length) {
        for(i = 0; i < arr1.length; i++) {
            for(j = 0; j < arr2.length; j++) {
                if(arr1[i] === arr2[j]) resultArr.push(arr1[i]);
            }
        }
    } else {
        for(i = 0; i < arr2.length; i++) {
            for(j = 0; j < arr1.length; j++) {
                if(arr2[i] === arr1[j]) resultArr.push(arr2[i]);
            }
        }
    }
    return resultArr;
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));