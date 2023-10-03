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

];

public deleteItemTasklist (event: number){
  this.tasKList.splice(event,1);
}

public setEmitTasklist(event: string){
  console.log (event);
  this.tasKList.push ({task: event, checked: false});


}

public deletAllTasklist(){
const confirm = window.confirm("Quer apagar tudo, certeza ");
if (confirm){
this.tasKList = [];
}
}

ngOnInit(): void {


}

}
