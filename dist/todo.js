"use strict";
// enum TodoStatus {
//     Todo = "todo",
//     InProgress = "in-progress",
//     Done = "done"
// }
// interface Todo {
//     id: number,
//     title: string,
//     status: TodoStatus,
//     completedOn?: Date
// }
// const todoItems: Todo[] = [
//     {id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("6/9/2026")},
//     {id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress},
//     {id: 3, title: "Write an awesome app", status: TodoStatus.Todo},
// ]
// function addTodoItem(todo: string) {
//     const id = getNextId(todoItems)
//     const newTodo = {
//         id, 
//         title: todo,
//         status: TodoStatus.Todo,
//         completedOn: new Date()
//     }
//     todoItems.push(newTodo)
//     return newTodo
// }
// function getNextId<T extends {id: number}>(items: T[]) {
//     return items.reduce((max, x) => x.id > max ? max: x.id, 0) +1
// }
// // add item
// const newTodo = addTodoItem("Buy stuff")
// console.log(JSON.stringify(todoItems))
