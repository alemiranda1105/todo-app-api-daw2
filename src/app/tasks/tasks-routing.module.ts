import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from '../task-page/task-page.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
    {
        path: '',
        component: TaskPageComponent,
        children: [
            {
                path: 'list',
                component: TasksListComponent
            },
            {
                path: 'details/:id',
                component: TaskDetailsComponent
            },
            {
                path: 'edit/:id',
                component: TaskFormComponent
            },
            {
                path: 'create',
                component: TaskFormComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
