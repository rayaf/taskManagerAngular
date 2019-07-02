import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";


const TASKS: Array<Task> = [
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
  public selectedTask;

  public constructor(){

  }

  public ngOnInit(){
    this.tasks = TASKS
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
