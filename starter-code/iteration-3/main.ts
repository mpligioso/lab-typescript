// Add the reference to the interface
import { TodoItemInterface } from "./interfaces"
import { TodoListInterface } from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor(
    public title: string,
  ){}

  status: boolean;
  updatedAt: Date;

  toggleStatus(){
    this.updatedAt = new Date();
    if (this.status){
      return this.status = false;
    }
    else {
      return this.status = true;
    }
  };
}


// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  constructor(
    public TodoList: Array<string> = []
  ) {}

  addTask(TodoItem){
    this.TodoList.push(TodoItem)
    console.log(`${TodoItem} added to tasks`)
    console.log(this.TodoList.length)
    return this.TodoList.length
  }

  listAllTasks(){
    this.TodoList.forEach((TodoItem) => {
      console.log(TodoItem)
    })
  }

  deleteTask(TodoItem){
    let index: number = this.TodoList.indexOf(TodoItem);
    this.TodoList.splice(index, 1);
    console.log(`${TodoItem} has been deleted.`)
    console.log(this.TodoList.length)
    return this.TodoList.length
  }

  listUncomplete(){
    this.TodoList.forEach((TodoItem) => {
      if (TodoItem){
        console.log(`${TodoItem.title} still be completed.`)
      };
    })
  }
}



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
