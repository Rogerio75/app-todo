import { Component, DoCheck } from '@angular/core';

import { Tasklist } from '../../model/tasklist';

//interface
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
ngDoCheck(): void {
  this.tasKList.sort((first, last) =>Number (first.checked) - Number(last.checked));
}

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
public validationInput (event:string, index: number){
if(!event.length){
  const confirm = window.confirm("Task está vazia, deseja apagar");

  if (confirm){
    this.deleteItemTasklist(index);

  }


}



}

}

