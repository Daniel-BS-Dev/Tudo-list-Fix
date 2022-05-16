import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyTask } from './../models/task';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent implements OnInit {
  task: FormGroup;

  constructor(
    private service: CrudService,
    private router: Router,
    private id: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.task = this.formBuilder.group({
      id: [''],
      title: [''],
      text: ['', [Validators.required]],
      isMark: [false],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.readById(id))
      )
      .subscribe((task) => this.updateTask(task));
  }

  private updateTask(task: MyTask): void {
    this.task.patchValue({
      id: task.id,
      title: task.title,
      text: task.text,
      isMark: task.isMark,
      date: task.date,
    });
  }

  get title() {
    return this.task.get('title')!;
  }

  get text() {
    return this.task.get('text')!;
  }

  get date() {
    return this.task.get('date')!;
  }

  onSubmit() {
    if (this.task.valid) {
      if (this.title?.value == '') {
        this.title?.setValue('Sem Título');
      }

      this.service.updateTask(this.task.value).subscribe(() => {
        this.cancel();
        this.service.showMessage('Tarefa atualizada');
      });
    }
  }

  cancel(): void {
    this.router.navigate(['task/create']);
  }
}
