import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

const routes: Routes = [

  {path:"",redirectTo:"addtask",pathMatch:"full"},
  {path:"addtask",component:TaskAddComponent},
  {path:"updatetask",component:TaskUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
