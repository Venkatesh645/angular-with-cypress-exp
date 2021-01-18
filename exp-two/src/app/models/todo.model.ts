export class Todo {
  id: string;
  desc: string;
  constructor(value) {
    this.desc = value;
  }
}

export class ListTodoResponse {
  todoList: Array<Todo>
}

export class ListTodoRequest {
  todo: Todo
  constructor(value) {
    this.todo = new Todo(value)
  }
}

export class AddTodoRequest {
  todo: Todo;
  constructor(desc) {
    this.todo = new Todo(desc);
  }
}

export class AddTodoResponse {
  todo: Todo;
  constructor(desc) {
    this.todo = new Todo(desc);
  }
}

export class DeleteTodoResponse {
  message: string;
}
