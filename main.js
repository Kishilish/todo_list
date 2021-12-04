(() => {
  const todos = [];

  const inputBox = document.getElementById("input-todo-box");
  const addButton = document.getElementById("add-button");
  const ulElement = document.getElementById("todo-list");

  addButton.addEventListener("click", (event) => {
    const todo = inputBox.value;
    inputBox.value = "";
    if(todo) {
      todos.push(todo);
      showTodos();
    }
  });

  const showTodos = () => {
    while(ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }
    todos.forEach((todo, index) => {
      const liElement = document.createElement("li");
      liElement.textContent = `${index + 1}:${todo}`;
      ulElement.appendChild(liElement);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      liElement.appendChild(deleteButton);
      deleteButton.addEventListener("click", (event) => {
        deletetodo(index);
      });
    });
  }

  const deletetodo = (index) => {
    todos.splice(index, 1);
    showTodos();
  }

})();