const functionExample = (a) => {
    return a + 2;
}

const result = functionExample(6);
console.log(result);

console.log([1, 3].map(functionExample));