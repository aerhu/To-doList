// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to remove a task from the list
function removeTask(element) {
    const li = element.parentNode;
    li.parentNode.removeChild(li);
}
