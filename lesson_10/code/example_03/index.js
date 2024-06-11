const arr = [1, 2, 3, 4, 5];

const callFunk = a => a * 2;

const callBackArray = (arr, operation) => {
    const newArr = [];
    for(i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
}
console.log(callBackArray(arr, callFunk));