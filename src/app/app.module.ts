import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksModule } from './tasks/tasks.module';
import { MaterialModule } from './material/material.module';
import { TaskPageComponent } from './task-page/task-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskPageComponent
  ],
  imports: [
    MaterialModule,
    TasksModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
