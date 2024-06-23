const ulElement = document.querySelector('.list');
    const taskInput = document.querySelector('.task-input');
    const createButton = document.querySelector('.actions .btn');
    const allButton = document.getElementById('all');
    const completedButton = document.getElementById('completed');
    const uncompletedButton = document.getElementById('uncompleted');
  
    function viewToDOList(filter = 'all') {
      ulElement.innerHTML = '';
  
      todoList.forEach(item => {
        if (filter === 'completed' && !item.done) return;
        if (filter === 'uncompleted' && item.done) return;
  
        const liElement = document.createElement('li');
        liElement.textContent = item.task;
        liElement.className = item.done ? 'list-item list-item_done' : 'list-item';
        liElement.addEventListener('click', () => {
          item.done = !item.done;
          viewToDOList(filter);
        });
        ulElement.appendChild(liElement);
      });
    }

    createButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
          todoList.push({task: task, done: false});
          taskInput.value = '';
          viewToDOList();
        }
      });
    
      allButton.addEventListener('click', () => viewToDOList('all'));
      completedButton.addEventListener('click', () => viewToDOList('completed'));
      uncompletedButton.addEventListener('click', () => viewToDOList('uncompleted'));
    
      viewToDOList();