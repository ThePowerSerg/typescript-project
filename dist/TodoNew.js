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
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}
function createItem(title, status, completedOn) {
    const newTodo = {
        id: getNextId(todoItems),
        title: title,
        status: status,
        completedOn: completedOn
    };
    return newTodo;
}
function addTodoItem(newTodo) {
    todoItems.push(newTodo);
}
// create item
const c = createItem("Serg", TodoStatus.InProgress);
// add item
addTodoItem(c);
console.log(JSON.stringify(todoItems));
