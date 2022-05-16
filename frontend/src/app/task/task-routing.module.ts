import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewAllMarkedTasksComponent } from './view-all-marked-tasks/view-all-marked-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAddTaskComponent } from './view-add-task/view-add-task.component';

const routes: Routes = [
  {path:'', children: [
    {
      path:'create', component:ViewAddTaskComponent
    },
    {
      path:'marksTask', component:ViewAllMarkedTasksComponent
    },
    {
      path:'update/:id', component:UpdateTaskComponent
    }
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
