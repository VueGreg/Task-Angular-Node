import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

declare type Task = { id: number, text: string, finish: boolean }

@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  http = inject(HttpClient);

  listTasks: Task[] = []

  ngOnInit()
  {
    this.http
    .get<Task[]>("http://localhost:3000/tasks")
    .subscribe(result => { 
      this.listTasks = result 
      console.log(this.listTasks);
      
    })
  }

  deleteTask(id: number)
  {
    this.http
      .delete(`http://localhost:3000/tasks/${id}`)
      .subscribe(( result : any ) => {
          // if (result.status === 201) {
          //   this.getTask()
          // }
          this.getTask()
      })
  }

  getTask()
  {
    this.http
    .get<Task[]>("http://localhost:3000/tasks")
    .subscribe(result => { 
      this.listTasks = result 
      console.log(this.listTasks);
      
    })
  }

}
