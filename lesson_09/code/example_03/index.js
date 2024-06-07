// loops
let arr1 = [1, 4, 98, "abs", null, undefined, [1, 2, 3]];

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

let randArray = [];
for (let i = 0; i < 5; i++) {
    const randNum = Math.random() * 10;
    randArray.push(Math.round(randNum));
}
console.log(randArray);

let minutes = 27;
if (minutes >= 0 & minutes < 15) {
    console.log(" 1 Viertel");
} else if (minutes >= 15 & minutes < 30) {
    console.log(" 2 Viertel");
} else if (minutes >= 30 & minutes < 45) {
    console.log(" 3 Viertel");
} else if (minutes >= 45 & minutes <= 60) {
    console.log(" 4 Viertel");
} else {
    console.log("Error");
}

let word = " Viertel";
let numOfQuartel = Math.ceil(minutes / 15);

console.log(numOfQuartel + word);
console.log(`${numOfQuartel} Viertel`);

let minutes1 = 27;
let quarter1 = Math.floor(minutes1 / 15) + 1;
// if (quarter1 > 4) {
//     return (
//         console.log("Minutes should be in the rande of 0 to 59."))
// }
console.log(`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`);
console.log("The minute " + minutes1 + " is in the " + quarter1 + " quarter of the hour.");