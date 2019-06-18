import { Component, OnInit } from '@angular/core';

const TASKS: Array<any> = [
  {id: 1, title: "tarefa 1"},
  {id: 2, title: "tarefa 2"},
  {id: 3, title: "tarefa 3"},
  {id: 4, title: "tarefa 4"},
];

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html' 
})
export class TasksComponent implements OnInit {
  public tasks;

  public constructor(){

  }

  public ngOnInit(){
    this.tasks = TASKS
  }
}
