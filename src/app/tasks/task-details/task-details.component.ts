import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserTask } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task?: UserTask;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.taskService.getTaskById(id) )
    )
    .subscribe( task => this.task = task);
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task!.id)
    .subscribe(res => {
      if(res) {
        this.router.navigate(['/']);
      }
    })
  }

}
