import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { ListTodoResponse, AddTodoResponse, DeleteTodoResponse, AddTodoRequest } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exp-two';
  todoArray = [];
  isError = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listTodo();
  }

  addTodo(value): void {
    if (!value) return
    const payload = new AddTodoRequest(value);
    this.todoService.addTodo(payload).subscribe((resp: AddTodoResponse) => {
      this.listTodo();
    });
  };

  deleteToDo(id): void {
    if (!id) return
    this.todoService.deleteTodo(id).subscribe((resp: DeleteTodoResponse) => {
      this.listTodo();
    });
  }


  private listTodo(): void {

    const loadError = () => {
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 200)
    }

    this.todoService.getTodoList()
      .subscribe((resp: ListTodoResponse) => {
        if (resp?.todoList) {
          this.todoArray = resp?.todoList;
        } else {
          loadError()
        }
      }, () => {
        loadError()
      })
  }

}
