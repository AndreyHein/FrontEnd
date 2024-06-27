const fetchResult = fetch('https://jsonplaceholder.typicode.com/posts');

console.log(fetchResult);
fetchResult
.then((response) => {
    return response.json();
})
.then((result) => {
    showTodos(result)
})
.catch((error) => {alert('Произошла ошибка')})
function showTodos(todos) {
    const todoList = todos.map(elem => {
        const item = document.createElement('li');
        item.textContent = elem.title;
        return item;
    });
    document.querySelector('ul').append(...todoList);
}