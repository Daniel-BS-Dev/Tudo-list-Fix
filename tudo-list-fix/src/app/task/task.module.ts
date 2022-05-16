import { CommonModule } from '@angular/common';
import { MarkTasksComponent } from './mark-tasks/mark-tasks.component';
import { ViewAllMarkedTasksComponent } from './view-all-marked-tasks/view-all-marked-tasks.component';
import { NgModule, LOCALE_ID} from '@angular/core';

import { TaskRoutingModule } from './task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavComponent } from '../component/nav/nav.component';
import { ViewNewTaskComponent } from './view-new-task/view-new-task.component';
import { ViewAddTaskComponent } from './view-add-task/view-add-task.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CrudService } from './crud.service';
import { UpdateTaskComponent } from './update-task/update-task.component';

registerLocaleData(localePT);


@NgModule({
  declarations: [
    AddTaskComponent,
    NavComponent,
    ViewAddTaskComponent,
    ViewNewTaskComponent,
    ViewAllMarkedTasksComponent,
    MarkTasksComponent,
    UpdateTaskComponent,
    
    
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
  

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    CrudService
  ],
  exports:[
    AddTaskComponent,
    NavComponent,
    ViewAddTaskComponent,
    ViewNewTaskComponent,
    ViewAllMarkedTasksComponent,
    MarkTasksComponent,
    UpdateTaskComponent,
    
  ]
})
export class TaskModule { }
