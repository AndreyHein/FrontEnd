// promise
const secondPromise = new Promise(

  (resolve, reject) => {
    const randomNumber = Math.random();
    if(randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  }
);

secondPromise
.then(promiseFullfilled)
.catch(promiseRejected)
.finally(forFinally)

function promiseFullfilled(a) {
  console.log("Success with result " + a);
}

function promiseRejected(a) {
  console.log("Success with result " + a);
}

function forFinally() {
  console.log("Вот и всё закончилось");
}

