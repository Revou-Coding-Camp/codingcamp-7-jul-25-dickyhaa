const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoDate = document.getElementById('todo-date');
const todoList = document.getElementById('todo-list');
const deleteAllBtn = document.getElementById('delete-all');

let todos = [];

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  const date = todoDate.value;

  if (task === "" || date === "") return alert("Form tidak boleh kosong!");

  todos.push({ task, date, status: "Pending" });
  todoInput.value = '';
  todoDate.value = '';
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${todo.task}</td>
      <td>${todo.date}</td>
      <td>${todo.status}</td>
      <td>
        <button onclick="deleteTodo(${index})">Delete</button>
      </td>
    `;
    todoList.appendChild(row);
  });
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

deleteAllBtn.addEventListener('click', function () {
  todos = [];
  renderTodos();
});