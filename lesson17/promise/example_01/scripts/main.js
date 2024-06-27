// синхронный код
// console.log("Script start");
// const age = prompt("Enter your age ");
// console.log(`Age ${age}`);

// асинхронный код
// console.log("Script start");
// const inputElement = document.querySelector('#age');
// document.querySelector('#ok-btn').addEventListener('click', okHandler);

// function okHandler() {
//     const result = inputElement.value;
//     console.log(result);
// }

// console.log("Последняя строка");

// promise
const firstPromise = new Promise(
    //     (resolve) => {
    //         setTimeout(
    //             () => {resolve(true)}, 20000
    //         )
    // }
    (resolve) => {
      const inputElement = document.querySelector('#age');
      document.querySelector('#ok-btn').addEventListener('click', okHandlerInPromise);
      function okHandlerInPromise() {
        const result = inputElement.value;
        resolve(result);
      }
    }
  );
  firstPromise.then(promiseFullfilled);
  function promiseFullfilled(a) {
    console.log(a);
  }