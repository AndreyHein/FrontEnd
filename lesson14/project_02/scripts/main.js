let todoList = [
    {task: "Купить молоко", done: false},
    {task: "Заплатить за интернет", done: true},
    {task: "Позвонить маме", done: false},
    {task: "Почитать книгу", done: false},
    {task: "Сделать домашнее задание", done: true},
    {task: "Посмотреть фильм", done: false},
    {task: "Помыть посуду", done: true},
    {task: "Погулять с собакой", done: false},
    {task: "Заказать пиццу", done: false},
    {task: "Посетить врача", done: true},
    {task: "Починить компьютер", done: false},
    {task: "Подарить цветы подруге", done: true},
    {task: "Поиграть в видеоигры", done: false},
    {task: "Послать резюме", done: true},
    {task: "Поехать в отпуск", done: false}
    ];

    const ulElement = document.querySelector('.list');
    const inputElement = document.querySelector('task-input');
    const createButton = document.querySelector('.actions .btn');
    const allButton = document.getElementById('all');
    const completedButton = document.getElementById('completed');
    const uncompletedButton = document.getElementById('uncompleted');

    const viewToDoList = (array) => {
        ulElement.innerHTML = '';
        array.forEach(item => {
            const listElement = document.createElement('li');
            listElement.textContent = item.task;
            listElement.className = item.done ? 'list-item list-item_done' : 'list-item';
            ulElement.append(listElement);
        });
    }

    
    

    createButton.addEventListener('click', () => {
        const task = inputElement.value.trim();
        if (task) {
          todoList.push({task: task, done: false});
          inputElement.value = '';
          viewToDoList();
        }
      });
        // const textFromInput = inputElement.value;
        // todoList.push({task: textFromInput, done: false});
        // inputElement.value = '';
        // viewToDoList(todoList);
    

    const allClickHandler = () => {
        viewToDoList(todoList);
    }


    const comletedClickHandler = () => {
        
        const listFilter = todoList.filter(item => item.done === true);
        viewToDoList(listFilter);
    }

    const uncomletedClickHandler = () => {
        
        const listFilter = todoList.filter(item => item.done === false);
        viewToDoList(listFilter);
    }

    viewToDoList(todoList);


    // createButton.addEventListener('click', createClickHandler);
    allButton.addEventListener('click', allClickHandler);
    completedButton.addEventListener('click', comletedClickHandler);
    uncompletedButton.addEventListener('click', uncomletedClickHandler);