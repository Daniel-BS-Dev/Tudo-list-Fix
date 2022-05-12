import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAddTaskComponent } from './view-add-task/view-add-task.component';

const routes: Routes = [
  {path:'', component:ViewAddTaskComponent, //children: [
    //{
    //  path:'', component:LoginComponent
   // }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
