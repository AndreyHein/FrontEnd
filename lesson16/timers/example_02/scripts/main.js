

const callBF = (n) => {
    console.log(`Hello, world ${n}`);
    const paragrafElement = document.querySelector('#paragraf');
    paragrafElement.textContent = n;
}


// const intervalID = setInterval(callBF, 1000);

// setTimeout(() => {clearInterval(intervalID);}, 6000);

const intervalQ = (num, callback) => {
    let counter = 0;
    const callbackModifed = () => {
        counter++;
        callback(counter);
        if(counter >= num) {
            clearInterval(intervalID)
        }
    }
    const intervalID = setInterval(callbackModifed, 1000);
}

intervalQ(10, callBF);