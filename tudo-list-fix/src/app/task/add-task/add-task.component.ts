import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavService } from 'src/app/component/nav/nav.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  addTask: boolean = true;
  task: FormGroup;

  constructor(
    private service: NavService,
    private crudService: CrudService,
    private formBuilder: FormBuilder
  ) {
    this.task = this.formBuilder.group({
      title: [''],
      text: ['', [Validators.required]],
      isMark: [false],
      date: ['', [Validators.required]],
    });
  }

  onAddTask() {
    this.addTask = this.service.onShowMenu();
  }

  get text() {
    return this.task.get('text')!;
  }

  get date() {
    return this.task.get('date')!;
  }

  private get title() {
    return this.task.get('title')!;
  }

  newTask(): void {
    if (this.title?.value == '') {
      this.title?.setValue('Sem Título');
    }

    if (this.task.valid) {
      this.crudService.newTask(this.task.value).subscribe(() => {
        this.crudService.showMessage('Tarefa Criada');
        this.crudService.refresh$.next(true);
        this.addTask = true;
      });
      this.resetInput();
    }
  }

  resetInput() {
    this.text.setValue('');
    this.title.setValue('');
  }
}
