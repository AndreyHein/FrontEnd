const arrIn = [1, 3, 5, 7];
const power = (y) => {
    y = Math.floor(y);
    return y * y;
}

const changeArray = (arr, callB) => {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(callB(arr[i]));
    }
    return newArray;
}
console.log(changeArray(arrIn, power));