import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './todos.model';

@Injectable()
export class TodosService{
    constructor(public httpClientObj: HttpClient){
    }

    public getAllTodos(){
        return this.httpClientObj.get<Todos[]>("https://jsonplaceholder.typicode.com/todos");
    }
}