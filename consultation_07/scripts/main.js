const func01 = async () => {
    const fetchRes =  await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(fetchRes);
}
func01();

const nextAsyncFunction = async(anyPromis) => {
    const resultOfAnyPromise = await anyPromis;
    console.log(resultOfAnyPromise);
}


