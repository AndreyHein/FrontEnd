// operators + - * / ** < > >= <=

let a = 3;
let b = a**3;
console.log(b);

console.log(a < b);

// +
let str1 = "Hello ";
let str2 = "Mike";
console.log(str1 + str2);

console.log(a + b);
console.log(a + str2);

// Приведение типов
let str3 = "3";
console.log(typeof str3);
let str3a = Number(str3);
console.log(typeof str3a);
console.log(str3a);
console.log(str3 + 3);
console.log(str3a + 3);

// Приведение типов опять структурно !!!!!!!

// к строке
let num1 = 2;
// явно приводим к строке
let strFromNum1 = String(num1);
console.log(String(3));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));

// к числу
console.log("=== to number ===");
console.log(Number("3"));
console.log(Number("ab"));
console.log(typeof numberFromString);
console.log(" true, false, null, undefined -> to number");
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log("especially for number");
let strForPlus = "30";
console.log(+strForPlus);
console.log("examples");
console.log(700 + strForPlus);
console.log(700 + Number(strForPlus));
console.log(700 + +strForPlus);

// к булевому типу
console.log("to Boolean =====>>>>>>>")
console.log(Boolean("qwerty"));
console.log(Boolean(""));
console.log(Boolean("qwerty"));
console.log(Boolean(4));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(null));
console.log(undefined);

//операторы сравнения
let t1 = 3;
let t2 = "3";
console.log("operators == & ===")
console.log(t1 === t2) // строгое сравнение
console.log(t1 == t2)  // нестрогое сравнение

// условный оператор
if (true) {
    //
} else {
    //
}

switch (day) {
    case "Monday":
      console.log("It's Monday!");
      break;
    case "Tuesday":
      console.log("It's Tuesday!");
   break; // ...
    default:
      console.log("It's another day!");
   }