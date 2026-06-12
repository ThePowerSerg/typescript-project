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

function getNextId<T extends { id: number }>(items: T[]) {
    return Math.max(0, ...items.map(x => x.id)) + 1
    
}

function addTodoItem(title: string, status: TodoStatus, completedOn?: Date) {
    const newTodo: Todo = {
        id: getNextId(todoItems),
        title,
        status,
        completedOn
    }
    todoItems.push(newTodo)
    return newTodo
}

// add item
addTodoItem("Serg", TodoStatus.InProgress)

console.log(JSON.stringify(todoItems))