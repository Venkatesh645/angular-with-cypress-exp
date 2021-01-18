import { Injectable } from '@angular/core';
import { ListTodoResponse, ListTodoRequest, AddTodoRequest, DeleteTodoResponse } from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from '../enum/urls.enum';
import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    return headers.set('Content-Type', "application/json; charset=utf-8")
  }

  getTodoList(): Observable<ListTodoResponse | any> {
    return this.http.get(`${Urls.ROOT_URL}${Urls.GET_TODO_LIST}`)
  }

  addTodo(payload: AddTodoRequest): Observable<AddTodoRequest | any> {
    return this.http.post(`${Urls.ROOT_URL}${Urls.ADD_TODO}`, payload, { headers: this.getHeaders() })
  }

  deleteTodo(toDoId: string): Observable<DeleteTodoResponse | any> {
    return this.http.delete(`${Urls.ROOT_URL}${Urls.DELETE_TODO.replace('{id}', toDoId)}`)
  }

}
