const newTodoInput = document.getElementById("new-todo");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

//클릭
addTodoBtn.onclick = () => {
  addTodo();
};

//세이브 함수
const saveTodos = () => {
  const todos = [];

  [...document.getElementById("todo-list").children].forEach((todo) => {
    todos.push({
      text: todo.firstChild.textContent,
      completed: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

//func
const makeBtn = (todoText) => {
  const li = document.createElement("li");
  li.textContent = todoText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = (e) => {
    completeTodo(e.target.parentElement);
  };
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = (e) => {
    deleteTodo(e.target.parentElement);
  };
  li.appendChild(deleteBtn);

  return li;
};

const addTodo = () => {
  const todoText = newTodoInput.value;
  if (todoText === "") return;

  const li = makeBtn(todoText);

  todoList.appendChild(li);
  newTodoInput.value = "";
  saveTodos();
};

const completeTodo = (parentEle) => {
  parentEle.classList.toggle("completed");
  saveTodos();
};

const deleteTodo = (parentEle) => {
  parentEle.remove();
  saveTodos();
};

//로드

const loadTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo) => {
    const li = makeBtn(todo.text);

    if (todo.completed) {
      li.classList.add("completed");
    }
    todoList.appendChild(li);
  });
};

loadTodos();
