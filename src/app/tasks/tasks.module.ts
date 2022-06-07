import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MaterialModule } from '../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TaskFormComponent,
    TasksComponent,
    TasksListComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    UiModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    TasksListComponent
  ]
})
export class TasksModule { }
