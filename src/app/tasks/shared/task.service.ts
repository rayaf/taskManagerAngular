import { Injectable } from '@angular/core';

import { Task } from "./task.model";

const TASKS: Array<Task> = [
  {id: 1, title: "tarefa 1"},
  {id: 2, title: "tarefa 2"},
  {id: 3, title: "tarefa 3"},
  {id: 4, title: "tarefa 4"},
];

@Injectable()

export class TaskService{
  public getTasks(): Array<Task>{
    return TASKS;
  }
}