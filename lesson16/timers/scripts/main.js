
// запуск ожидания клика
const ourButton = document.querySelector('#btn');
ourButton.addEventListener('click', () => {console.log('Button presed')});

// prompt('qwerty');

const startTime = new Date();

// цикл на 5 секунд
// for(let i = 0; i < 5000000000; i++) {

// }
const endTime = new Date();
console.log(endTime - startTime);

// setTimeout
setTimeout(() => {console.log('timeout 1000');}, 1000);
setTimeout(() => {console.log('timeout 0');}, 0);

console.log("Console after setTimeOut");