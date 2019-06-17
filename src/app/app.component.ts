import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  task: Task = new Task(21, 'ASDxF');
}

export class Task {
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title
  }
}
