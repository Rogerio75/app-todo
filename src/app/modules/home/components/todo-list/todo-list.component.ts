import { Component, OnInit } from '@angular/core';
//interface
import { Tasklist } from '../../model/tasklist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
public tasKList: Array<Tasklist>= [
{task:"Minha Nova Tarefa", checked:true},
{task:"Minha Nova Tarefa2", checked:false},


];

ngOnInit(): void {
  
}

}
