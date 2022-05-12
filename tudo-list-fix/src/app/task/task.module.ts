import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { NavComponent } from '../component/nav/nav.component';
import { ViewNewTaskComponent } from './view-new-task/view-new-task.component';
import { ViewAddTaskComponent } from './view-add-task/view-add-task.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CrudService } from './crud.service';
import { MarkService } from './mark-tasks/mark.service';
registerLocaleData(localePT);


@NgModule({
  declarations: [
    AddTaskComponent,
    NavComponent,
    ViewAddTaskComponent,
    ViewNewTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    CrudService,
    MarkService
  ],
  exports:[
    AddTaskComponent,
    NavComponent,
    ViewAddTaskComponent,
    ViewNewTaskComponent
  ]
})
export class TaskModule { }
