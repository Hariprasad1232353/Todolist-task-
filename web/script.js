let todos = [];

function addTodo() {
    let todoInput = document.getElementById('todoInput').value
    todos.push(todoInput);
    document.getElementById('todoInput').value = '';
    displayTodo();
}
function deleteTodo() {
    todos.pop();
    displayTodo();
    console.log(deleteTodo(), "this is delete");
}
function displayTodo() {
    let todoOutput = document.getElementById('todoOutput');
    let todoString = '';
    for(let i = 0; i < todos.length; i++) {
        todoString += todos[i] + '\n';
    }
    todoOutput.value = todoString;
}
