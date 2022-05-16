import { MyTasks } from './../models/task';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { MyTask } from '../models/task';

@Component({
  selector: 'app-mark-tasks',
  templateUrl: './mark-tasks.component.html',
  styleUrls: ['./mark-tasks.component.scss'],
})
export class MarkTasksComponent implements OnInit {

  taskList$: Observable<MyTasks>;

  constructor(private service: CrudService) {
    this.taskList$ = this.service.findAll();
  }

  ngOnInit(): void {
    this.taskList$;
    
  }

  onIsMark(task: MyTask){
    this.service.onIsMark(task);
  
  }
}
