const taskContainer = document.getElementById("taskContainer");
 
function addNewTask(event) {
    event.preventDefault(); 
    const input = document.getElementById("taskText");
    const taskText= input.value.trim();

    if (taskText === "") return; 

    const task = document.createElement("div");
    task.className = "taskItem";
    task.innerHTML = `
    <span class="botone">${taskText}</span>
    <button onclick="deleteTask(this)" class="eliminar">-</button>`;

    taskContainer.appendChild(task);
    input.value = "";
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}