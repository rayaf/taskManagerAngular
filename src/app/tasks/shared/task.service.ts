import { Http } from '@angular/http';
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
  public constructor(private http: Http){
    
  }
  public getTasks(): Promise<Task[]>{
    let promise = new Promise((resolve, reject)=>{
      if(TASKS.length > 0){
        resolve(TASKS);
      }else{
        let error_msg = "Não ah tarefas";
        reject(error_msg);
      }
    })
    
    return promise;
  }


  public getImportantTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS.slice(0, 3));
  }


  public getTask(id: number): Promise<Task>{
    return this.getTasks()
      .then(tasks => tasks.find(task => task.id === id))
  }
}