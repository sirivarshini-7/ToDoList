document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeBtn');
        removeButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = ''; 
    } else {
        alert('Please enter a task!');
    }
});

document.getElementById('taskList').addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
