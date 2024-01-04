import { Component } from '@angular/core';
import todo from '../data';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

constructor(private _todoservice: TodoService){}

  displayedColumns: string[] = ['id', 'name', 'title'];
  dataSource =[];

  ngOnInit(): void{
    this._todoservice.getAll().subscribe((data:any) =>{
      this.dataSource = data;
})
  }
}
