var TodoStatus;
(function (TodoStatus) {
    TodoStatus["Todo"] = "todo";
    TodoStatus["InProgress"] = "in-progress";
    TodoStatus["Done"] = "done";
})(TodoStatus || (TodoStatus = {}));
const todoItems = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("6/9/2026") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
    { id: 3, title: "Write an awesome app", status: TodoStatus.Todo },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    console.log(id);
    const newTodo = {
        id: id,
        title: todo,
        status: TodoStatus.Todo,
        completedOn: new Date()
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}
// add item
const newTodo = addTodoItem("Buy stuff");
console.log(JSON.stringify(todoItems));
