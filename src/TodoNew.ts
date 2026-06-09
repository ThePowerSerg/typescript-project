enum TodoStatus {
    Todo = "todo",
    InProgress = "in-progress",
    Done = "done"
}

interface Todo {
    id: number,
    title: string,
    status: TodoStatus,
    completedOn?: Date
}


const todoItems: Todo[] = [
    {id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("6/9/2026")},
    {id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress},
    {id: 3, title: "Write an awesome app", status: TodoStatus.Todo},
]

function getNextId<T extends {id: number}>(items: T[]) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

function createItem(title: string, status: TodoStatus, completedOn?: Date) {

    const newTodo: Todo = {
        id: getNextId(todoItems),
        title: title,
        status: status,
        completedOn: completedOn
    }

    return newTodo
}

function addTodoItem(newTodo: Todo) {

    todoItems.push(newTodo)
}

// create item
const c = createItem("Serg", TodoStatus.InProgress)

// add item
addTodoItem(c)

console.log(JSON.stringify(todoItems))