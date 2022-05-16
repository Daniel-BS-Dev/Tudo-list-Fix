import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CrudService } from '../crud.service';
import { MyTask, MyTasks } from '../models/task';

@Component({
  selector: 'app-view-new-task',
  templateUrl: './view-new-task.component.html',
  styleUrls: ['./view-new-task.component.scss'],
})
export class ViewNewTaskComponent implements OnInit {
  taskList$!: Observable<MyTasks>;

  constructor(private service: CrudService) {}

  ngOnInit(): void {
    this.taskList$ = this.service.refresh$.pipe(
      switchMap(() => this.service.findAll())
    );
  }

  deleteTask(task: MyTask): void {
    const title = task.title.toUpperCase();
    const deleteTask = window.confirm(`Deletar A Tarefa de título (${title})`);

    if (!deleteTask) {
      return;
    }

    this.service.delete(task.id!).subscribe(() => {
      this.service.showMessage('Tarefa Deletada');
      this.service.refresh$.next(true);
    });
  }

  onIsMark(task: MyTask) {
    this.service.onIsMark(task);
  }
}
