import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Todos } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[TodosService]
})
export class TodosComponent implements OnInit {

  allTodos: Todos[];

  constructor(public todosService:TodosService) {
      this.todosService.getAllTodos().subscribe( (response:Todos[])=>{
        console.log(response);
        this.allTodos = response;
      });
   }

  ngOnInit() {

  }

}
