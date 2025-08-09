document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return null;
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInput.value = ""; // Clear the input field
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", String(task.id));
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
  `;

    // Toggle completion (ignore when clicking the Delete button)
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // Delete
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
