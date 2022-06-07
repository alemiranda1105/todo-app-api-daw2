import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { MaterialModule } from '../material/material.module';
import { TasksRoutingModule } from '../tasks/tasks-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TasksRoutingModule,
    AppRoutingModule
  ],
  exports: [
    BackButtonComponent
  ]
})
export class UiModule { }
