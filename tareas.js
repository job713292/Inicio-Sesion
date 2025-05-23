const taskContainer = document.getElementById("taskContainer");

// Function para agregar nueva tarea 
function addNewTask(event) {
    event.preventDefault(); 
    const input = document.getElementById("taskText");
    const taskText= input.value.trim();

    if (taskText === "") return; 

    const task = document.createElement("div");
    task.className = "taskItem";
    task.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Eliminar</button>`;

    taskContainer.appendChild(task);
    input.value = "";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}